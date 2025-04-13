window.addEventListener('scroll', () => {
    const barraSuperior = document.getElementById('barraSuperior');
    if (window.scrollY > 30) {
        barraSuperior.classList.add('fixed', 'top-0');
    }
    else {
        barraSuperior.classList.remove('fixed', 'top-0');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const menuCelular = document.getElementById('menuCelular');
    if (menuBtn && menuCelular) {
        menuBtn.addEventListener('click', () => {
            menuCelular.classList.toggle('hidden');
        });

        const links = menuCelular.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuCelular.classList.add('hidden');
            });
        });
    }
});