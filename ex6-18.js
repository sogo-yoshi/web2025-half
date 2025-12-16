function changeImg() {

  document.photo.src = "image/banana_peel.png";

  setTimeout(function () {
    document.photo.src = "image/banana.png";
  }, 3000);
}
