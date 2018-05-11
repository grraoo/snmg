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

var initMenu = (menu) => {
  const menuToggle = menu.querySelector(`.main-menu__toggle`);
  const menuItems = menu.querySelector(`.main-menu__items`);
  const menuHeight = menuItems.offsetHeight;

  menuItems.style = `max-height: 0`;

  const switchMenu = () => {
    menu.classList.toggle(`main-menu--active`);
    if (menu.classList.contains(`main-menu--active`)) {
      menuItems.style = `max-height: ${menuHeight}px`;
    } else {
      menuItems.style = `max-height: 0`;
    }
  };

  menuToggle.addEventListener(`click`, switchMenu);
};

const menu = document.querySelector(`.main-menu`);
initMenu(menu);

const initialSlides = [...document.querySelectorAll(`.slider__item`)];
const initialControls = document.querySelector(`#slider__controls-wrap`);
const advSlider = new Slider(initialSlides, initialControls, 5000);
advSlider.init();

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
console.log(scroller1);
const scrollLogos = () => {
  scroller3.scrollTo(`start`);
  scroller2.scrollTo(`end`);
  scroller1.scrollTo(`start`);
  setTimeout(() => {
    scroller3.scrollTo(`end`);
    scroller2.scrollTo(`start`);
    scroller1.scrollTo(`end`);
  }, 8000);
};
scrollLogos();
setInterval(scrollLogos, 17000);

// const scroller2 = new Scroller({
//   el: document.querySelector(`#scroller2`),
//   anchors: `hidden`
// });

}());

//# sourceMappingURL=main.js.map
