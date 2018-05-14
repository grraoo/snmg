import scrollerPlugin from "./scroller.min.js";
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

/**
 * @param {Object} scroller Scroller object
 * @param {number} time period time
 * @param {string} from start position of scroller
 * @param {string} to finish position of scroller
 */
const runScrollCadence = (scroller, time, from, to) => {
  scroller.scrollTo(from);
  const timeOut = setTimeout(() => {
    scroller.scrollTo(to);
    clearTimeout(timeOut);
  }, time * 0.48);
};

/**
 * @param {Object} scroller Scroller object
 * @param {number} time period time
 * @param {string} from start position of scroller
 * @param {string} to finish position of scroller
 */
const runScrollLogos = (scroller, time, from, to) => {
  runScrollCadence(scroller, time, from, to);
  setInterval(() => {
    runScrollCadence(scroller, time, from, to);
  }, time);
};
export default () => {
  runScrollLogos(scroller1, 17000, `start`, `end`);
  runScrollLogos(scroller2, 17000, `end`, `start`);
  runScrollLogos(scroller3, 17000, `start`, `end`);
};
