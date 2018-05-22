import smoothScrollTo from "../utils/smooth-scroll";
let isScrolling = false;
const SCROLL_TIME = 2000;
let lastScrollTop = document.documentElement.scrollTop;

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
  // setInterval(() => {
  let tempCurrentUnit = units.find((unit) => unit.top() <= document.documentElement.scrollTop + 50);

  if (currentUnit !== tempCurrentUnit) {
    currentUnit = tempCurrentUnit;
    const link = document.querySelector(`a[href="${currentUnit.id}"]`);
    if (link) {
      reActivateLink(link);
    }
  }
  // if (lastScrollTop < document.documentElement.scrollTop && !isScrolling) {
  //   const unitScrollTo = units.find((unit) => (unit.top() <= document.documentElement.scrollTop + (window.innerHeight / 2)) && unit.top() > document.documentElement.scrollTop + 50);
  //   if (unitScrollTo) {
  //     e.preventDefault();
  //     isScrolling = true;
  //     smoothScrollTo(document.documentElement, unitScrollTo.top(), 350).then(() => {
  //       isScrolling = false;
  //     }).catch((error) => {
  //       isScrolling = false;
  //       console.log(error);
  //     });
  //   }
  // }
  lastScrollTop = document.documentElement.scrollTop;
  // }, 30);
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
    const element = document.querySelector(e.target.getAttribute(`href`));
    console.log(scrollBtn, element);
    isScrolling = true;
    smoothScrollTo(document.documentElement, element.offsetTop, SCROLL_TIME).then(() => {
      isScrolling = false;
    }).then(switchMenu).catch((error) => {
      isScrolling = false;
      console.log(error);
    });
  }
};
export default () => {
  menuItems.style = `max-height: 0`;

  menu.addEventListener(`click`, runSmoothScroll);
  menuToggle.addEventListener(`click`, switchMenu);
  scrollBtn.addEventListener(`click`, runSmoothScroll);
};
