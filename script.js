// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') {
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add scroll animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Smooth navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add active class to navbar links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#6f1e51';
            link.style.borderBottom = '2px solid #d4a373';
        }
    });
});

// Animate skill bars on scroll
const skillObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const proficiencyBar = entry.target.querySelector('.proficiency');
            if (proficiencyBar) {
                proficiencyBar.style.transition = 'width 0.8s ease';
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.language-item').forEach(item => {
    skillObserver.observe(item);
});

// Typewriter effect for hero subtitle
function typeWriter() {
    const subtitle = document.querySelector('.hero-content .subtitle');
    const text = subtitle.textContent;
    subtitle.textContent = '';
    
    let index = 0;
    
    function type() {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }
    
    // Start after a short delay
    setTimeout(type, 500);
}

// Initialize typewriter on page load
window.addEventListener('load', typeWriter);

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
    });
});

// Mobile menu toggle (for future expansion)
function initMobileMenu() {
    // Add mobile menu functionality here if needed
}

document.addEventListener('DOMContentLoaded', initMobileMenu);

// Lazy load images (if added in future)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Copy to clipboard for contact info
document.querySelectorAll('.contact-item a').forEach(link => {
    if (link.href.startsWith('mailto:') || link.href.startsWith('tel:')) {
        link.addEventListener('click', function(e) {
            if (this.href.startsWith('mailto:')) {
                const email = this.href.replace('mailto:', '');
                navigator.clipboard.writeText(email).then(() => {
                    const originalText = this.textContent;
                    this.textContent = 'Copied!';
                    setTimeout(() => {
                        this.textContent = originalText;
                    }, 2000);
                });
            }
        });
    }
});
