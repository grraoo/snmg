import smoothScrollTo from "../utils/smooth-scroll";

const SCROLL_TIME = 2000;

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

window.addEventListener(`scroll`, (e) => {
  setInterval(() => {
    let tempCurrentUnit = units.find((unit) => unit.top() <= document.documentElement.scrollTop + 50);

    if (currentUnit !== tempCurrentUnit) {
      currentUnit = tempCurrentUnit;
      const link = document.querySelector(`a[href="${currentUnit.id}"]`);
      if (link) {
        reActivateLink(link);
      }
    }
  }, 30);
});

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
    smoothScrollTo(document.documentElement, element.offsetTop, SCROLL_TIME).then(switchMenu).catch();
  }
};
export default () => {
  menuItems.style = `max-height: 0`;

  menu.addEventListener(`click`, runSmoothScroll);
  menuToggle.addEventListener(`click`, switchMenu);
  scrollBtn.addEventListener(`click`, runSmoothScroll);
};
