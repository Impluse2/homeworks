let cart = [];

function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}
export function getCart() {
  return [...cart];
}

export function clearCart() {
  cart = [];
  saveCartToLocalStorage();
  alert("Корзина очищена!");
}

export function addToCart(productCard) {
  const title = productCard.querySelector(".product-text").innerText;
  let priceText = productCard.querySelector(".text-3").innerText;
  let price = parseInt(priceText.replace(" ", "").replace("Р", ""));
  const quantity = parseInt(
    productCard.querySelector(".counter__inp input").value,
  );
  const imgSrc = productCard.querySelector("img").src;

  const existingItem = cart.find((item) => item.title === title);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id: Date.now(), title, price, quantity, img: imgSrc });
  }

  saveCartToLocalStorage();
  alert("Товар добавлен в корзину!");
}

export function showCart() {
  const cartModal = document.getElementById("cartModal");
  const cartBody = document.getElementById("cartItems");
  const cartTotal = document.querySelector(".cart-total__price");

  if (!cartModal) return;

  if (cart.length === 0) {
    cartBody.innerHTML = '<div class="cart-empty">Ваша корзина пуста</div>';
    cartTotal.innerText = "0 ₽";
    cartModal.style.display = "block";
    return;
  }

  let total = 0;
  let itemsHtml = "";

  cart.forEach((item) => {
    total += item.price * item.quantity;
    itemsHtml += `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.img}" class="cart-item__img" alt="${item.title}">
        <div class="cart-item__info">
          <h3 class="cart-item__title">${item.title.substring(0, 40)}${item.title.length > 40 ? "..." : ""}</h3>
          <div class="cart-item__price">${item.price.toLocaleString()} ₽</div>
        </div>
        <div class="cart-item__controls">
          <button class="cart-item__minus" data-id="${item.id}">-</button>
          <span class="cart-item__count">${item.quantity}</span>
          <button class="cart-item__plus" data-id="${item.id}">+</button>
        </div>
        <button class="cart-item__remove" data-id="${item.id}">Удалить</button>
      </div>
    `;
  });

  cartBody.innerHTML = itemsHtml;
  cartTotal.innerText = total.toLocaleString() + " ₽";
  cartModal.style.display = "block";

  document.querySelectorAll(".cart-item__minus").forEach((btn) => {
    btn.onclick = () => updateQuantity(parseInt(btn.dataset.id), -1);
  });
  document.querySelectorAll(".cart-item__plus").forEach((btn) => {
    btn.onclick = () => updateQuantity(parseInt(btn.dataset.id), 1);
  });
  document.querySelectorAll(".cart-item__remove").forEach((btn) => {
    btn.onclick = () => removeFromCart(parseInt(btn.dataset.id));
  });
}

export function updateQuantity(id, change) {
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.id !== id);
    }
    saveCartToLocalStorage();
    showCart();
  }
}

export function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCartToLocalStorage();
  showCart();
}

export function initCart() {
  loadCartFromLocalStorage();

  document.querySelectorAll(".basket-button").forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      addToCart(btn.closest(".product-card"));
    };
  });

  document.querySelectorAll(".counter").forEach((counter) => {
    const minus = counter.querySelector(".counter__button-minus");
    const plus = counter.querySelector(".counter__button-plus");
    const input = counter.querySelector(".counter__inp input");

    if (minus) {
      minus.onclick = (e) => {
        e.preventDefault();
        let val = parseInt(input.value);
        if (val > 1) input.value = val - 1;
      };
    }

    if (plus) {
      plus.onclick = (e) => {
        e.preventDefault();
        input.value = parseInt(input.value) + 1;
      };
    }
  });

  const cartBtn = document.querySelector(".header__cart");
  const cartModal = document.getElementById("cartModal");
  const cartClose = document.querySelector(".cart-modal__close");

  if (cartBtn) {
    cartBtn.onclick = () => showCart();
  }

  if (cartClose) {
    cartClose.onclick = () => (cartModal.style.display = "none");
  }

  window.onclick = (e) => {
    if (e.target === cartModal) cartModal.style.display = "none";
  };
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    initCart();
  });
}
