export function initShowMore() {
  const button = document.getElementById("showMoreBtn");
  let createdSlides = [];
  let isVisible = false;

  if (button) {
    button.addEventListener("click", function () {
      if (!isVisible) {
        const newSlide1 = document.createElement("div");
        newSlide1.className = "offers__choice-slide";
        newSlide1.innerHTML =
          '<a class="offers__choice-link" href="#">dyson стайлер красный</a>';

        const newSlide2 = document.createElement("div");
        newSlide2.className = "offers__choice-slide";
        newSlide2.innerHTML =
          '<a class="offers__choice-link" href="#">dyson стайлер синий</a>';

        button.parentNode.insertBefore(newSlide1, button);
        button.parentNode.insertBefore(newSlide2, button);

        createdSlides.push(newSlide1, newSlide2);
        button.textContent = "Скрыть";
        isVisible = true;
      } else {
        createdSlides.forEach((slide) => slide.remove());
        createdSlides = [];
        button.textContent = "Показать еще";
        isVisible = false;
      }
    });
  }
}

initShowMore();
