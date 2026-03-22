export function initReview() {
  const writeReviewBtn = document.querySelector(".feedback__button");
  const modal = document.getElementById("reviewModal");
  const closeBtn = document.querySelector(".modal-close");
  const submitBtn = document.getElementById("submitReview");
  let selectedRating = 0;

  const modalStars = document.querySelectorAll("#modalRating .star");

  if (modalStars.length) {
    modalStars.forEach((star, index) => {
      star.onclick = () => {
        selectedRating = index + 1;
        modalStars.forEach((s, i) => {
          s.classList.toggle("active", i <= index);
        });
      };
    });
  }

  if (writeReviewBtn) {
    writeReviewBtn.onclick = () => {
      modal.style.display = "block";
      document.getElementById("reviewName").value = "";
      document.getElementById("reviewTitle").value = "";
      document.getElementById("reviewText").value = "";
      selectedRating = 0;
      modalStars.forEach((star) => star.classList.remove("active"));
    };
  }

  if (closeBtn) {
    closeBtn.onclick = () => (modal.style.display = "none");
  }

  window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
  };

  if (submitBtn) {
    submitBtn.onclick = () => {
      const name = document.getElementById("reviewName").value.trim();
      const title = document.getElementById("reviewTitle").value.trim();
      const text = document.getElementById("reviewText").value.trim();

      if (!name || !title || !text) return alert("Заполните все поля");
      if (!selectedRating) return alert("Выберите оценку");

      const date = new Date().toLocaleDateString("ru-RU");

      let stars = "";
      for (let i = 1; i <= 5; i++) {
        stars += `<span class="star ${i <= selectedRating ? "active" : ""}">
          <svg width="25" height="24"><use href="./icons/feedback.svg#star"></use></svg>
        </span>`;
      }

      const newReview = `
        <li class="feedback-list__item">
          <div class="feedback__name">
            <div class="feedback__pag-name">${name}</div>
            <div class="feedback__rating rating">${stars}</div>
          </div>
          <div class="feedback-cont">
            <div class="feedback__content">
              <h3 class="feedback__content-title">${title}</h3>
              <p class="feedback__content-text">${text}</p>
            </div>
            <span class="feedback__data">${date}</span>
          </div>
        </li>
        <li class="list-line">
          <svg class="feedback__line" width="1361" height="1"><path opacity="0.5" d="M0.5 0.5H1360.5" stroke="#ABABAB"/></svg>
        </li>
      `;

      const targetLine = document.querySelector(
        ".feedback-list__itemm + .list-line",
      );
      targetLine.insertAdjacentHTML("afterend", newReview);

      modal.style.display = "none";
      alert("Отзыв добавлен!");
    };
  }
}

initReview();
