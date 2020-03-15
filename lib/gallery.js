"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//IMAGE GALLERY <3
var Gallery = function Gallery(galleryId) {
  var _this = this;

  _classCallCheck(this, Gallery);

  _defineProperty(this, "mouseDown", function (e) {
    _this.isDown = true;

    _this.slider.classList.add('active');

    _this.startX = e.pageX - _this.slider.offsetLeft;
    _this.scrollLeft = _this.slider.scrollLeft;
  });

  _defineProperty(this, "mouseLeave", function () {
    _this.isDown = false;

    _this.slider.classList.remove('active');
  });

  _defineProperty(this, "mouseUp", function () {
    _this.isDown = false;

    _this.slider.classList.remove('active');
  });

  _defineProperty(this, "mouseMove", function (e) {
    if (!_this.isDown) return;
    e.preventDefault();
    var x = e.pageX - _this.slider.offsetLeft;
    var walk = (x - _this.startX) * 0.75;
    _this.slider.scrollLeft = _this.scrollLeft - walk;
  });

  _defineProperty(this, "prevImg", function () {
    _this.slider.scrollLeft -= _this.miniaturesWidth;
  });

  _defineProperty(this, "nextImg", function () {
    _this.slider.scrollLeft += _this.miniaturesWidth;
  });

  //slider
  this.galleryTopic = galleryId;
  this.slider = document.querySelector("div".concat(galleryId, " .gallery__bottom-line .gallery__slider"));
  this.startX;
  this.scrollLeft;
  var isDown;
  this.slider.addEventListener('mousedown', function (e) {
    return _this.mouseDown(e);
  });
  this.slider.addEventListener('mouseleave', function () {
    return _this.mouseLeave();
  });
  this.slider.addEventListener('mouseup', function () {
    return _this.mouseUp();
  });
  this.slider.addEventListener('mousemove', function (e) {
    return _this.mouseMove(e);
  }); //image width

  this.miniatures = document.querySelectorAll("div".concat(galleryId, " .gallery__bottom-line .gallery__slider .gallery__miniature"));
  this.miniaturesWidth = this.miniatures[0].width; //arrows

  this.arrowLeft = document.querySelector("div".concat(galleryId, " .gallery__bottom-line .gallery__arrow--left"));
  this.arrowRight = document.querySelector("div".concat(galleryId, " .gallery__bottom-line .gallery__arrow--right"));
  this.arrowLeft.addEventListener('click', function () {
    return _this.prevImg();
  });
  this.arrowRight.addEventListener('click', function () {
    return _this.nextImg();
  }); //main image

  this.mainImage = document.querySelector("div".concat(galleryId, " .gallery__main-img")); //this.miniatures.forEach((miniature), (miniature) => changeMainImg(miniature))

  this.miniatures.forEach(function (miniature) {
    miniature.addEventListener('click', function (e) {
      _this.mainImage.src = e.target.src;
    });
  });
} //slider methods
; // Gallery constructor instances


var DecorationsGallery = new Gallery('#decorationsGallery');
var ConstructionsGallery = new Gallery('#constructionsGallery'); //const PaintingGallery = new Gallery('#paintingGallery');
//const RenovatingGallery = new Gallery('#renovatingGallery');
//const TilingGallery = new Gallery('#tilingGallery');

var CarpentryGallery = new Gallery('#carpentryGallery'); //Orientation icon

var rotateIcons = document.querySelectorAll('.rotate-icon__box');
window.addEventListener("orientationchange", function () {
  console.log("the orientation of the device is now " + screen.orientation.angle);

  if (this.screen.orientation.angle === 90) {
    rotateIcons.forEach(function (icon) {
      return icon.style.display = "none";
    });
  } else if (this.screen.orientation.angle === 0) {
    rotateIcons.forEach(function (icon) {
      return icon.style.display = "flex";
    });
  }
});