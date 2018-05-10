(function () {
'use strict';

class Slider {
  /**
   *
   * @param {Array} slides //DOM nodes of slides;
   * @param {DOM node} controls //fieldset of radios;
   * @param {Number} timeOut // timeout (ms) for autoswitch in ;
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

}());

//# sourceMappingURL=main.js.map
