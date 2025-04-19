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
        // Check if botcheck is checked (indicates a bot)
        const botcheck = contactForm.querySelector('input[name="botcheck"]').checked;

        // Get form data including hidden fields
        // const accessKey = contactForm.querySelector('input[name="access_key"]').value;
        const page = contactForm.querySelector('input[name="page"]').value;
        const movingTo = document.getElementById('moving-to') ? document.getElementById('moving-to').value : '';
        const preferredCallbackTime = document.getElementById('preferred-callback-time') ?
          document.getElementById('preferred-callback-time').value : 'anytime';

        // Prepare data for submission
        const formData = {
          access_key: "0d86da93-9d03-48c0-a530-5992b2e26a1b",
          page: page,
          botcheck: botcheck,
          name: name,
          email: email,
          phone: phone,
          moving_from: movingFrom,
          moving_to: movingTo,
          preferred_callback_time: preferredCallbackTime
        };

        // Show loading state
        if (formMessage) {
          formMessage.textContent = 'Submitting your enquiry...';
          formMessage.classList.remove('text-red-600');
          formMessage.classList.remove('text-green-600');
        }

        // Submit form data to web3forms API
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData, null, 2)
        });

        const json = await response.json();

        if (json.success) {
          // Show success message
          if (formMessage) {
            formMessage.textContent = 'Thank you for your submission! We appreciate your interest. One of our team members will be in touch with you shortly to discuss your request.';
            formMessage.classList.add('text-green-600');
            formMessage.classList.remove('text-red-600');
          }

          // Reset form
          contactForm.reset();
        } else {
          throw new Error('Submission failed: ' + (json.message || 'Unknown error'));
        }

      } catch (error) {
        // Show error message
        if (formMessage) {
          formMessage.textContent = 'An error has occurred submitting the form. Please contact us directly by calling us or emailing us at info@derbyshireremovals.com';
          formMessage.classList.add('text-red-600');
          formMessage.classList.remove('text-green-600');
        }
        console.error('Form submission error:', error);
      }
    });
  }
});
