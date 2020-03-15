"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Popup = function Popup(popupElement, buttonElement) {
  var _this = this;

  _classCallCheck(this, Popup);

  _defineProperty(this, "displayModalBox", function () {
    if (_this.modalId.style.opacity == '0') {
      var popup = _this.popupElement;
      var modal = _this.modalId;
      _this.modalBox.style.display = 'block';
      setTimeout(function () {
        modal.style.opacity = '1';
      }, 200);
      setTimeout(function () {
        popup.style.opacity = '1';
      }, 500);
    } else {
      _this.hideModalBox();
    }
  });

  _defineProperty(this, "hideModalBox", function () {
    _this.modalId.style.opacity = '0';
    _this.popupElement.style.opacity = '0';
    var modalBox = _this.modalBox;
    setTimeout(function () {
      modalBox.style.display = 'none';
    }, 500);
  });

  this.popupElement = document.getElementById(popupElement);
  this.buttonElement = document.getElementById(buttonElement);
  this.modalId = this.popupElement.parentElement;
  this.modalBox = this.modalId.parentElement;
  this.hideModalBox();
  var buttons = document.querySelectorAll('.popup__button');
  var exitBtns = document.querySelectorAll('.popup__exit-icon');
  var popupButtons = document.querySelectorAll('.close-modal');
  popupButtons.forEach(function (popupButton) {
    popupButton.addEventListener('click', function () {
      return _this.hideModalBox();
    });
  });
  buttons.forEach(function (button) {
    if (buttonElement == button.id) {
      var targetBtn = document.getElementById(buttonElement);
      targetBtn.addEventListener('click', function () {
        return _this.displayModalBox();
      });
    }
  });
  exitBtns.forEach(function (exitBtn) {
    exitBtn.addEventListener('click', function () {
      return _this.hideModalBox();
    });
  });
}; // About Section Object Instances


var Experience = new Popup('popupExperience', 'experience');
var Offer = new Popup('popupOffer', 'offer');
var History = new Popup('popupHistory', 'history'); // Projects Section Object Instances

var Decorations = new Popup('popupDecorations', 'decorations');
var Bricks = new Popup('popupConstructions', 'constructions'); //const Painting = new Popup('popupPainting', 'painting');
//const Renovating = new Popup('popupRenovating', 'renovating');
//const Tiling = new Popup('popupTiling', 'tiling');

var Carpentry = new Popup('popupCarpentry', 'carpentry'); // Offer Section Object Instances

var SectionOffer = new Popup('popupSectionOffer', 'myOffer');