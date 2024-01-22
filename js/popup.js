//POPUP 1 - CONTENEDOR 3
document.querySelectorAll(".slider_picture img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
    document.querySelector(".popup-image img").title =
      image.getAttribute("title");
    document.querySelector("body").style.overflow = "hidden";
  };
});
document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
  document.querySelector("body").style.overflow = "auto";
};

//Cerrar popup con keycode
document.onkeydown = function (evt) {
  if (evt.keyCode == 27) {
    document.querySelector(".popup-image").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  }
};
