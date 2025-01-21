const themeToggleButton = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleButton.textContent = '☀️ Modo Claro';
} else {
    themeToggleButton.textContent = '🌙 Modo Escuro';
}

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = '☀️ Modo Claro';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleButton.textContent = '🌙 Modo Escuro';
        localStorage.setItem('theme', 'light');
    }
});
