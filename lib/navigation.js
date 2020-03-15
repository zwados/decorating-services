"use strict";

var navigation = document.querySelector('.navigation');
var lastScrollTop = 0;

var animateNav = function animateNav() {
  var currentPosition = window.pageYOffset;
  isBurgerActive = false;
  toggleNavList();

  if (currentPosition > lastScrollTop) {
    navigation.style.transform = "translateY(-".concat(navigation.clientHeight, "px)");
  } else {
    navigation.style.transform = 'translateY(0)';
  }

  lastScrollTop = currentPosition <= 0 ? 0 : currentPosition;
};

window.addEventListener('scroll', animateNav, false); //hamburger nav

var navigationList = document.querySelector('.navigation__list');
var navigationItems = document.querySelectorAll('.navigation__item');
var navigationBurger = document.querySelector('.navigation__burger');
var isBurgerActive = false;

var toggleNavList = function toggleNavList() {
  if (window.innerWidth <= 992) {
    isBurgerActive = !isBurgerActive;
    console.log(isBurgerActive);

    if (isBurgerActive) {
      navigationList.style.transform = "translateY(".concat(-1.2 * (navigationList.offsetHeight + navigation.offsetHeight), "px)");
      navigationItems.forEach(function (item) {
        item.style.opacity = 0;
      });
    } else {
      navigationList.style.transform = "translateY(0px)";
      navigationItems.forEach(function (item) {
        item.style.opacity = 1;
      });
    }
  }
};

toggleNavList();
navigationBurger.addEventListener('click', function () {
  toggleNavList();
});
window.addEventListener('resize', function () {
  if (window.innerWidth >= 992) {
    isBurgerActive = true;
    navigationList.style.transform = "translateY(0px)";
    navigationItems.forEach(function (item) {
      item.style.opacity = 1;
    });
  } else {
    isBurgerActive = true;
    navigation.style.overflow = 'visible';
    navigationList.style.transform = "translateY(".concat(-1.2 * (navigationList.offsetHeight + navigation.offsetHeight), "px)");
    navigationItems.forEach(function (item) {
      item.style.opacity = 0;
    });
  }
});