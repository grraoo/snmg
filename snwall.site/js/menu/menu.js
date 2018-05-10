export default (menu) => {
  const menuToggle = menu.querySelector(`.main-menu__toggle`);
  const menuItems = menu.querySelector(`.main-menu__items`);
  const menuHeight = menuItems.offsetHeight;

  menuItems.style = `max-height: 0`;

  const switchMenu = () => {
    menu.classList.toggle(`main-menu--active`);
    if (menu.classList.contains(`main-menu--active`)) {
      menuItems.style = `max-height: ${menuHeight}px`;
    } else {
      menuItems.style = `max-height: 0`;
    }
  };

  menuToggle.addEventListener(`click`, switchMenu);
};
