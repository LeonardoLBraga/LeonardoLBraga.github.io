//Função para carregar os conteúdos da section
document.addEventListener("DOMContentLoaded", async () => {
    const loadSection = async (url, elementId) => {
        const response = await fetch(url);
        const data = await response.text();
        document.getElementById(elementId).innerHTML += data;
    };

    await fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    await loadSection('sections/sobre.html', 'main-content');
    await loadSection('sections/projetos.html', 'main-content');
    await loadSection('sections/habilidades.html', 'main-content');
    await loadSection('sections/experiencia.html', 'main-content');
    await loadSection('sections/educacao.html', 'main-content');
    
    await fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});

// Função do butão do modo claro/escuro
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

// Função do botão de detalhes
function toggleDetails(button) {
    const details = button.parentElement.nextElementSibling;
    const isVisible = details.style.display === "block";

    if (isVisible) {
        details.style.display = "none";
        button.textContent = "Ver atividades";
    } else {
        details.style.display = "block";
        button.textContent = "Ocultar atividades";
    }
}
