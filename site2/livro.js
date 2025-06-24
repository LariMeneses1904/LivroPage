document.addEventListener('DOMContentLoaded', function() {
    // Galeria de imagens do livro
    const galeriaSlide = document.querySelector('.galeria-slide');
    const images = galeriaSlide.querySelectorAll('img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicadores = document.querySelectorAll('.galeria-indicadores span');
    let currentIndex = 0;

    function updateGallery() {
        images.forEach((img, index) => {
            img.classList.remove('active');
            if (index === currentIndex) {
                img.classList.add('active');
            }
        });
        
        indicadores.forEach((ind, index) => {
            ind.classList.remove('ativo');
            if (index === currentIndex) {
                ind.classList.add('ativo');
            }
        });
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateGallery();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateGallery();
    });

    indicadores.forEach((ind, index) => {
        ind.addEventListener('click', function() {
            currentIndex = index;
            updateGallery();
        });
    });

    // Scroll horizontal das frases destaque
    const destaqueContainer = document.querySelector('.destaques-container');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');

    leftBtn.addEventListener('click', function() {
        destaqueContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', function() {
        destaqueContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Botão de adicionar à estante
    const estanteBtn = document.querySelector('.estante-btn');
    estanteBtn.addEventListener('click', function() {
        const icon = estanteBtn.querySelector('i');
        if (icon.classList.contains('fa-plus')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-check');
            estanteBtn.innerHTML = '<i class="fas fa-check"></i> Adicionado à Estante';
            estanteBtn.style.backgroundColor = '#27ae60';
        } else {
            icon.classList.remove('fa-check');
            icon.classList.add('fa-plus');
            estanteBtn.innerHTML = '<i class="fas fa-plus"></i> Adicionar à Minha Estante';
            estanteBtn.style.backgroundColor = '#2ecc71';
        }
    });

    // Inicialização
    updateGallery();
});