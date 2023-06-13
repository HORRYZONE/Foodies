// Get all the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add click event listeners to each link
navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    // Remove the "active" class from all links
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });

    // Add the "active" class to the clicked link
    this.classList.add('active');
  });
});
