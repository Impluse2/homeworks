export function initSlider() {
  const prevBtn = document.querySelector(".mySwiper-prev");
  const nextBtn = document.querySelector(".mySwiper-next");
  const cards = document.querySelectorAll(".swiper-slide");
  const pageNumber = document.querySelector(
    ".mySwiper-pagination span:first-child",
  );
  const totalPages = document.querySelector(
    ".mySwiper-pagination span:last-child",
  );

  if (!prevBtn || !nextBtn || !cards.length || !pageNumber || !totalPages) {
    console.log("Не найдены элементы для пагинации");
    return;
  }

  let currentPage = 1;
  const totalPagesCount = Math.ceil(cards.length / 6);
  totalPages.textContent = totalPagesCount;

  function showCurrentPage() {
    cards.forEach((card) => {
      card.style.display = "none";
    });

    let start = (currentPage - 1) * 6;
    let end = start + 6;

    for (let i = start; i < end && i < cards.length; i++) {
      cards[i].style.display = "block";
    }

    pageNumber.textContent = currentPage;
  }

  nextBtn.addEventListener("click", function () {
    if (currentPage < totalPagesCount) {
      currentPage++;
      showCurrentPage();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      showCurrentPage();
    }
  });

  showCurrentPage();
}

initSlider();
