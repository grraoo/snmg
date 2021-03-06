(function () {
'use strict';

class Slider {
  /**
   * @param {Array} slides DOM-nodes of slides.
   * @param {Object} controls DOM-node of fieldset with control radios.
   * @param {Number} timeOut timeout (ms) for autoswitch.
   */
  constructor(slides, controls, timeOut) {
    this._slides = slides;
    this._controls = controls;
    this.timeOut = timeOut;
  }

  init() {
    this._controls.addEventListener(`change`, (e) => {
      this.activateSlide(this.getSlideById(e.target.id));
    });
    if (!this._currentSlide) {
      this.nextRndSlide();
    }
  }

  runAutoplay() {
    this.autoIntervalId = setInterval(() => {
      this.nextRndSlide();
    }, this.timeOut);
  }
  stopAutoplay() {
    clearInterval(this.autoIntervalId);
  }

  activateSlide(slide) {
    this.stopAutoplay();
    if (this._currentSlide) {
      this._currentSlide.classList.remove(`slider__item--active`);
    }
    slide.classList.add(`slider__item--active`);
    this._currentSlide = slide;
    this.runAutoplay();
  }

  nextRndSlide() {
    const slideIndex = Math.floor(Math.random() * this._slides.length);
    const currentSlide = this._slides[slideIndex];
    if (currentSlide !== this._currentSlide) {
      this.activateSlide(this._slides[slideIndex]);
      this.turnControlOn(slideIndex);
    } else {
      this.nextRndSlide();
    }
  }

  getSlideById(id) {
    return this._slides.find((slide) => slide.dataset.slide === id);
  }

  turnControlOn(slideIndex) {
    const radioOn = this._controls.querySelector(`input:checked`);
    if (radioOn) {
      radioOn.checked = false;
    }
    this._controls.querySelectorAll(`input`)[slideIndex].checked = true;
  }
}

const initialSlides = [...document.querySelectorAll(`.slider__item`)];
const initialControls = document.querySelector(`#slider__controls-wrap`);
var advSlider = new Slider(initialSlides, initialControls, 5000);

/**
 * Smoothly scroll element to the given target (element.scrollTop) for the given duration
 * @param {object} element element for scroll to
 * @param {number} target position for element for scroll to (element.scrollTop)
 * @param {number} duration time for scrolling
 * @return {Promise} promise that's fulfilled when done, or rejected if
    interrupted
 */
const smoothScrollTo = (element, target, duration) => {
  target = Math.round(target);
  duration = Math.round(duration);
  if (duration < 0) {
    return Promise.reject(`bad duration`);
  }
  if (duration === 0) {
    element.scrollTop = target;
    return Promise.resolve();
  }

  const startTime = Date.now();
  const endTime = startTime + duration;

  const startTop = element.scrollTop;
  const distance = target - startTop;

  // based on http://en.wikipedia.org/wiki/Smoothstep
  const getSmoothStep = (start, end, point) => {
    if (point <= start) {
      return 0;
    }
    if (point >= end) {
      return 1;
    }
    const x = (point - start) / (end - start); // interpolation
    return x * x * (3 - 2 * x);
  };

  return new Promise(function (resolve, reject) {
    let scrollInterval;
    // This is to keep track of where the element's scrollTop is supposed to be, based on what we're doing
    let previousTop = element.scrollTop;

    // This is like a think function from a game loop
    const scrollFrame = function () {
      if (element.scrollTop !== previousTop) {
        // console.log(`interrupted`);
        clearInterval(scrollInterval);

        reject(`interrupted`);
        return;
      }

      // set the scrollTop for this frame
      const now = Date.now();
      const point = getSmoothStep(startTime, endTime, now);
      const frameTop = Math.round(startTop + (distance * point));
      element.scrollTop = frameTop;
      // check if we're done!
      if (now >= endTime) {
        // console.log(`resolve1`);
        clearInterval(scrollInterval);
        resolve();
        return;
      }
      // console.log(target, element.scrollTop, frameTop);

      // If we were supposed to scroll but didn't, then we probably hit the limit, so consider it done; not interrupted.
      if (element.scrollTop === previousTop &&
        element.scrollTop !== frameTop) {
        // console.log(`resolve2`);
        // clearInterval(scrollInterval);

        // resolve();
        return;
      }
      previousTop = element.scrollTop;

      // schedule next frame for execution
      // setTimeout(scrollFrame, 0);
    };

    // boostrap the animation process
    // setTimeout(scrollFrame, 0);
    scrollInterval = setInterval(scrollFrame, 0);
  });
};

const SCROLL_TIME = 2000;
// let lastScrollTop = document.documentElement.scrollTop;
// const autoScroll = (e) => {
//   if (lastScrollTop < document.documentElement.scrollTop) {
//     const unitScrollTo = units.find((unit) => (unit.top() <= document.documentElement.scrollTop + (window.innerHeight / 2)) && unit.top() > document.documentElement.scrollTop + 50);
//     if (unitScrollTo) {
//       smoothScrollTo(document.documentElement, unitScrollTo.top(), 250).then(() => {}).catch((error) => {
//         console.log(error);
//       });
//     }
//   }
//   lastScrollTop = document.documentElement.scrollTop;
// };

// window.addEventListener(`scroll`, autoScroll);

const menu = document.querySelector(`.main-menu`);
const menuToggle = menu.querySelector(`.main-menu__toggle`);
const menuItems = menu.querySelector(`.main-menu__items`);
const menuHeight = menuItems.offsetHeight;

const units = [...document.querySelectorAll(`.unit`)].map((unit) => {
  return {
    id: `#${unit.id}`,
    top: () => unit.offsetTop
  };
}).reverse();
let currentUnit;

const reActivateLink = (link) => {
  const currentLInk = document.querySelector(`.main-menu__link--active`);
  if (currentLInk) {
    currentLInk.classList.remove(`main-menu__link--active`);
  }
  link.classList.add(`main-menu__link--active`);
};
const activateLinkByScroll = (e) => {
  let tempCurrentUnit = units.find((unit) => unit.top() <= document.documentElement.scrollTop + 50);

  if (currentUnit !== tempCurrentUnit) {
    currentUnit = tempCurrentUnit;
    const link = document.querySelector(`a[href="${currentUnit.id}"]`);
    if (link) {
      reActivateLink(link);
    }
  }
};

window.addEventListener(`scroll`, activateLinkByScroll);

const switchMenu = () => {
  menu.classList.toggle(`main-menu--active`);
  if (menu.classList.contains(`main-menu--active`)) {
    menuItems.style = `max-height: ${menuHeight}px`;
  } else {
    menuItems.style = `max-height: 0`;
  }
};
const scrollBtn = document.getElementById(`scroll-down`);

const runSmoothScroll = (e) => {
  if (e.target.href && e.target.getAttribute(`href`).length > 1) {
    e.preventDefault();
    // window.removeEventListener(`scroll`, autoScroll);
    const element = document.querySelector(e.target.getAttribute(`href`));
    smoothScrollTo(document.documentElement, element.offsetTop, SCROLL_TIME).then(switchMenu).then(() => {
      menu.classList.remove(`main-menu--active`);
      menuItems.style = `max-height: 0`;
    }).catch((error) => {
      console.log(error);
    }).then(() => {
      // window.addEventListener(`scroll`, autoScroll);
    });
  }
};
var initMenu = () => {
  menuItems.style = `max-height: 0`;

  menu.addEventListener(`click`, runSmoothScroll);
  menuToggle.addEventListener(`click`, switchMenu);
  scrollBtn.addEventListener(`click`, runSmoothScroll);
};

var scrollerPlugin = () => {!function t(e,i,r){function n(o,a){if(!i[o]){if(!e[o]){var l="function"==typeof require&&require;if(!a&&l)return l(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var h=i[o]={exports:{}};e[o][0].call(h.exports,function(t){var i=e[o][1][t];return n(i?i:t)},h,h.exports,t,e,i,r);}return i[o].exports}for(var s="function"==typeof require&&require,o=0;o<r.length;o++)n(r[o]);return n}({1:[function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}();!function(){Array.from||(Array.from=t("array-from")),function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this);}});});}([Element.prototype,CharacterData.prototype,DocumentType.prototype]),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||function(t){var e=document.querySelectorAll(t),i=this;return Array.prototype.some.call(e,function(t){return t===i})}),Element.prototype.closest||(Element.prototype.closest=function(t){for(var e=this;e;){if(e.matches(t))return e;e=e.parentElement;}return null});var e=function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=arguments.length<=1||void 0===arguments[1]?document:arguments[1],i=e.querySelectorAll(t);return i?i[0]:null},i=function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=arguments.length<=1||void 0===arguments[1]?document:arguments[1],i=e.querySelectorAll(t);return i||null},s=function(t){return t.changedTouches&&t.changedTouches.length&&t.changedTouches[0].pageX||t.touches&&t.touches.length&&t.touches[0].pageX||t.pageX||0},o=function(t){return t.ctrlKey||t.metaKey},a=function(t){return 1===t.which||0===t.button},l=function(t){return!!t.touches||!!t.changedTouches},c=function(t){for(var e=t.childNodes,i=[],r=e.length;r--;)1==e[r].nodeType&&i.unshift(e[r]);return i},h=function(){return navigator.userAgent.toLowerCase().indexOf("android")>-1},u=function(){function t(e){r(this,t);var i=e.align,n=void 0===i?"center":i,s=e.noAnchors,o=void 0===s?!1:s,a=e.noScrollbar,l=void 0===a?!1:a,u=e.scrollbar,f=void 0===u?"visible":u,d=e.anchors,g=void 0===d?"visible":d,v=e.start,m=void 0===v?0:v,b=e.startAnimation,p=void 0===b?!1:b,y=e.el,w=e.onClick,k=e.useOuterHtml,A=void 0===k?!1:k;this.config={align:n,noAnchors:"hidden"==g||o,noScrollbar:"hidden"==f||l,onClick:w,start:m,startAnimation:p,prefix:"ab_scroller",draggingClsnm:"is-dragging",leftAlignClsnm:"is-left-align",borderVsblClsnm:"is-visible",noAnchorsClsnm:"is-no-anchors",noScrollbarClsnm:"is-no-scrollbar",useOuterHtml:A,easing:function(t){return 1===t?1:-Math.pow(2,-10*t)+1}},this.state={scrolled:0,scrollable:!0,pointerDown:!1,scrollbarPointerDown:!1,mouseScroll:!1,scrollbarWidth:0,scrollbarFactor:0,pageX:[],scrolledDiff:0,downEventTS:0,moveEventTS:0,scrollbarDownPageX:0,scrollClickDisabled:!1,limitLeft:0,limitRight:0,stripWidth:0,swipeDirection:null,touchX:0,touchY:0,let:y.hasChildNodes()&&c(y).length||0,el:y||null,isAndroid:h()},window.raf=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){setTimeout(t,1e3/60);}}(),this.init(y);}return n(t,[{key:"get",value:function(t){return"undefined"!=typeof this.state[t]?this.state[t]:null}},{key:"set",value:function(t,e){this.state[t]=e;}},{key:"push",value:function(t,e){this.state[t]&&this.state[t].push(e);}},{key:"clear",value:function(t){var e=this.state[t];e&&e.length&&(e.length=0);}},{key:"getLastMeaningfull",value:function(t){var e=this.state[t],i=e&&e.length&&e.length>3?3:1;return e[e.length-i]||0}},{key:"addClass",value:function(t,e){new RegExp("(\\s|^)"+e+"(\\s|$)").test(t.className)||(t.className+=" "+e);}},{key:"removeClass",value:function(t,e){t.className=t.className.replace(new RegExp("(\\s+|^)"+e+"(\\s+|$)","g")," ").replace(/^\s+|\s+$/g,"");}},{key:"alignScbToRight",value:function(){var t=this.config.prefix,i=this.state.el,r=e("."+t+"-scrollbar",i);this.addClass(r,"is-right");}},{key:"releaseScb",value:function(){var t=this.config.prefix,i=this.state.el,r=e("."+t+"-scrollbar",i);this.removeClass(r,"is-right");}},{key:"setPos",value:function(t){var i=this.config.prefix,r=this.state.el,n=e("."+i+"-strip",r);this.setPosition(n,t);}},{key:"setScbPos",value:function(t){var i=this.config.prefix,r=this.state.el,n=e("."+i+"-scrollbar",r);this.setPosition(n,t);}},{key:"setPosition",value:function(t,e){t.style.webkitTransform="translateX("+e+"px)",t.style.MozTransform=t.style.msTransform=t.style.OTransform=t.style.transform="translateX("+e+"px)";}},{key:"setWidth",value:function(t){var i=this.config.prefix,r=this.state.el,n=e("."+i+"-scrollbar",r);n.style.width=t+"px";}},{key:"init",value:function(t){var r=this;this.createWrapper(),this.wrapItems(),this.createAnchors(),this.setSize(),this.checkScrollable();var n=this.config.prefix,s=this.state.el,o=e("."+n+"-wrapper",s),a=e("."+n+"-strip",s),l=i("a",a),c=e("."+n+"-scrollwrap",s),h=e("."+n+"-scrollbar",s);i("."+n+"-anchor",s);("center"!==this.config.align||s.getAttribute("data-leftalign")||s.getAttribute("data-leftAlign")||s.getAttribute("data-leftIfWide")||s.getAttribute("data-leftifwide"))&&this.addClass(s,this.config.leftAlignClsnm),(this.config.noAnchors||"hidden"==s.getAttribute("data-anchors")||s.getAttribute("data-noanchors")||s.getAttribute("data-noAnchors"))&&this.addClass(s,this.config.noAnchorsClsnm),(this.config.noScrollbar||"hidden"==s.getAttribute("data-scrollbar")||s.getAttribute("data-noscrollbar")||s.getAttribute("data-noScrollbar"))&&this.addClass(s,this.config.noScrollbarClsnm),s.getAttribute("data-start")&&(this.config.start=s.getAttribute("data-start")),(s.getAttribute("data-startAnimation")||s.getAttribute("data-startanimation"))&&(this.config.startAnimation=!0),a.addEventListener("mousedown",this.onPointerDown.bind(this)),a.addEventListener("touchstart",this.onPointerDown.bind(this)),document.addEventListener("mousemove",this.onPointerMove.bind(this)),document.addEventListener("touchmove",this.onPointerMove.bind(this)),document.addEventListener("mouseup",this.onPointerUp.bind(this)),document.addEventListener("touchend",this.onPointerUp.bind(this)),h.addEventListener("mousedown",this.onScrollbarPointerDown.bind(this)),h.addEventListener("touchstart",this.onScrollbarPointerDown.bind(this)),document.addEventListener("mousemove",this.onScrollbarPointerMove.bind(this)),document.addEventListener("touchmove",this.onScrollbarPointerMove.bind(this)),document.addEventListener("mouseup",this.onScrollbarPointerUp.bind(this)),document.addEventListener("touchend",this.onScrollbarPointerUp.bind(this)),c.addEventListener("click",this.onScrollClick.bind(this));var u=/Firefox/i.test(navigator.userAgent)?"wheel":"mousewheel";a.addEventListener(u,this.onScroll.bind(this)),this.bindAnchorsEvents(),Array.from(l).forEach(function(t){t.addEventListener("click",r.onClickLink.bind(r),!1),t.addEventListener("focus",r.onFocus.bind(r),!1),t.addEventListener("keydown",r.onKeyDown.bind(r),!1);}),window.addEventListener("resize",function(t){r.setSize(),r.checkScrollable(),r.checkBorderVisibility();}),window.addEventListener("load",function(t){r.setSize(),r.checkScrollable();});var f=function(){var t=r.findCentralNode(),e=r.config.startAnimation?1e3:0,i=void 0;t?(i=t.offsetLeft-o.offsetWidth/2+t.offsetWidth/2,i=Math.min(t.offsetLeft,i)):i=r.config.start,r.scrollTo(i,e);},d=function(t){return null===t.offsetParent};d(s)&&!function(){var t=setInterval(function(){if(!d(s)){r.get("scrolled");clearInterval(t),r._update(),r._update(),f();}},50);}(),f(),this.checkBorderVisibility();}},{key:"bindAnchorsEvents",value:function(){var t=this,e=this.config.prefix,r=this.state.el,n=i("."+e+"-anchor",r);Array.from(n).forEach(function(e){e.addEventListener("click",t.onAnchorClick.bind(t));});}},{key:"createWrapper",value:function(){if(!this.config.useOuterHtml){var t=this.config.prefix,e=this.state.el,i=e.innerHTML,r='<div class="'+t+'-wrapper">\n        <div class="'+t+"-border "+t+'-border--left"></div>\n        <div class="'+t+"-border "+t+'-border--right"></div>\n        <div class="'+t+'-strip">'+i+'</div>\n\n        <div class="'+t+'-scrollwrap">\n          <div class="'+t+'-scrollbar"></div>\n        </div>\n        <div class="'+t+'-anchors"></div>\n      </div>';e.innerHTML=r,this.addClass(e,t);}}},{key:"wrapItems",value:function(){var t=this,i=this.config.useOuterHtml,r=this.config.prefix,n=this.state.el,s=e("."+r+"-strip",n);Array.from(c(s)).forEach(function(e){if(i)t.addClass(e,r+"-item");else{var n=document.createElement("div");n.innerHTML=e.outerHTML,n.setAttribute("class",r+"-item"),e.parentNode.insertBefore(n,e),e.remove();}});}},{key:"findCentralNode",value:function(){var t=this.config.prefix,e=this.state.el,r=i('[data-central="true"]',e);return r&&r.length?r[r.length-1].closest("."+t+"-item"):null}},{key:"removeAnchors",value:function(){var t=this.config.prefix,i=this.state.el,r=e("."+t+"-anchors",i);r.innerHTML="";}},{key:"createAnchors",value:function(){var t=this.config.useOuterHtml,i=this.config.prefix,r=this.state.el,n=e("."+i+"-strip",r),s=e("."+i+"-anchors",r),o="",a=0;Array.from(c(n)).forEach(function(r){var n=t?r:e("[data-anchor]",r),s=n?n.getAttribute("data-anchor"):"";o+='<span data-anchorid="'+a+'" class="'+i+'-anchor"><span>'+s+"</span></span>",r.setAttribute("data-anchororiginid",a),a++;}),s.innerHTML=o;}},{key:"setSize",value:function(){var t=this.config.prefix,r=this.state.el,n=e("."+t+"-strip",r),s=e("."+t+"-wrapper",r),o=e("."+t+"-scrollbar",r),a=e("."+t+"-scrollwrap",r),l=i("."+t+"-item",r),c=0,h=0;r.setAttribute("style",""),n.setAttribute("style",""),s.setAttribute("style",""),o.setAttribute("style",""),a.setAttribute("style",""),Array.from(l).forEach(function(t){var e=t.offsetHeight;e>c&&(c=e),h+=t.offsetWidth;});var u=s.offsetWidth,f=a.offsetWidth,d=h+1-r.offsetWidth,g=0!==f&&0!==h?f/h:1;g>=1&&(this.set("scbScrolled",0),this.set("scrolled",0),this.releaseScb());var v=Math.min(this.get("scrolled"),d),m=v*g;r.style.height=c+"px",n.style.height=c+"px",n.style.width=h+1+"px",s.style.height=c+"px",o.style.width=u*g+"px",this.setPos(-1*v),this.setScbPos(m),this.set("limitRight",d),this.set("scrollbarFactor",g),this.set("scrollbarWidth",u*g);}},{key:"checkScrollable",value:function(){var t=this.config.prefix,r=this.state.el,n=(e("."+t+"-strip",r),e("."+t+"-wrapper",r)),s=i("."+t+"-item",r),o=e("."+t+"-anchors",r),a=0,l=n.offsetWidth;Array.from(s).forEach(function(t){a+=t.offsetWidth;}),l>=a?(this.set("scrollable",!1),this.addClass(r,"is-not-scrollable"),o.setAttribute("style","width: "+a+"px")):(this.set("scrollable",!0),this.removeClass(r,"is-not-scrollable"),o.setAttribute("style","width:auto"));}},{key:"_update",value:function(){var t=this.config.useOuterHtml,e=(this.config.prefix,this.state.el);if("center"!==this.config.align?this.addClass(e,this.config.leftAlignClsnm):this.removeClass(e,this.config.leftAlignClsnm),this.config.noAnchors?this.addClass(e,this.config.noAnchorsClsnm):this.removeClass(e,this.config.noAnchorsClsnm),this.config.noScrollbar?this.addClass(e,this.config.noScrollbarClsnm):this.removeClass(e,this.config.noScrollbarClsnm),t&&(this.wrapItems(),this.removeAnchors(),this.createAnchors(),this.bindAnchorsEvents()),this.setSize(),this.checkScrollable(),this.checkBorderVisibility(),!this.config.noScrollbar){var i=this.get("scrolled");this.animate(i,i,0);}}},{key:"checkElement",value:function(t){return t.target.closest("."+this.config.prefix)==this.state.el}},{key:"onPointerDown",value:function(t){var i=this.get("scrollable");if(t&&i){this.handleTouchStart(t);var r=l(t);if(r||t.preventDefault(),r||a(t)){this.set("pointerDown",!0),this.set("scrollbarPointerDown",!1),this.set("mouseScroll",!1),this.set("downEventTS",(new Date).getTime());var n=this.get("scrolled")+s(t);this.set("scrolledDiff",n);var o=this.config.prefix,c=this.state.el;e("."+o+"-strip",c);this.addClass(e("html"),this.config.draggingClsnm);}}}},{key:"onPointerMove",value:function(t){var e=this.get("scrollable"),i=this.get("pointerDown");if(t&&i&&e&&(this.handleTouchMove(t),"v"!=this.get("swipeDirection"))){t.preventDefault();var r=this.get("scrolledDiff"),n=(this.get("scrolled"),s(t)),o=r-n,a=this.get("limitLeft"),l=this.get("limitRight"),c=this.get("scrollbarFactor"),h=o*c,u=this.get("scrollbarWidth");return a>o?(o=Math.round(.2*o),u+=Math.round(.2*h),h=0,this.setWidth(u)):o>l?(o=Math.round(.2*o+.8*l),u-=Math.round(.8*(o-l)*c),this.alignScbToRight(),this.setWidth(u)):this.releaseScb(),this.setPos(-1*o),this.setScbPos(h),this.set("scrolled",o),this.set("moveEventTS",(new Date).getTime()),this.push("pageX",n),this.checkBorderVisibility(),!1}}},{key:"onPointerUp",value:function(t){var i=this.get("scrollable"),r=this.get("pointerDown");if(t&&r&&i){if("v"==this.get("swipeDirection"))return this.set("pointerDown",!1),this.set("scrollbarPointerDown",!1),this.set("mouseScroll",!1),this.set("swipeDirection",null),void this.clear("pageX");t.preventDefault(),this.set("pointerDown",!1);var n=this.config.prefix,a=this.state.el;e("."+n+"-strip",a);this.removeClass(e("html"),this.config.draggingClsnm);var l=this.get("limitLeft"),c=this.get("limitRight"),h=this.get("scrolled"),u=this.getLastMeaningfull("pageX"),f=s(t),d=f-u,g=((new Date).getTime()-this.get("moveEventTS"))/1.5,v=h-8*d;if(0===u){if(this.config.onClick)return this.config.onClick(t);var m=t.target.closest("a");if(!m)return;var b=m.getAttribute("target"),p=m.getAttribute("href"),y=o(t);if(y)return window.open(p);if(!b&&p)return window.location.href=p;if(b.indexOf("blank")>-1&&p)return window.open(p)}if(l>h)this.animate(h,l,10,!0);else if(l>v)this.animate(h,l,10);else if(h>c)this.animate(h,c,10,!0);else if(v>c)this.animate(h,c,10);else if(150>g&&Math.abs(d)>2){var w=Math.round(Math.abs(d)/g);this.animate(h,Math.round(v),w);}return this.clear("pageX"),!1}}},{key:"onClickLink",value:function(t){var e=this.get("scrollable");return e?(t.preventDefault(),!1):t}},{key:"onFocus",value:function(t){t.preventDefault(),t.stopPropagation();var i=this.config.prefix,r=this.state.el;this.releaseScb(),r.scrollLeft=0,setTimeout(function(){r.scrollLeft=0;},0);var n=t.target.closest("."+i+"-item"),s=(e("."+i+"-scrollwrap",r),this.get("limitLeft")),o=this.get("limitRight"),a=this.get("scrolled"),l=Math.min(Math.max(n.offsetLeft,s),o);return Math.abs(l)<2&&(l=0),this.set("mouseScroll",!1),this.animate(a,l),!1}},{key:"onKeyDown",value:function(t){if(t.keyCode&&13===t.keyCode){var e=o(t),i=t.target.getAttribute("href");e?window.open(i,"_blank",{}):window.location=i;}}},{key:"onScroll",value:function(t){var e=this.get("scrollable");if(t&&t.deltaX&&!(Math.abs(t.deltaY)>Math.abs(t.deltaX))&&e){t.preventDefault();var i=t.deltaX,r=this.get("limitLeft"),n=this.get("limitRight"),s=Math.min(Math.max(this.get("scrolled")+i,r),n),o=this.get("scrollbarWidth"),a=this.get("scrollbarFactor"),l=s*a;return this.setPos(-1*s),s==n?this.alignScbToRight():this.releaseScb(),this.setScbPos(l),this.setWidth(o),this.set("scrolled",s),this.set("mouseScroll",!0),this.checkBorderVisibility(),!1}}},{key:"onScrollClick",value:function(t){var e=this.get("scrollable"),i=this.get("scrollClickDisabled");if(i)return void this.set("scrollClickDisabled",!1);if(t&&t.preventDefault&&e){t.preventDefault();var r=this.get("scrollbarWidth"),n=this.get("scrollbarFactor"),o=this.get("limitLeft"),a=this.get("limitRight"),l=a*n,c=this.get("scrolled"),h=s(t),u=h-r/2,f=u-r/2,d=u+r/2,g=u/n;return o>f?g=o:d>l&&(g=a),this.animate(c,g),!1}}},{key:"onAnchorClick",value:function(t){var i=this.get("scrollable");if(t&&t.target&&i){var r=t.target.closest("[data-anchorid]").getAttribute("data-anchorid");if(r){this.releaseScb();var n=(this.config.prefix,this.state.el),s=e('[data-anchororiginid="'+r+'"]',n),o=this.get("limitLeft"),a=this.get("limitRight"),l=this.get("scrolled"),c=Math.min(Math.max(s.offsetLeft,o),a);return Math.abs(c)<2&&(c=0),this.set("mouseScroll",!1),this.animate(l,c),!1}}}},{key:"onScrollbarPointerDown",value:function(t){if(t&&(l(t)||a(t))){t.preventDefault(),t.stopPropagation(),this.releaseScb();var e=s(t),i=this.get("scrolled"),r=this.get("scrollbarFactor");return this.set("scrollbarPointerDown",!0),this.set("scrollClickDisabled",!0),this.set("pointerDown",!1),this.set("mouseScroll",!1),this.set("scrollbarDownPageX",e-i*r),!1}}},{key:"onScrollbarPointerMove",value:function(t){var e=this.get("scrollbarPointerDown");if(t&&e){t.preventDefault(),t.stopPropagation();var i=this.get("scrollbarFactor"),r=this.get("scrollbarDownPageX"),n=s(t),o=this.get("limitLeft"),a=this.get("limitRight"),l=n-r,c=Math.min(Math.max(l/i,o),a),h=c*i;return this.setPos(-1*c),this.setScbPos(h),this.set("scrolled",c),this.checkBorderVisibility(),!1}}},{key:"onScrollbarPointerUp",value:function(t){var e=this.get("scrollbarPointerDown");if(t&&e)return t.preventDefault(),t.stopPropagation(),this.set("scrollbarPointerDown",!1),!1}},{key:"handleTouchStart",value:function(t){l(t)&&(this.set("touchX",t.changedTouches[0].clientX||t.touches[0].clientX),this.set("touchY",t.changedTouches[0].clientY||t.touches[0].clientY));}},{key:"handleTouchMove",value:function(t){var e=this.get("touchX"),i=this.get("touchY");if(e&&i&&l(t)){var r=t.changedTouches[0].clientX||t.touches[0].clientX,n=t.changedTouches[0].clientY||t.touches[0].clientY,s=e-r,o=i-n;Math.abs(s)>Math.abs(o)?this.set("swipeDirection","h"):this.set("swipeDirection","v"),this.set("touchX",0),this.set("touchY",0);}}},{key:"animate",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?0:arguments[1],i=this,r=arguments.length<=2||void 0===arguments[2]?10:arguments[2],n=arguments.length<=3||void 0===arguments[3]?!1:arguments[3],s=e-t,o=Math.max(.05,Math.min(Math.abs(s)/r,1)),a=this.get("scrollbarFactor"),l=this.get("limitRight")*a,c=(this.get("limitRight"),0==r?1:0),h=this.get("scrolled"),u=h*a,f=function d(){if(!i.get("pointerDown")&&!i.get("mouseScroll")){if(c+=1/60,h=1>c?t+s*i.config.easing(c/o):e,u=1>c?t*a+s*i.config.easing(c/o)*a:e*a,u=Math.min(u,l),n){var r=i.get("scrollbarWidth");e>t?r-=s*a*(1-i.config.easing(c/o)):r+=s*a*(1-i.config.easing(c/o)),i.setWidth(r);}else u>=l?i.alignScbToRight():i.releaseScb(),i.setScbPos(u);i.setPos(-1*h),i.set("scrolled",h),1>c?raf(d):i.checkBorderVisibility();}};return f()}},{key:"checkBorderVisibility",value:function(){var t=this.get("scrolled"),i=this.get("limitLeft"),r=this.get("limitRight"),n=this.config.prefix,s=this.state.el;if(t>i){var o=e("."+n+"-border--left",s);this.addClass(o,this.config.borderVsblClsnm);}else{var a=e("."+n+"-border--left",s);this.removeClass(a,this.config.borderVsblClsnm);}if(r>t){var l=e("."+n+"-border--right",s);this.addClass(l,this.config.borderVsblClsnm);}else{var c=e("."+n+"-border--right",s);this.removeClass(c,this.config.borderVsblClsnm);}}},{key:"scrollTo",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?1e3:arguments[1],i=this.get("limitRight"),r=this.get("limitLeft"),n=isNaN(t)?0:parseInt(t);n=Math.min(Math.max(n,r),i),"end"==t?n=i:"start"==t?n=r:"center"==t&&(n=i/2),this.animate(this.get("scrolled"),n,e);}},{key:"update",value:function(t){var e=t.align,i=void 0===e?this.config.align:e,r=t.noAnchors,n=void 0===r?this.config.noAnchors:r,s=t.noScrollbar,o=void 0===s?this.config.noScrollbar:s,a=t.scrollbar,l=t.anchors,c=t.onClick,h=void 0===c?this.config.onClick:c,u=t.start,f=void 0===u?this.config.start:u,d=t.startAnimation,g=void 0===d?this.config.startAnimation:d;this.config.align=i,this.config.noAnchors=n?"visible"!=l:"hidden"==l,this.config.noScrollbar=o?"visible"!=a:"hidden"==a,this.config.onClick=h,this.config.start=f,this.config.startAnimation=g,this._update();}}]),t}(),f=function(){var t=i(".scroller");Array.from(t).forEach(function(t){new u({el:t});});};document.addEventListener("DOMContentLoaded",function(){return f}),document.onreadystatechange=function(){"interactive"==document.readyState&&f();},window.Scroller=u;}();},{"array-from":2}],2:[function(t,e,i){e.exports="function"==typeof Array.from?Array.from:t("./polyfill");},{"./polyfill":3}],3:[function(t,e,i){e.exports=function(){var t=function(t){return"function"==typeof t},e=function(t){var e=Number(t);return isNaN(e)?0:0!==e&&isFinite(e)?(e>0?1:-1)*Math.floor(Math.abs(e)):e},i=Math.pow(2,53)-1,r=function(t){var r=e(t);return Math.min(Math.max(r,0),i)},n=function(t){if(null!=t){if(["string","number","boolean","symbol"].indexOf(typeof t)>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in t)return Symbol.iterator;if("@@iterator"in t)return"@@iterator"}},s=function(e,i){if(null!=e&&null!=i){var r=e[i];if(null==r)return void 0;if(!t(r))throw new TypeError(r+" is not a function");return r}},o=function(t){var e=t.next(),i=Boolean(e.done);return i?!1:e};return function(e){"use strict";var i,a=this,l=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof l){if(!t(l))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(i=arguments[2]);}var c,h,u=s(e,n(e));if(void 0!==u){c=t(a)?Object(new a):[];var f=u.call(e);if(null==f)throw new TypeError("Array.from requires an array-like or iterable object");h=0;for(var d,g;;){if(d=o(f),!d)return c.length=h,c;g=d.value,l?c[h]=l.call(i,g,h):c[h]=g,h++;}}else{var v=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var m=r(v.length);c=t(a)?Object(new a(m)):new Array(m),h=0;for(var b;m>h;)b=v[h],l?c[h]=l.call(i,b,h):c[h]=b,h++;c.length=m;}return c}}();},{}]},{},[1]);
};

