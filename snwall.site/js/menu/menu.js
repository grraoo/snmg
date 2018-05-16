import smoothScrollTo from "../utils/smooth-scroll";

const SCROLL_TIME = 2000;

const menu = document.querySelector(`.main-menu`);
const menuToggle = menu.querySelector(`.main-menu__toggle`);
const menuItems = menu.querySelector(`.main-menu__items`);
const menuHeight = menuItems.offsetHeight;

const switchMenu = () => {
  menu.classList.toggle(`main-menu--active`);
  if (menu.classList.contains(`main-menu--active`)) {
    menuItems.style = `max-height: ${menuHeight}px`;
  } else {
    menuItems.style = `max-height: 0`;
  }
};

const runSmoothScroll = (e) => {
  if (e.target.classList.contains(`main-menu__link`) && e.target.getAttribute(`href`).length > 1) {
    e.preventDefault();
    const element = document.querySelector(e.target.getAttribute(`href`));
    smoothScrollTo(document.documentElement, element.offsetTop, SCROLL_TIME).then(() => {
      const currentLInk = document.querySelector(`.main-menu__link--active`);
      if (currentLInk) {
        currentLInk.classList.remove(`main-menu__link--active`);
      }
      e.target.classList.add(`main-menu__link--active`);
    });
  }
};

export default () => {
  menuItems.style = `max-height: 0`;

  menu.addEventListener(`click`, runSmoothScroll);
  menuToggle.addEventListener(`click`, switchMenu);
};
