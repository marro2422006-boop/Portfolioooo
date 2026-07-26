// Select the theme toggle button
const themeToggleBtn = document.getElementById('theme-toggle');

// Check for saved user preference in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️ Light Mode';
}

// Add click event listener to toggle themes
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Update button text and save preference
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});