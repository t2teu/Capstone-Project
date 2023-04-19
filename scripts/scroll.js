// Get the "Pssst! Scroll down!" message element
const message = document.getElementById('scroll-message');

// Calculate the fixed amount to scroll
const scrollAmount = 500;

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // Check if the user has scrolled past the fixed amount
  if (window.scrollY >= scrollAmount) {
    // Hide the message element
    message.style.display = 'none';
    // Remove the event listener to prevent further checks
    window.removeEventListener('scroll', arguments.callee);
  }
});