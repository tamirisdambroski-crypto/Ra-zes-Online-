// Ativação e controle do Menu Hamburguer (Mobile)
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Altera o ícone de 'barras' para um 'X' quando aberto
    const icon = mobileMenu.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
    } else {
        icon.className = 'fa-solid fa-bars';
    }
});

// Fecha o menu móvel automaticamente ao clicar em uma opção
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        document.getElementById('mobile-menu').querySelector('i').className = 'fa-solid fa-bars';
    });
});

// Identifica qual seção está na tela e atualiza o link ativo no menu superior
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollPosition >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
    
    // Efeito translúcido na barra de navegação superior ao rolar a página
    const navbar = document.querySelector('.navbar');
    if (scrollPosition > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});
