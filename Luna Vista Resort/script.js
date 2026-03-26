/ Get elements
const reservationForm = document.getElementById('reservation-form');
const navLinks = document.querySelectorAll('.resort-nav a');

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Reservation form submission handler
reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    // Validate dates
    if (new Date(checkin) >= new Date(checkout)) {
        alert('Error: Check-out date must be after check-in date!');
        return;
    }

    // Success message
    alert(Thank you, ${name}! Your reservation from ${checkin} to ${checkout} has been submitted successfully. We will contact you shortly.);
    reservationForm.reset();
});