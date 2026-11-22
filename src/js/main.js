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

// Capture traffic source and store in session
function captureTrafficSource() {
  // Only capture on first page load in session
  if (!sessionStorage.getItem('trafficSource')) {
    let source = 'Directly via website';
    const referrer = document.referrer;

    if (referrer) {
      const referrerDomain = new URL(referrer).hostname.toLowerCase();

      // Check for common sources
      if (referrerDomain.includes('facebook.com') || referrerDomain.includes('fb.com')) {
        source = 'Facebook';
      } else if (referrerDomain.includes('google.com') || referrerDomain.includes('google.co.uk')) {
        source = 'Google';
      } else if (referrerDomain.includes('bing.com')) {
        source = 'Bing';
      } else if (referrerDomain.includes('yahoo.com')) {
        source = 'Yahoo';
      } else if (referrerDomain.includes('twitter.com') || referrerDomain.includes('t.co')) {
        source = 'Twitter';
      } else if (referrerDomain.includes('instagram.com')) {
        source = 'Instagram';
      } else if (referrerDomain.includes('linkedin.com')) {
        source = 'LinkedIn';
      } else {
        source = 'referral: ' + referrerDomain;
      }
    }

    // Check for UTM parameters
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    if (utmSource) {
      source = utmSource;
      const utmMedium = urlParams.get('utm_medium');
      const utmCampaign = urlParams.get('utm_campaign');
      if (utmMedium) source += ' (' + utmMedium + ')';
      if (utmCampaign) source += ' - ' + utmCampaign;
    }

    sessionStorage.setItem('trafficSource', source);
  }
}

// Set up mobile menu and capture traffic source when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setupMobileMenu();
  captureTrafficSource();
});

// Populate traffic source in form
document.addEventListener('DOMContentLoaded', function() {
  const trafficSourceField = document.getElementById('traffic-source');
  if (trafficSourceField) {
    const trafficSource = sessionStorage.getItem('trafficSource') || 'Directly via website';
    trafficSourceField.value = trafficSource;
  }
});

// Mark valid native form submissions for thank-you-page conversion tracking.
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent.trim();

    form.addEventListener('submit', function() {
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
      sessionStorage.setItem('formSubmitted', 'true');
    });

    // Browsers may preserve button state when restoring a page from history.
    window.addEventListener('pageshow', function(event) {
      if (event.persisted) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    });
  }
});
