document.addEventListener('DOMContentLoaded', () => {
    
    // --- Theme Toggle Functionality ---
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check local storage for existing theme preference
    const savedTheme = localStorage.getItem('site-theme');
    
    // Apply saved theme on initial load
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    // Toggle event listener
    themeToggleBtn.addEventListener('click', () => {
        // Check current theme state
        const isDarkMode = document.body.getAttribute('data-theme') === 'dark';

        if (isDarkMode) {
            // Switch to Light Mode
            document.body.removeAttribute('data-theme');
            localStorage.setItem('site-theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            // Switch to Dark Mode
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('site-theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });

    // --- Optional: Add padding to body for sticky nav on scroll ---
    // If you want the glassmorphism header to dynamically shrink when scrolling
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.paddingTop = '10px';
            navbar.style.paddingBottom = '10px';
        } else {
            navbar.style.paddingTop = '1rem'; /* Bootstrap's py-3 equivalent */
            navbar.style.paddingBottom = '1rem';
        }
    });
});