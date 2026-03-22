export function initNewsShowMore() {
  const bn = document.getElementById("showBtn");
  const lis = document.getElementById("newsList");

  if (bn && lis) {
    const initialCont = bn.innerHTML;

    bn.addEventListener("click", function () {
      lis.classList.toggle("is-open");

      if (lis.classList.contains("is-open")) {
        bn.textContent = "Скрыть";
      } else {
        bn.innerHTML = initialCont;
      }
    });
  }
}

initNewsShowMore();
