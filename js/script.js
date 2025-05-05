let cart = [];

function addToCart(productId, name, price) {
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, name, price, quantity: 1 });
  }
  updateCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

function updateCart() {
  const cartTable = document.getElementById("cart-table");
  const cartTotal = document.getElementById("cart-total");
  cartTable.innerHTML = `
    <tr>
      <th>نام کالا</th>
      <th>تعداد</th>
      <th>قیمت</th>
      <th>حذف</th>
    </tr>
  `;
  let total = 0;

  cart.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${item.price * item.quantity} تومان</td>
      <td><button onclick="removeFromCart(${item.id})">حذف</button></td>
    `;
    cartTable.appendChild(row);
    total += item.price * item.quantity;
  });

  cartTotal.innerText = `مبلغ کل: ${total} تومان`;
}

function openCartModal() {
  document.getElementById("cart-modal").style.display = "flex";
}

function closeCartModal() {
  document.getElementById("cart-modal").style.display = "none";
}

window.addEventListener("click", function (event) {
  const modal = document.getElementById("cart-modal");
  if (event.target === modal) {
    closeCartModal();
  }
});
