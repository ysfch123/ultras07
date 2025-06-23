// checkout.js

// --- CART SUMMARY LOGIC ---
const summaryDiv = document.getElementById('checkoutSummary');
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let subtotal = 0;
const shippingFee = 7.00;

// Render the order summary
function renderOrderSummary() {
  subtotal = 0;
  if (!cart.length) {
    summaryDiv.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById('checkoutForm').style.display = "none";
    return;
  }

  summaryDiv.innerHTML = '<strong>Order Summary:</strong><ul>' +
    cart.map(item => {
      subtotal += item.price * item.quantity;
      return `<li>${item.name} x${item.quantity} ${item.size ? '(Size: ' + item.size + ')' : ''} <span style="float:right">${(item.price * item.quantity).toFixed(2)} TND</span></li>`;
    }).join('') +
    '</ul>' +
    `<div class="shipping">Shipping: <span style="float:right">${shippingFee.toFixed(2)} TND</span></div>` +
    `<div class="total">Total: <span>${(subtotal + shippingFee).toFixed(2)} TND</span></div>`;
}

renderOrderSummary();

// --- FORM HANDLING ---
document.getElementById('checkoutForm').onsubmit = function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this).entries());
  const confirmation = document.getElementById('confirmationMessage');
  confirmation.innerHTML =
    `<h3>Thank you for your order!</h3>
    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}<br>
    <strong>Address:</strong> ${data.address}, ${data.city}, ${data.country}<br>
    <strong>Phone:</strong> ${data.phone}</p>
    <p>Your order:</p>
    <ul>` +
    cart.map(item => `<li>${item.name} x${item.quantity} ${item.size ? '(Size: ' + item.size + ')' : ''}</li>`).join('') +
    `</ul>
    <p><strong>Shipping:</strong> ${shippingFee.toFixed(2)} TND<br>
    <strong>Total:</strong> ${(subtotal + shippingFee).toFixed(2)} TND</p>
    <p>We’ll contact you soon to confirm your order.</p>`;
  confirmation.style.display = 'block';
  this.style.display = 'none';
  localStorage.removeItem('cart');
};