(function () {
  const imgslider = [...document.querySelectorAll(".slider_picture")];
  const sliders = [...document.querySelectorAll(".slider_body")];
  const arrowSig = document.querySelector("#sig");
  const arrowPrev = document.querySelector("#antes");
  let value;

  arrowSig.addEventListener("click", () => changePosition(1));
  arrowPrev.addEventListener("click", () => changePosition(-1));

  function changePosition(change) {
    const currentElement = Number(
      document.querySelector(".slider_body--show").dataset.id
    );
    value = currentElement;
    value += change;

    if (value === 0 || value == sliders.length + 1) {
      value = value === 0 ? sliders.length : 1;
    }
    sliders[currentElement - 1].classList.toggle("slider_body--show");
    sliders[value - 1].classList.toggle("slider_body--show");
  }
})();
