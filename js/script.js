var modal = document.querySelectorAll(".modal");

var toBasket = document.querySelector(".modal-adding");
var toBasketOpen = document.querySelectorAll(".button-to-basket");
var toBasketClose = toBasket.querySelector(".modal-close");
var toBasketContinue = toBasket.querySelector(".button-continue");

var feedback = document.querySelector(".modal-feedback");
var feedbackOpen = document.querySelector(".contacts-feedback");
var feedbackClose = feedback.querySelector(".modal-close");
var form = feedback.querySelector("form");
var fieldEmail = form.querySelector("[name=email]");
var fieldMessage = form.querySelector("[name=message]");

var map = document.querySelector(".modal-map");
var mapOpen = document.querySelector(".contacts-map");
var mapClose = map.querySelector(".modal-close");

var promoSlider = document.querySelectorAll(".promo-slider-item");
var togglePrevious = document.querySelector(".arrow-previous");
var toggleNext = document.querySelector(".arrow-next");
var promoToggle = document.querySelectorAll(".slider-toggles-round button");

var serviceSlider = document.querySelectorAll(".service-slider-item");
var serviceToggle = document.querySelectorAll(".services-toggle");

//Форма обратной связи
feedbackOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("modal-show");
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("modal-show");
  feedback.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!fieldEmail.value || !fieldMessage.value) {
    evt.preventDefault();
    feedback.classList.remove("modal-error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("modal-error");
  }
});

//Карта
mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
});

//окно "Добавлено в корзину"
for (var i = 0; i < toBasketOpen.length; i++) {
  toBasketOpen[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    toBasket.classList.add("modal-show");
  });
}

toBasketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  toBasket.classList.remove("modal-show");
});

toBasketContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  toBasket.classList.remove("modal-show");
});

//Закрытие модальных окон по ESC
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    for (var i = 0; i < modal.length; i++) {
      if (modal[i].classList.contains("modal-show")) {
        modal[i].classList.remove("modal-show");
        feedback.classList.remove("modal-error");
      }
    }
  }
});

//Промо-слайдер
//Переключение слайдера стрелками вперед-назад
togglePrevious.addEventListener("click", function (evt) {
  evt.preventDefault();
  var item = 0
  for (var i = 0; i < promoSlider.length; i++) {
    if (promoSlider[i].classList.contains("slider-item-current")) {
      promoSlider[i].classList.remove("slider-item-current");
      promoToggle[i].classList.remove("toggle-active");
      item = i;
    }
  }
  if (item === 0) {
    promoSlider[promoSlider.length - 1].classList.add("slider-item-current");
    promoToggle[promoSlider.length - 1].classList.add("toggle-active");
  } else {
    promoSlider[item - 1].classList.add("slider-item-current");
    promoToggle[item - 1].classList.add("toggle-active");
  }
});

toggleNext.addEventListener("click", function (evt) {
  evt.preventDefault();
  var item = 0
  for (var i = 0; i < promoSlider.length; i++) {
    if (promoSlider[i].classList.contains("slider-item-current")) {
      promoSlider[i].classList.remove("slider-item-current");
      promoToggle[i].classList.remove("toggle-active");
      item = i;
    }
  }
  if (item === promoSlider.length - 1) {
    promoSlider[0].classList.add("slider-item-current");
    promoToggle[0].classList.add("toggle-active");
  } else {
    promoSlider[item + 1].classList.add("slider-item-current");
    promoToggle[item + 1].classList.add("toggle-active");
  }
});

//Переключение слайдера кнопками
var addToggleClickHandler = function(toggle, slider, toggleList, sliderList) {
  toggle.addEventListener("click", function (evt) {
    for (var j = 0; j < toggleList.length; j++) {
      toggleList[j].classList.remove("toggle-active");
      sliderList[j].classList.remove("slider-item-current");
    };
    toggle.classList.add("toggle-active");
    slider.classList.add("slider-item-current");
  });
};
for (var i = 0; i < promoToggle.length; i++) {
  addToggleClickHandler(promoToggle[i], promoSlider[i], promoToggle, promoSlider);
}

//Слайдер раздела Сервисы

for (var i = 0; i < serviceToggle.length; i++) {
  addToggleClickHandler(serviceToggle[i], serviceSlider[i], serviceToggle, serviceSlider);
}
