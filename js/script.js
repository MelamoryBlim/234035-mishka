//menu
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-nav__toggle--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.add('main-nav__toggle--closed');
    navToggle.classList.remove('main-nav__toggle--opened');
  }
});

//modal
var btn__order = document.querySelector(".btn__order");
var popup = document.querySelector(".modal__order");
var overlay = document.querySelector(".modal__overlay");

btn__order.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal__order--show");
  overlay.classList.add("modal__overlay--show");
});

overlay.addEventListener("click", function (event) {
  popup.classList.remove("modal__order--show");
  overlay.classList.remove("modal__overlay--show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal__order--show")) {
      popup.classList.remove("modal__order--show");
      overlay.classList.remove("modal__overlay--show");
    }
  }
});

//карта с меткой макета
ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
            center: [59.93863106, 30.32305450],
            zoom: 16
        }, {
            searchControlProvider: "yandex#search"
        }),
        myPlacemark = new ymaps.Placemark([59.93863106, 30.32305450], {
            hintContent: "Mishka",
            balloonContent: "Mishka Shop"
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icon-map-pin.svg',
            // Размеры метки.
            iconImageSize: [67, 100],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-40, -100]
        });
    myMap.geoObjects.add(myPlacemark);
});
