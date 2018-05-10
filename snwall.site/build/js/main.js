(function () {
'use strict';

class Slider {
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
      this.activateSlide(this._slides[0]);
      this.turnRadioOn(0);
    }
  }

  activateSlide(slide) {
    clearInterval(this.autoSwitch);
    if (this._currentSlide) {
      this._currentSlide.classList.remove(`slider__item--active`);
    }
    slide.classList.add(`slider__item--active`);
    this._currentSlide = slide;
    this.autoSwitch = setInterval(() => {
      this.nextSlide();
    }, this.timeOut);
  }
  nextSlide() {
    console.log(`next`);
    const slideIndex = Math.floor(Math.random() * this._slides.length);
    const currentSlide = this._slides[slideIndex];
    if (currentSlide !== this._currentSlide) {
      this.activateSlide(this._slides[slideIndex]);
      this.turnRadioOn(slideIndex);
    } else {
      this.nextSlide();
    }
  }
  getSlideById(id) {
    return this._slides.find((slide) => slide.dataset.slide === id);
  }

  turnRadioOn(slideIndex) {
    const radioOn = this._controls.querySelector(`input:checked`);
    if (radioOn) {
      radioOn.checked = false;
    }
    this._controls.querySelectorAll(`input`)[slideIndex].checked = true;
  }
}

const initialSlides = [...document.querySelectorAll(`.slider__item`)];
const initialControls = document.querySelector(`#slider__controls-wrap`);

const advSlider = new Slider(initialSlides, initialControls, 3000);

advSlider.init();

const menu = document.querySelector(`.main-menu`);
const menuToggle = menu.querySelector(`.main-menu__toggle`);
const menuItems = menu.querySelector(`.main-menu__items`);
const menuHeight = menuItems.offsetHeight;

menuItems.style = `max-height: 0`;

menuToggle.addEventListener(`click`, () => {
  menu.classList.toggle(`main-menu--active`);
  if (menu.classList.contains(`main-menu--active`)) {
    menuItems.style = `max-height: ${menuHeight}px`;
  } else {
    menuItems.style = `max-height: 0`;
  }
});

}());

//# sourceMappingURL=main.js.map
