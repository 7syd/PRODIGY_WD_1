document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
  
    // Change navbar background color when scrolling
    window.addEventListener("scroll", function() {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#555";
      } else {
        navbar.style.backgroundColor = "#333";
      }
    });
  });

  