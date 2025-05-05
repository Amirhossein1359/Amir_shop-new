
let cart = [];

function addToCart(id, name, price) {
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
        cart[index].quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const table = document.getElementById("cart-table");
    table.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${item.name}</td><td>${item.quantity}</td><td>${item.price * item.quantity} تومان</td>`;
        table.appendChild(row);
        total += item.price * item.quantity;
    });
    document.getElementById("total-price").textContent = total;
    document.getElementById("cart-modal").style.display = "block";
}

function checkout() {
    alert("خرید با موفقیت انجام شد!");
    cart = [];
    updateCart();
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

document.getElementById("cart-button").addEventListener("click", () => {
    updateCart();
});
