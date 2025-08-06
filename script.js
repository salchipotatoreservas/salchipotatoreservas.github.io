document.addEventListener('DOMContentLoaded', () => {
    // Fireworks.js
    const container = document.getElementById('fireworks-canvas');
    const fireworks = new Fireworks.default(container, {
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        trace: 3,
        traceSpeed: 10,
        explosion: 5,
        flickering: 50,
        lineStyle: 'round',
        lineWidth: {
            explosion: {
                min: 1,
                max: 3
            },
            trace: {
                min: 1,
                max: 2
            }
        },
        brightness: {
            min: 50,
            max: 80
        },
        decay: {
            min: 0.015,
            max: 0.03
        },
        mouse: {
            click: false,
            move: false,
            max: 1
        },
        sound: {
            enable: false,
            files: [
                './sounds/explosion0.mp3',
                './sounds/explosion1.mp3',
                './sounds/explosion2.mp3'
            ],
            volume: {
                min: 4,
                max: 8
            }
        }
    });

    fireworks.start();

    // Slider de Eventos
    const slider = document.querySelector('.event-slider');
    const slides = document.querySelectorAll('.event-slide');
    const prevButton = document.querySelector('.slider-nav-button.prev');
    const nextButton = document.querySelector('.slider-nav-button.next');

    let currentIndex = 0;
    let slideInterval;

    function updateSlider() {
        // Calcula el ancho de un slide, incluyendo el gap de 20px
        const slideWidth = slides[0].getBoundingClientRect().width + 20; 
        slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

        // Mejorar el efecto de transición (opcional, se puede complementar con CSS)
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    prevButton.addEventListener('click', () => {
        stopSlideShow();
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlider();
        startSlideShow();
    });

    nextButton.addEventListener('click', () => {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    // Pausar el slideshow al pasar el mouse por encima del slider
    slider.addEventListener('mouseenter', stopSlideShow);
    slider.addEventListener('mouseleave', startSlideShow);

    // Actualizar el slider cuando la ventana cambia de tamaño
    window.addEventListener('resize', () => {
        stopSlideShow();
        updateSlider();
        startSlideShow();
    });

    // Inicializar el slider y el slideshow
    updateSlider();
    startSlideShow();

    // Texto Dinámico
    const dynamicTextElement = document.querySelector('.dynamic-text');
    const texts = ["Cumpleaños", "Eventos Corporativos", "Reuniones Familiares", "Fechas Especiales"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            dynamicTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            dynamicTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        const typingSpeed = isDeleting ? 50 : 150;
        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();

    // Botón Flotante de Redes Sociales
    const floatingButton = document.querySelector('.floating-social-button');
    const socialMenu = document.querySelector('.social-menu-container');

    floatingButton.addEventListener('click', () => {
        socialMenu.classList.toggle('active');
        floatingButton.classList.toggle('active'); // Toggle active class on the button itself
    });

    // Slider de Reseñas
    const reviewsSlider = document.querySelector('.reviews-slider');
    const reviewSlides = document.querySelectorAll('.review-slide');
    const reviewsPrevButton = document.querySelector('.reviews-prev');
    const reviewsNextButton = document.querySelector('.reviews-next');

    let currentReviewIndex = 0;
    let reviewSlideInterval;

    function updateReviewsSlider() {
        const slideWidth = reviewSlides[0].clientWidth + 20; // Ancho del slide + margin
        reviewsSlider.style.transform = `translateX(${-currentReviewIndex * slideWidth}px)`;

        reviewSlides.forEach((slide, index) => {
            if (index === currentReviewIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextReviewSlide() {
        currentReviewIndex = (currentReviewIndex < reviewSlides.length - 1) ? currentReviewIndex + 1 : 0;
        updateReviewsSlider();
    }

    function startReviewSlideShow() {
        reviewSlideInterval = setInterval(nextReviewSlide, 7000); // Cambia cada 7 segundos
    }

    function stopReviewSlideShow() {
        clearInterval(reviewSlideInterval);
    }

    reviewsPrevButton.addEventListener('click', () => {
        stopReviewSlideShow();
        currentReviewIndex = (currentReviewIndex > 0) ? currentReviewIndex - 1 : reviewSlides.length - 1;
        updateReviewsSlider();
        startReviewSlideShow();
    });

    reviewsNextButton.addEventListener('click', () => {
        stopReviewSlideShow();
        nextReviewSlide();
        startReviewSlideShow();
    });

    reviewsSlider.addEventListener('mouseenter', stopReviewSlideShow);
    reviewsSlider.addEventListener('mouseleave', startReviewSlideShow);

    window.addEventListener('resize', () => {
        stopReviewSlideShow();
        updateReviewsSlider();
        startReviewSlideShow();
    });

    updateReviewsSlider();
    startReviewSlideShow();

    // Acordeón de Preguntas Frecuentes (FAQ)
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.closest('.faq-item');
            faqItem.classList.toggle('active');
        });
    });

    // Slider de Menú
    const menuSlider = document.querySelector('.menu-slider');
    const menuSlides = document.querySelectorAll('.menu-slide');
    const menuPrevButton = document.querySelector('.menu-prev');
    const menuNextButton = document.querySelector('.menu-next');

    let currentMenuIndex = 0;
    let menuSlideInterval;

    function updateMenuSlider() {
        const slideWidth = menuSlides[0].clientWidth;
        menuSlider.style.transform = `translateX(${-currentMenuIndex * slideWidth}px)`;

        menuSlides.forEach((slide, index) => {
            if (index === currentMenuIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextMenuSlide() {
        currentMenuIndex = (currentMenuIndex + 1) % menuSlides.length;
        updateMenuSlider();
    }

    function startMenuSlideShow() {
        menuSlideInterval = setInterval(nextMenuSlide, 5000); // Cambia cada 5 segundos
    }

    function stopMenuSlideShow() {
        clearInterval(menuSlideInterval);
    }

    menuPrevButton.addEventListener('click', () => {
        stopMenuSlideShow();
        currentMenuIndex = (currentMenuIndex - 1 + menuSlides.length) % menuSlides.length;
        updateMenuSlider();
        startMenuSlideShow();
    });

    menuNextButton.addEventListener('click', () => {
        stopMenuSlideShow();
        nextMenuSlide();
        startMenuSlideShow();
    });

    menuSlider.addEventListener('mouseenter', stopMenuSlideShow);
    menuSlider.addEventListener('mouseleave', startMenuSlideShow);

    window.addEventListener('resize', () => {
        stopMenuSlideShow();
        updateMenuSlider();
        startMenuSlideShow();
    });

    updateMenuSlider();
    startMenuSlideShow();

    // Funcionalidad de Zoom para imágenes del menú
    const zoomOverlay = document.querySelector('.zoom-overlay');
    const zoomedImage = document.querySelector('.zoom-overlay img');
    const closeZoomButton = document.querySelector('.close-zoom');

    menuSlides.forEach(slide => {
        slide.addEventListener('click', () => {
            const imgSrc = slide.querySelector('img').src;
            zoomedImage.src = imgSrc;
            zoomOverlay.classList.add('active');
        });
    });

    zoomOverlay.addEventListener('click', (event) => {
        // Cierra el overlay solo si se hace clic fuera de la imagen
        if (event.target === zoomOverlay) {
            zoomOverlay.classList.remove('active');
        }
    });

    closeZoomButton.addEventListener('click', () => {
        zoomOverlay.classList.remove('active');
    });

    // ==================================================
    // SECCIÓN PARCHE SLIDER
    // ==================================================
    const parcheSliderContainer = document.querySelector('.parche-slider-container');
    const parcheText = document.querySelector('.parche-text');
    const parcheBackground = document.querySelector('.parche-background');

    const parcheData = [
        { text: 'En pareja', animation: 'heart' },
        { text: 'Con amigos', animation: 'friends' },
        { text: 'Con la Noviesita', animation: 'heart' },
        { text: 'Con el Combo', animation: 'combo' },
        { text: 'con el novio', animation: 'heart' }
    ];

    let currentParcheIndex = 0;

    function setParcheAnimation(animationType) {
        // Limpiar clases y elementos anteriores
        parcheSliderContainer.className = 'parche-slider-container';
        parcheBackground.innerHTML = '';

        parcheSliderContainer.classList.add(`${animationType}-animation`);

        if (animationType === 'friends') {
            // Crear burbujas dinámicamente para la animación de amigos
            for (let i = 0; i < 10; i++) {
                const bubble = document.createElement('span');
                const size = Math.random() * 60 + 20; // Tamaño entre 20px y 80px
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.top = `${Math.random() * 100}%`;
                bubble.style.left = `${Math.random() * 100}%`;
                bubble.style.animationDelay = `${Math.random() * 4}s`;
                bubble.style.animationDuration = `${Math.random() * 3 + 3}s`; // Duración entre 3s y 6s
                parcheBackground.appendChild(bubble);
            }
        }
    }

    function changeParcheSlide() {
        // Ocultar texto actual
        parcheText.classList.remove('active');

        setTimeout(() => {
            // Actualizar índice
            currentParcheIndex = (currentParcheIndex + 1) % parcheData.length;
            const currentParche = parcheData[currentParcheIndex];

            // Actualizar texto y animación
            parcheText.textContent = currentParche.text;
            setParcheAnimation(currentParche.animation);

            // Mostrar nuevo texto
            parcheText.classList.add('active');
        }, 500); // Esperar a que termine la transición de opacidad
    }

    // Iniciar el slider
    setParcheAnimation(parcheData[0].animation);
    parcheText.textContent = parcheData[0].text;
    parcheText.classList.add('active');
    setInterval(changeParcheSlide, 4000); // Cambiar cada 4 segundos
});