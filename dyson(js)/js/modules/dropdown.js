export function initDropdown() {
  const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  if (dropbtn && dropdownContent) {
    dropbtn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdownContent.classList.toggle("show");
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".dropdown")) {
        dropdownContent.classList.remove("show");
      }
    });

    dropdownContent.addEventListener("click", function (e) {
      e.stopPropagation();
      console.log("Выбрано:", e.target.textContent);
    });
  }
}

initDropdown();
