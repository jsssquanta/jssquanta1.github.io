var images = [],
  x = -1;
images[0] = "./images/02.svg";
images[1] = "./images/03.svg";
images[2] = "./images/04.svg";
images[3] = "./images/01.svg";
function displayNextImage() {
  x = x === images.length - 1 ? 0 : x + 1;
  document.getElementById("img").src = images[x];
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
