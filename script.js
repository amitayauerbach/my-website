function copyEmail(event) {
    event.preventDefault();
    const email = 'amitayab@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const popup = document.createElement('div');
      popup.className = 'email-popup';
      popup.textContent = 'Email copied to clipboard!';
      document.body.appendChild(popup);
  
      setTimeout(() => {
        popup.classList.add('show');
      }, 100);
  
      setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => {
          popup.remove();
        }, 300);
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy email:', err);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // Select all elements after the DOM is fully loaded
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
  
    // Update message count
    fetch('/api/stats')
      .then(response => response.json())
      .then(data => {
        document.getElementById('message-count').textContent = `Total messages sent: ${data.total_messages}`;
      })
      .catch(err => console.error('Failed to fetch stats:', err));
  
    // Menu toggle
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.icons-container')) {
        navMenu.classList.remove('active');
      }
    });
  
    // Theme toggle event listener
    themeToggle.addEventListener('click', function(event) {
      console.log("Theme toggle clicked!");
      console.log("Current mode:", body.classList.contains('light-mode') ? "Light" : "Dark");
  
      // Toggle the 'light-mode' class
      body.classList.toggle('light-mode');
  
      // Change the icon and log the mode
      if (body.classList.contains('light-mode')) {
        console.log("Switching to Light Mode...");
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        console.log("Switching to Dark Mode...");
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    });
  });
  