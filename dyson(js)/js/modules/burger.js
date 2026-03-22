export function initBurger() {
  const burgerBtn = document.querySelector(".burger");
  const menu = document.querySelector(".header__menu");
  const body = document.body;
  const breakpoint = 1200;

  if (burgerBtn && menu) {
    function toggleMenu(e) {
      e.preventDefault();

      burgerBtn.classList.toggle("burger--open");
      menu.classList.toggle("header__menu--open");

      const isOpen = menu.classList.contains("header__menu--open");
      burgerBtn.ariaExpanded = isOpen;
      burgerBtn.ariaLabel = isOpen ? "Закрыть меню" : "Открыть меню";
      body.classList.toggle("page__body--no-scroll", isOpen);
    }

    function closeMenu() {
      if (window.innerWidth >= breakpoint) return;

      burgerBtn.classList.remove("burger--open");
      menu.classList.remove("header__menu--open");
      burgerBtn.ariaExpanded = false;
      burgerBtn.ariaLabel = "Открыть меню";
      body.classList.remove("page__body--no-scroll");
    }

    burgerBtn.addEventListener("click", toggleMenu);

    menu.querySelectorAll(".menu__link").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", function (e) {
      if (window.innerWidth >= breakpoint) return;

      if (
        !menu.contains(e.target) &&
        !burgerBtn.contains(e.target) &&
        menu.classList.contains("header__menu--open")
      ) {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= breakpoint) {
        burgerBtn.classList.remove("burger--open");
        menu.classList.remove("header__menu--open");
        body.classList.remove("page__body--no-scroll");
        burgerBtn.ariaExpanded = false;
        burgerBtn.ariaLabel = "Открыть меню";
      }
    });
  }
}

initBurger();
