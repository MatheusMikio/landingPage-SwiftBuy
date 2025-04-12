window.addEventListener('scroll', () =>{
    const barraSuperior = document.getElementById('barraSuperior');
    if (window.scrollY > 100){
        barraSuperior.classList.add('fixed', 'top-0');
    }
    else{
        barraSuperior.classList.remove('fixed', 'top-0');
    }
});