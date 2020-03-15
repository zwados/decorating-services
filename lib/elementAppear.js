"use strict";

//To make scrollAppear function work, add class 'appear' to a chosen element and @include hideElement in your relevant sass file.
var elements = document.querySelectorAll('.appear');
var screenPosition = window.innerHeight;

var scrollAppear = function scrollAppear(elements) {
  elements.forEach(function (element) {
    var elementPosition = element.getBoundingClientRect().top;

    if (elementPosition < screenPosition / 1.10) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', function () {
  return scrollAppear(elements);
});