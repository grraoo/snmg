import Slider from "./slider/slider";
import initMenu from "./menu/menu";

const menu = document.querySelector(`.main-menu`);
initMenu(menu);

const initialSlides = [...document.querySelectorAll(`.slider__item`)];
const initialControls = document.querySelector(`#slider__controls-wrap`);
const advSlider = new Slider(initialSlides, initialControls, 5000);
advSlider.init();
