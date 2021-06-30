// document.addEventListener("DOMContentLoaded", function () {
var elems = document.querySelectorAll(".carousel");
M.Carousel.init(elems, {
  onCycleTo: function (ele) {
    ele.childNodes[3].classList.remove("hide");
  },
});
// });

function moveNextCarousel() {
  var elems = document.querySelector("#carousel-quanta");
  var moveRight = M.Carousel.getInstance(elems);
  moveRight.next(1);
}

function movePrevCarousel() {
  var elems = document.querySelector("#carousel-quanta");
  var moveLeft = M.Carousel.getInstance(elems);
  moveLeft.prev(1);
}
