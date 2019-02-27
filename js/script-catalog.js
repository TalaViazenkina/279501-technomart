var toBasket = document.querySelector(".modal-adding");
var toBasketOpen = document.querySelectorAll(".button-to-basket");
var toBasketClose = toBasket.querySelector(".modal-close");
var toBasketContinue = toBasket.querySelector(".button-continue");

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

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && toBasket.classList.contains("modal-show")) {
    evt.preventDefault();
    feedback.classList.remove("modal-error");
  }
});
