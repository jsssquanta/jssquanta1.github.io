const preLoader = () => {
  setTimeout(showContent, 3000);
};
const showContent = () => {
  document.getElementById("preloader").remove();
  document.getElementById("mainContent").style.transition = "all 0.9s ease";
  document.getElementById("mainContent").style.visibility = "visible";
  document.getElementById("mainContent").style.position = "relative";
  startTimer();
};

// Carousel Section

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  M.Carousel.init(elems, {
    onCycleTo: function (ele) {
      ele.childNodes[3].classList.remove("hide");
    },
  });
});

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

function startTimer() {
  var images = [],
    x = -1;
  images[0] = "./images/02.svg";
  images[1] = "./images/03.svg";
  images[2] = "./images/04.svg";
  images[3] = "./images/01.svg";
  setInterval(function () {
    x = x === images.length - 1 ? 0 : x + 1;
    document.getElementById("img").src = images[x];
  }, 3000);
}
