// Hardcoded credentials (change to your desired values)
const CORRECT_USERNAME = "ultras";
const CORRECT_PASSWORD = "sfax123";

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
    // Login successful, redirect to index.html
    window.location.href = "index.html";
  } else {
    // Show error message
    document.getElementById('errorMsg').textContent = "Invalid username or password!";
  }
});