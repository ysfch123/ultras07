// Example shop.js for correct cart info

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartDisplay() {
  const cartList = document.getElementById('cartList');
  const cartTotal = document.getElementById('cartTotal');
  cartList.innerHTML = '';
  let total = 0;
  cart.forEach((item, idx) => {
    total += item.price * item.quantity;
    const li = document.createElement('li');
    li.innerHTML = `${item.name} x${item.quantity}${item.size ? " (Size: " + item.size + ")" : ""} <span style="cursor:pointer;color:#f66" onclick="removeCartItem(${idx})">&times;</span>`;
    cartList.appendChild(li);
  });
  cartTotal.textContent = total;
  localStorage.setItem('cart', JSON.stringify(cart));
}

window.removeCartItem = function(idx) {
  cart.splice(idx, 1);
  updateCartDisplay();
};

document.querySelectorAll('.add-cart-btn').forEach((btn) => {
  btn.addEventListener('click', function() {
    // Get the card for this button
    const card = btn.closest('.product-card');
    // Get name, price, size if exists
    const name = card.querySelector('.product-name').textContent.trim();
    const price = parseFloat(card.querySelector('.product-price').textContent); // assumes "80 TND"
    // If card has a size selector, get value
    let size = '';
    const sizeSelect = card.querySelector('.product-size');
    if (sizeSelect) size = sizeSelect.value;

    // Check if already in cart (same name+size)
    let found = cart.find(item => item.name === name && item.size === size);
    if (found) {
      found.quantity++;
    } else {
      cart.push({
        name,
        price,
        size,
        quantity: 1
      });
    }
    updateCartDisplay();
  });
});

document.getElementById('buyNow').onclick = function() {
  // Save cart to localStorage and go to checkout
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'checkout.html';
};

updateCartDisplay(); // Initial call to fill cart on page load