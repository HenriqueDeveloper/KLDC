document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = [
        {
            id: 1,
            image: 'img/obras/img17.jpg',
            title: 'Manutenção Corretiva',
            description: 'Manutenção corretiva rede de Sprinklers (Galpão Amazon).'
        },
        {
            id: 2,
            image: 'img/obras/img13.jpg',
            title: 'Montagem de Infraestrutura',
            description: 'Montagem de infraestrutura de Splinklers (Tenda Distribuidora de Medicamentos Panfarma, 📍Jundiaí).'
        },
        {
            id: 3,
            image: 'img/obras/img18.jpg',
            title: 'Montagem de Infraestrutura',
            description: 'Montagem de infraestrutura de Splinklers (Galpão Léo Madeiras, 📍Barueri).'
        },
        {
            id: 4,
            image: 'img/obras/img14.jpg',
            title: 'Montagem de Infraestrutura',
            description: 'Montagem de infraestrutura de Splinklers (Galpão Léo Madeiras, 📍Barueri).'
        },
        {
            id: 5,
            image: 'img/obras/img27.jpg',
            title: 'Montagem de Infraestrutura',
            description: 'Montagem de Infraestrutura de Rede de Hidrantes (Linha Amarela, 📍Metrô Acciona).'
        },
        {
            id: 6,
            image: 'img/obras/img12.jpg',
            title: 'Instalação de Rede de Hidrantes',
            description: 'Retrofit de Rede de Hidrantes (Terminal Rodoviário, 📍Campinas).'
        },
        {
            id: 7,
            image: 'img/obras/img24.jpg',
            title: 'Instalação de Rede de Hidrantes (Parte 2)',
            description: 'Retrofit de Rede de Hidrantes (Terminal Rodoviário, 📍Campinas).'
        },
        {
            id: 8,
            image: 'img/obras/img5.jpg',
            title: 'Inspeção de Equipamentos',
            description: 'Verificação minuciosa dos sistemas de segurança e prevenção.'
        },
        {
            id: 9,
            image: 'img/obras/img6.jpg',
            title: 'Inspeção de Equipamentos (Parte 2)',
            description: 'Verificação minuciosa dos sistemas de segurança e prevenção.'
        },
        {
            id: 10,
            image: 'img/obras/img7.jpg',
            title: 'Instalção de Sistema Conta Incêndio.',
            description: 'Instalção de Sistema Conta Incêndio Avaliado Por Nossos Especialistas.'
        },
        {
            id: 11,
            image: 'img/obras/img9.jpg',
            title: 'Manutenção Preventiva',
            description: 'Manutenção Regular Para Máxima Segurança.'
        },
        {
            id: 12,
            image: 'img/obras/img11.jpg',
            title: 'Manutenção Preventiva (Parte 2)',
            description: 'Manutenção Regular Para Máxima Segurança.'
        },
        {
            id: 13,
            image: 'img/obras/img2.jpg',
            title: 'Avaliação de Funcionamento',
            description: 'Inspeção de Segurança em Mecâncismos Contra Incêndio.'
        },
        {
            id: 14,
            image: 'img/obras/img10.jpg',
            title: 'Equipe em Ação',
            description: 'Manutenção de Funcionamento.'
        },
        {
            id: 15,
            image: 'img/obras/img22.jpg',
            title: 'Equipe em Ação (Parte 2)',
            description: 'Trabalhando em Aumentar a Segurança Contra Incêndio (Terminal Rodoviário, 📍Campinas).'
        }
    ];

    function initializeGallery() {
        const galleryContainer = document.getElementById('professional-gallery');
        
        if (!galleryContainer) {
            console.error('Gallery container not found');
            return;
        }

        galleryContainer.innerHTML = '';

        galleryItems.forEach(item => {
            const galleryItemElement = createGalleryItem(item);
            galleryContainer.appendChild(galleryItemElement);
        });
    }

    function createGalleryItem(item) {
        const galleryItemElement = document.createElement('div');
        galleryItemElement.classList.add('gallery-item');
        galleryItemElement.innerHTML = `
            <div class="gallery-item-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>
            <div class="gallery-item-details">
                <div>
                    <h3 class="gallery-item-title">${item.title}</h3>
                    <p class="gallery-item-description">${item.description}</p>
                </div>
            </div>
        `;

        return galleryItemElement;
    }

    
    initializeGallery();
});