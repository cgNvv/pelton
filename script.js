// Modal Functions
function openModal() {
    const modal = document.getElementById('estimateModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('estimateModal');
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
    // Reset form
    document.getElementById('estimateForm').reset();
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('estimateModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Form Submission
document.getElementById('estimateForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Get form values
    const formData = {
        name: document.getElementById('name').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        email: document.getElementById('email').value.trim(),
        select: document.getElementById('select').value
    };

    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.select) {
        alert('Please fill in all fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-\(\)\+]+$/;
    if (!phoneRegex.test(formData.phone)) {
        alert('Please enter a valid phone number');
        return;
    }

    // Disable submit button to prevent double submission
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
        // Send data to webhook using FormData (better compatibility with Make)
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('select', formData.select);

        const response = await fetch('https://hook.us2.make.com/eyls3wu7e6pykw7le6fu65x49u6x4svd', {
            method: 'POST',
            body: formDataToSend
        });

        if (response.ok) {
            // Track conversion
            if (typeof gtag_report_conversion !== 'undefined') {
                gtag_report_conversion();
            }

            // Success message
            alert('Thank you! Your estimate request has been submitted successfully. We will contact you soon!');
            closeModal();
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting your request. Please try again or call us directly at (425) 529-4009.');
    } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
});

// Phone number formatting (optional enhancement)
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length >= 10) {
        value = value.substring(0, 10);
        const formatted = `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6, 10)}`;
        e.target.value = formatted;
    }
});

// Smooth scroll for anchor links (if any added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll (optional enhancement)
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

// Observe sections for fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.testimonials, .services, .about');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
