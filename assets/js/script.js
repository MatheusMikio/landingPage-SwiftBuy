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
    
    menuBtn.addEventListener('click', () => {
        menuCelular.classList.toggle('hidden');
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 955) {
            menuCelular.classList.add('hidden');
        }
    });
    if (menuBtn && menuCelular) {
        const links = menuCelular.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuCelular.classList.add('hidden');
            });
        });
    }
});