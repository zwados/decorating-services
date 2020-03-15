"use strict";

var menu = document.querySelectorAll('.menu');
var sections = document.querySelectorAll('.scrollTo');
menu.forEach(function (header, i) {
  menu[i].addEventListener('click', function () {
    sections[i].scrollIntoView({
      behavior: "smooth"
    });
  });
});