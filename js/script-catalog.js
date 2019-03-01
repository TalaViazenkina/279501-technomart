var toBasket = document.querySelector(".modal-adding");
var toBasketOpen = document.querySelectorAll(".button-to-basket");
var toBasketClose = toBasket.querySelector(".modal-close");
var toBasketContinue = toBasket.querySelector(".button-continue");
var basketInfo = document.querySelector(".header-basket");
var basketTotal = basketInfo.querySelector(".header-basket-quality");

var toBookmarkAdd = document.querySelectorAll(".button-to-bookmark");
var bookmarkInfo = document.querySelector(".header-bookmark");
var bookmarkTotal = document.querySelector(".header-bookmark-quality");

for (var i = 0; i < toBasketOpen.length; i++) {
  toBasketOpen[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    toBasket.classList.add("modal-show");
    if(basketInfo.classList.contains("header-basket-full")) {
      basketTotal.textContent++;
    } else {
      basketInfo.classList.add("header-basket-full");
      basketTotal.textContent++;
    }
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

//отображение добавления в закладки
for (var i = 0; i < toBookmarkAdd.length; i++) {
  toBookmarkAdd[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    if(bookmarkInfo.classList.contains("header-bookmark-full")) {
      bookmarkTotal.textContent++;
    } else {
      bookmarkInfo.classList.add("header-bookmark-full");
      bookmarkTotal.textContent++;
    }
  });
}
