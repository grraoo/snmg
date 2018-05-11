import Slider from "./slider/slider";
import initMenu from "./menu/menu";

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
