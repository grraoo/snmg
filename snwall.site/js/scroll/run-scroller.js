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

export default () => {
  window.addEventListener(`scroll`, runScrollers);
};
