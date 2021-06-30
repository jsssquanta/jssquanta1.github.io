const preLoader = () => {
  setTimeout(showContent, 3000);
};
const showContent = () => {
  // document.getElementById("preloader").style.visibility = "hidden";
  document.getElementById("preloader").remove();
  document.getElementById("mainContent").style.visibility = "visible";
  document.getElementById("mainContent").style.transition = "all 2.0s ease";
  startTimer();
};

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
