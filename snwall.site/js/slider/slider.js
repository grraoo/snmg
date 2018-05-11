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

export default Slider;
