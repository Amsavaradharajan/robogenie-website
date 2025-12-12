// RoboGenie Website JavaScript
// Lightweight interactivity for lightbox gallery and hero rotation

(function() {
    'use strict';

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Open lightbox when gallery item is clicked
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const caption = this.querySelector('.gallery-caption');
            
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            
            if (caption) {
                lightboxCaption.textContent = caption.textContent;
            } else {
                lightboxCaption.textContent = '';
            }
            
            // Prevent body scroll when lightbox is open
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox when close button is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    // Close lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox || e.target === closeBtn) {
                closeLightbox();
            }
        });
    }

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Smooth scroll for CTA button (already handled by CSS scroll-behavior, but adding fallback)
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }
})();
