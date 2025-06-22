/* Full script.js for E-Organic Website */

// Handle search form submission
const searchForm = document.querySelector('.search-form');

if (searchForm) {
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const query = this.querySelector('input').value.trim();
    if (query) {
      alert(`Searching for "${query}"...`);
    } else {
      alert("Please enter a product name to search.");
    }
  });
}

// Scroll to section functionality for navbar links
const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Product hover animation
const products = document.querySelectorAll('.product');
products.forEach(product => {
  product.addEventListener('mouseenter', () => {
    product.style.transform = 'scale(1.05)';
    product.style.transition = 'transform 0.3s ease';
  });
  product.addEventListener('mouseleave', () => {
    product.style.transform = 'scale(1)';
  });
});

// Cart icon and counter
let cartCount = 0;
const cartIcon = document.createElement('div');
cartIcon.className = 'cart-icon';
cartIcon.innerHTML = '🛒 <span class="cart-count">0</span>';
document.body.appendChild(cartIcon);

const productTitles = document.querySelectorAll('.product h3');
productTitles.forEach(title => {
  title.style.cursor = 'pointer';
  title.addEventListener('click', () => {
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
    alert(`${title.textContent} added to your cart!`);
  });
});

// Contact form validation
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = contactForm.querySelector('input[name="name"]').value.trim();
    const email = contactForm.querySelector('input[name="email"]').value.trim();
    const message = contactForm.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
    } else {
      alert("Thank you for your message! We'll get back to you soon.");
      contactForm.reset();
    }
  });
}

// Responsive navbar toggle
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar ul');
if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
  });
}

// SEO enhancement with JSON-LD
const structuredData = document.createElement('script');
structuredData.type = 'application/ld+json';
structuredData.textContent = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "E-Organic",
  "url": "https://e-organic.example.com",
  "logo": "https://e-organic.example.com/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-1234567890",
    "contactType": "Customer Support"
  }
});
document.head.appendChild(structuredData);

// Blog section reveal (for future extension)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.blog-post').forEach(post => {
  observer.observe(post);
});
