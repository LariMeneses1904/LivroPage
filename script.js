
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const submenu = document.querySelector('.submenu');
    
    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        submenu.classList.toggle('show');
    });
    
    // Fechar o menu quando clicar fora
    document.addEventListener('click', function() {
        submenu.classList.remove('show');
    });
    
    // Impedir que o clique no menu feche o submenu
    submenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});


// Menu mobile (para telas pequenas)
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    menuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
    
    // Simular dados de livros (em uma aplicação real, isso viria de uma API)
    console.log('EntreLivros - Biblioteca Online carregada!');
    
    // Adicionar efeito de carregamento para imagens
    const lazyImages = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});



// Adicionar funcionalidade aos botões
document.addEventListener('DOMContentLoaded', function() {
    // Botão de visualizar livro
    const viewBtn = document.querySelector('.primary-btn');
    viewBtn.addEventListener('click', function() {
        alert('Redirecionando para a visualização do livro...');
        // Aqui você implementaria a lógica para visualizar o livro
    });
    
    // Botão de adicionar à estante
    const addBtn = document.querySelector('.secondary-btn');
    addBtn.addEventListener('click', function() {
        addBtn.innerHTML = '<i class="fas fa-check"></i> Adicionado à Estante';
        addBtn.style.backgroundColor = '#27ae60';
        setTimeout(() => {
            addBtn.innerHTML = '<i class="fas fa-plus"></i> Adicionar à Estante';
            addBtn.style.backgroundColor = '#2ecc71';
        }, 2000);
        // Aqui você implementaria a lógica para adicionar à estante
    });
    
    // Botões de adicionar nos livros recomendados
    const smallAddBtns = document.querySelectorAll('.small-btn');
    smallAddBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const bookTitle = this.parentElement.querySelector('h3').textContent;
            this.innerHTML = '<i class="fas fa-check"></i> Adicionado';
            this.style.backgroundColor = '#27ae60';
            setTimeout(() => {
                this.innerHTML = 'Adicionar';
                this.style.backgroundColor = '#ecf0f1';
                this.style.color = '#2c3e50';
            }, 2000);
            // Aqui você implementaria a lógica para adicionar o livro recomendado
        });
    });
});