scrollerPlugin();
const Scroller = window.Scroller;

const scroller1 = new Scroller({
  el: document.querySelector(`#logo1`),
  anchors: `hidden`,
  scrollbar: `hidden`
});
const scroller2 = new Scroller({
  el: document.querySelector(`#logo2`),
  anchors: `hidden`,
  scrollbar: `hidden`
});
const scroller3 = new Scroller({
  el: document.querySelector(`#logo3`),
  anchors: `hidden`,
  scrollbar: `hidden`
});

const windowHeight = () => document.documentElement.clientHeight - 150;
const scrollerWidth = (scroller) => scroller.state.limitRight;
const scrollerOffset = (scroller) => scroller.state.el.getBoundingClientRect().top;
const scrollerPosition = (scroller) => ((scrollerOffset(scroller) - windowHeight()) / windowHeight()) * (-1);

const runScroller = (scroller) => {
  if (scrollerOffset(scroller) > 20 && scrollerOffset(scroller) < windowHeight()) {
    scroller.scrollTo(scrollerPosition(scroller) * scrollerWidth(scroller));
  } else if (scrollerOffset(scroller) <= 20 && scrollerOffset(scroller) > -60) {
    scroller.scrollTo(`end`);
  } else if (scrollerOffset(scroller) >= windowHeight() && scrollerOffset(scroller) < windowHeight() - 150) {
    scroller.scrollTo(`start`);
  }
};

const runScrollers = () => {
  runScroller(scroller1);
  runScroller(scroller2);
  runScroller(scroller3);
};

var runScroller$1 = () => {
  window.addEventListener(`scroll`, runScrollers);
};

runScroller$1();

initMenu();

advSlider.init();

}());

//# sourceMappingURL=main.js.map
