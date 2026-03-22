export function initAccordion() {
  const accordionLists = document.querySelectorAll(".accordion-list");

  accordionLists.forEach((el) => {
    el.addEventListener("click", (e) => {
      const accordionList = e.currentTarget;
      const accordionOpenedItem = accordionList.querySelector(
        ".accordion-list__item--opened",
      );
      const accordionOpenedContent = accordionList.querySelector(
        ".accordion-list__item--opened .accordion-list__content",
      );

      const accordionControl = e.target.closest(".accordion-list__link");
      if (!accordionControl) return;
      e.preventDefault();
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;
      const btnIcon = accordionItem.querySelector(".accordion-list__icon");

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove("accordion-list__item--opened");
        accordionOpenedContent.style.maxHeight = null;
      }
      accordionItem.classList.toggle("accordion-list__item--opened");

      if (accordionItem.classList.contains("accordion-list__item--opened")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = null;
      }

      if (btnIcon) {
        btnIcon.addEventListener("click", () => {
          btnIcon.classList.toggle("active");
        });
      }
    });
  });
}

initAccordion();
