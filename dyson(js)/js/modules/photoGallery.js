export function initPhotoGallery() {
  const viewAllBtn1 = document.getElementById("view-all");
  if (viewAllBtn1) {
    viewAllBtn1.addEventListener("click", function (e) {
      e.preventDefault();
      const gallery = document.getElementById("photo-gallery");
      if (!gallery) return;

      const extraPhotos = [
        "./images/feedback.png",
        "./images/feedback.png",
        "./images/feedback.png",
        "./images/feedback.png",
      ];

      const html = extraPhotos
        .map(
          (url) => `
            <a class="feedback__slide" href="${url}" data-fslightbox="gallery">
                <img src="${url}" alt="новое фото" loading="lazy">
            </a>
        `,
        )
        .join("");

      gallery.insertAdjacentHTML("beforeend", html);
      this.style.display = "none";
    });
  }

  const viewAllBtn2 = document.getElementById("vw-all");
  if (viewAllBtn2) {
    viewAllBtn2.addEventListener("click", function (e) {
      e.preventDefault();
      const gallery = document.getElementById("pht-gallery");
      if (!gallery) return;

      const extraPhotos = [
        "./images/feedback.png",
        "./images/feedback.png",
        "./images/feedback.png",
        "./images/feedback.png",
      ];

      const html = extraPhotos
        .map(
          (url) => `
            <a class="feedback__slide" href="${url}" data-fslightbox="gallery">
                <img src="${url}" alt="новое фото" loading="lazy">
            </a>
        `,
        )
        .join("");

      gallery.insertAdjacentHTML("beforeend", html);
      this.style.display = "none";
    });
  }
}

initPhotoGallery();
