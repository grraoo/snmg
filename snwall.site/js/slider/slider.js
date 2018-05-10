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

export default Slider;
