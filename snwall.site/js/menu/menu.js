import smoothScrollTo from "../utils/smooth-scroll";
const SCROLL_TIME = 2000;
// let lastScrollTop = document.documentElement.scrollTop;

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
  let tempCurrentUnit = units.find((unit) => unit.top() <= document.documentElement.scrollTop + 50);

  if (currentUnit !== tempCurrentUnit) {
    currentUnit = tempCurrentUnit;
    const link = document.querySelector(`a[href="${currentUnit.id}"]`);
    if (link) {
      reActivateLink(link);
    }
  }
};

// const autoScroll = (e) => {
//   if (lastScrollTop < document.documentElement.scrollTop) {
//     const unitScrollTo = units.find((unit) => (unit.top() <= document.documentElement.scrollTop + (window.innerHeight / 2)) && unit.top() > document.documentElement.scrollTop + 50);
//     if (unitScrollTo) {
//       smoothScrollTo(document.documentElement, unitScrollTo.top(), 250).then(() => {}).catch((error) => {
//         console.log(error);
//       });
//     }
//   }
//   lastScrollTop = document.documentElement.scrollTop;
// };

// window.addEventListener(`scroll`, autoScroll);
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
    // window.removeEventListener(`scroll`, autoScroll);
    const element = document.querySelector(e.target.getAttribute(`href`));
    smoothScrollTo(document.documentElement, element.offsetTop, SCROLL_TIME).then(switchMenu).catch((error) => {
      console.log(error);
    }).then(() => {
      // window.addEventListener(`scroll`, autoScroll);
    });
  }
};
export default () => {
  menuItems.style = `max-height: 0`;

  menu.addEventListener(`click`, runSmoothScroll);
  menuToggle.addEventListener(`click`, switchMenu);
  scrollBtn.addEventListener(`click`, runSmoothScroll);
};
