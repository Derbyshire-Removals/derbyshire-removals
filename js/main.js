// Mobile menu toggle
function setupMobileMenu() {
  console.log('Setting up mobile menu');

  // Simple mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    console.log('Mobile menu elements found');

    // Add click event listener
    mobileMenuButton.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Mobile menu button clicked');

      // Toggle mobile menu visibility
      mobileMenu.classList.toggle('hidden');

      // Toggle menu/close icons
      const menuIcon = mobileMenuButton.querySelector('.menu-icon');
      const closeIcon = mobileMenuButton.querySelector('.close-icon');

      if (menuIcon && closeIcon) {
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileMenu.classList.contains('hidden') &&
          !mobileMenuButton.contains(e.target) &&
          !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');

        const menuIcon = mobileMenuButton.querySelector('.menu-icon');
        const closeIcon = mobileMenuButton.querySelector('.close-icon');

        if (menuIcon && closeIcon) {
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
      }
    });
  } else {
    console.warn('Mobile menu elements not found');
  }
}

// Set up mobile menu when DOM is loaded
document.addEventListener('DOMContentLoaded', setupMobileMenu);

// Also try setting up after a short delay (as a fallback)
setTimeout(setupMobileMenu, 500);

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', async function(event) {
      event.preventDefault();

      // Basic form validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const movingFrom = document.getElementById('moving-from').value;

      // Validation checks
      let isValid = true;
      let errorMessage = '';

      if (!name || name.length < 2) {
        isValid = false;
        errorMessage += 'Name must be at least 2 characters.\n';
      }

      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.\n';
      }

      if (!phone || phone.length < 10) {
        isValid = false;
        errorMessage += 'Phone number must be at least 10 digits.\n';
      }

      if (!movingFrom) {
        isValid = false;
        errorMessage += 'Please enter your current address.\n';
      }

      // Display validation errors or submit form
      const formMessage = document.getElementById('form-message');

      if (!isValid) {
        if (formMessage) {
          formMessage.textContent = errorMessage;
          formMessage.classList.add('text-red-600');
          formMessage.classList.remove('text-green-600');
        }
        return;
      }

      // Form submission logic
      try {
        // For now, we'll just simulate a successful submission
        // In production, you would replace this with actual form submission code

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Show success message
        if (formMessage) {
          formMessage.textContent = 'Thank you for your enquiry. We will contact you shortly.';
          formMessage.classList.add('text-green-600');
          formMessage.classList.remove('text-red-600');
        }

        // Reset form
        contactForm.reset();

      } catch (error) {
        // Show error message
        if (formMessage) {
          formMessage.textContent = 'An error occurred. Please try again or contact us directly.';
          formMessage.classList.add('text-red-600');
          formMessage.classList.remove('text-green-600');
        }
        console.error('Form submission error:', error);
      }
    });
  }
});
