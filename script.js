// Objeto con las traducciones
const translations = {
    es: {
        'nav-home': 'Inicio',
        'nav-profile': 'Perfil',
        'nav-gallery': 'Galería',
        'nav-experience': 'Experiencia',
        'nav-education': 'Formación',
        'nav-teaching': 'Docencia',
        'nav-skills': 'Aptitudes',
        'nav-contact': 'Contacto',
        'name': 'Matías Nahuel López',
        'role': 'Director de Tecnología de la Información',
        'location': 'Argentina',
        'hero-description': 'Director de Tecnología con más de 10 años de experiencia en tecnología e ingeniería. Lideró proyectos de transformación digital, infraestructura crítica, ciberseguridad y mejora operativa en LATAM. Actualmente dirige la estrategia de TI en Grupo Tesacom y forma futuros ingenieros como docente en UTN FRBA.',
        'profile-title': 'Perfil Profesional',
        'profile-text': 'Director de Tecnología con más de 10 años de experiencia en tecnología e ingeniería. Lideró proyectos de transformación digital, infraestructura crítica, ciberseguridad y mejora operativa en LATAM. Actualmente dirige la estrategia de TI en Grupo Tesacom y forma futuros ingenieros como docente en UTN FRBA.',
        'gallery-title': 'Galería',
        'gallery-1-title': 'Presentación en Conferencia',
        'gallery-1-desc': 'Compartiendo conocimientos sobre transformación digital',
        'gallery-2-title': 'Trabajo en Equipo',
        'gallery-2-desc': 'Liderando proyectos de innovación',
        'gallery-3-title': 'Docencia',
        'gallery-3-desc': 'Formando futuros profesionales',
        'experience-title': 'Experiencia Laboral',
        'exp-1-title': 'Director de TI',
        'exp-2-title': 'Gerente Regional de TI',
        'exp-3-title': 'Líder de Aplicaciones',
        'exp-4-title': 'Ingeniero de Redes',
        'exp-5-title': 'Desarrollador Full Stack ',
        'exp-6-title': 'Asistente Técnico',
        'exp-7-title': 'Asesor independiente de SySO',
        'exp-8-title': 'Técnico Electrónico',
        'education-title': 'Formación Académica',
        'education-text': 'Ingeniería Electrónica en curso – UTN FRBA. Carrera cursada en su totalidad, con finales pendientes para la obtención del título.',
        'teaching-title': 'Docencia',
        'teaching-1-title': 'Auxiliar docente',
        'teaching-1-desc': 'Informática 1: Participación en el curso piloto de Programación en C con introducción a microcontroladores. Enfoque en lógica de programación, estructura de código y primeros conceptos de hardware embebido.',
        'teaching-2-title': 'Auxiliar docente',
        'teaching-2-desc': 'Informática 2: Lenguaje C/C++, programación con Qt, trabajo con microcontroladores (UART, SPI, I2C), desarrollo de proyectos integradores en software y hardware.',
        'skills-title': 'Aptitudes',
        'skill-1': 'Resolución de problemas complejos',
        'skill-2': 'Gestión de cambio estructural',
        'skill-3': 'Transformación digital aplicada al negocio',
        'skill-4': 'Idiomas: Español (nativo), Inglés (profesional completo)',
        'contact-title': 'Contacto',
        'contact-button': 'Contactar',
        'experience-button': 'Ver Experiencia',
        'email-button': 'Email',
        'linkedin-button': 'LinkedIn',
        'footer-rights': 'Todos los derechos reservados'
    },
    en: {
        'nav-home': 'Home',
        'nav-profile': 'Profile',
        'nav-gallery': 'Gallery',
        'nav-experience': 'Experience',
        'nav-education': 'Education',
        'nav-teaching': 'Teaching',
        'nav-skills': 'Skills',
        'nav-contact': 'Contact',
        'name': 'Matías Nahuel López',
        'role': 'Director of Information Technology',
        'location': 'Argentina',
        'hero-description': 'IT Director with over 10 years of experience in technology and engineering. Led digital transformation, critical infrastructure, cybersecurity, and operational improvement projects across LATAM. Currently leads IT strategy at Grupo Tesacom and teaches future engineers at UTN FRBA.',
        'profile-title': 'Professional Profile',
        'profile-text': 'IT Director with over 10 years of experience in technology and engineering. Led digital transformation, critical infrastructure, cybersecurity, and operational improvement projects across LATAM. Currently leads IT strategy at Grupo Tesacom and teaches future engineers at UTN FRBA.',
        'gallery-title': 'Gallery',
        'gallery-1-title': 'Conference Presentation',
        'gallery-1-desc': 'Sharing knowledge about digital transformation',
        'gallery-2-title': 'Team Work',
        'gallery-2-desc': 'Leading innovation projects',
        'gallery-3-title': 'Teaching',
        'gallery-3-desc': 'Training future professionals',
        'experience-title': 'Work Experience',
        'exp-1-title': 'IT Director',
        'exp-2-title': 'Regional IT Manager',
        'exp-3-title': 'Applications Lead',
        'exp-4-title': 'Network Engineer',
        'exp-5-title': 'Full Stack Developer',
        'exp-6-title': 'Technical Assistant',
        'exp-7-title': 'Independent ISMS Consultant',
        'exp-8-title': 'Electronics Technician',
        'education-title': 'Education',
        'education-text': 'Electronic Engineering in progress – UTN FRBA. Entire program completed; final exams pending for degree completion.',
        'teaching-title': 'Teaching Experience',
        'teaching-1-title': 'Teaching Assistant',
        'teaching-1-desc': 'Computer Science 1: Participation in the pilot course of C Programming with microcontroller introduction. Focus on programming logic, code structure, and first embedded hardware concepts.',
        'teaching-2-title': 'Teaching Assistant',
        'teaching-2-desc': 'Computer Science 2: C/C++ programming, Qt development, microcontroller work (UART, SPI, I2C), integrated software and hardware projects.',
        'skills-title': 'Skills',
        'skill-1': 'Complex problem solving',
        'skill-2': 'Structural change management',
        'skill-3': 'Business-focused digital transformation',
        'skill-4': 'Languages: Spanish (native), English (professional)',
        'contact-title': 'Contact',
        'contact-button': 'Contact',
        'experience-button': 'View Experience',
        'email-button': 'Email',
        'linkedin-button': 'LinkedIn',
        'footer-rights': 'All rights reserved'
    }
};

// Estado del idioma
let currentLang = 'es';

// Elementos del DOM
const langToggle = document.getElementById('langToggle');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const scrollProgress = document.getElementById('scrollProgress');

// Función para cambiar el idioma
function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    langToggle.textContent = currentLang === 'es' ? 'EN' : 'ES';
    
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    updateCVDownload();
    updateExperienceDetails();
}

// Función para manejar el menú móvil
function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
    menuToggle.classList.toggle('text-highlight');
}

// Función para actualizar el indicador de progreso
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';
}

// Función para manejar la animación al hacer scroll
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate-fade-in');
        }
    });
}

// Función para manejar el scroll suave
function handleSmoothScroll(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Cerrar el menú móvil si está abierto
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        }
    }
}

// Función para manejar la galería
function handleGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const caption = item.querySelector('.gallery-caption');
            
            // Crear modal
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50';
            
            const modalContent = document.createElement('div');
            modalContent.className = 'max-w-4xl mx-auto p-4';
            
            const modalImg = document.createElement('img');
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modalImg.className = 'w-full h-auto rounded-lg';
            
            const modalCaption = document.createElement('div');
            modalCaption.className = 'text-white mt-4 text-center';
            modalCaption.innerHTML = caption.innerHTML;
            
            modalContent.appendChild(modalImg);
            modalContent.appendChild(modalCaption);
            modal.appendChild(modalContent);
            
            // Cerrar modal al hacer click
            modal.addEventListener('click', () => {
                modal.remove();
            });
            
            document.body.appendChild(modal);
        });
    });
}

// Cambiar el enlace del CV según el idioma
function updateCVDownload() {
    const cvDownload = document.getElementById('cvDownload');
    if (!cvDownload) return;
    if (currentLang === 'es') {
        cvDownload.href = 'cv-matias-nahuel-lopez-es.pdf';
        cvDownload.querySelector('span').textContent = 'Descargar CV';
    } else {
        cvDownload.href = 'cv-matias-nahuel-lopez-en.pdf';
        cvDownload.querySelector('span').textContent = 'Download CV';
    }
}

// --- Carrousel dinámico para la galería usando gallery.json ---
const galleryDir = 'gallery/';
const galleryImagesDiv = document.getElementById('gallery-images');
const galleryPrev = document.getElementById('gallery-prev');
const galleryNext = document.getElementById('gallery-next');
let galleryImages = [];
let galleryIndex = 0;

function showGalleryImages(idx) {
    if (!galleryImagesDiv) return;
    galleryImagesDiv.innerHTML = '';
    if (galleryImages.length === 0) return;
    let visible = 1;
    if (window.innerWidth >= 768) visible = 3;
    for (let i = 0; i < visible; i++) {
        const imgIdx = (idx + i) % galleryImages.length;
        const img = document.createElement('img');
        img.src = galleryDir + galleryImages[imgIdx];
        img.alt = 'Foto galería ' + (imgIdx + 1);
        img.className = 'w-full h-96 object-cover rounded-2xl transition-all duration-500 flex-1 cursor-pointer';
        img.loading = 'lazy';
        img.onclick = () => openGalleryModal(imgIdx);
        galleryImagesDiv.appendChild(img);
    }
}

function setupGalleryCarousel() {
    if (galleryPrev && galleryNext) {
        galleryPrev.addEventListener('click', () => {
            galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
            showGalleryImages(galleryIndex);
        });
        galleryNext.addEventListener('click', () => {
            galleryIndex = (galleryIndex + 1) % galleryImages.length;
            showGalleryImages(galleryIndex);
        });
    }
    if (galleryImages.length > 0) {
        showGalleryImages(galleryIndex);
    }
    window.addEventListener('resize', () => showGalleryImages(galleryIndex));
}

// Leer gallery.json
fetch(galleryDir + 'gallery.json')
    .then(res => res.json())
    .then(imgs => {
        galleryImages = imgs;
        setupGalleryCarousel();
    })
    .catch(() => {
        // Si falla, no mostrar nada
    });

// --- Animaciones y lógica para cards de experiencia laboral ---
document.querySelectorAll('.exp-card').forEach(card => {
    card.addEventListener('click', function () {
        const detailId = this.getAttribute('data-detail');
        const detail = document.getElementById(detailId);
        if (!detail) return;
        // Cerrar otros detalles
        document.querySelectorAll('.exp-detail').forEach(d => {
            if (d !== detail) {
                d.classList.add('hidden');
                d.classList.remove('animate-fade-in');
            }
        });
        // Toggle animación
        if (detail.classList.contains('hidden')) {
            detail.classList.remove('hidden');
            detail.classList.add('animate-fade-in');
        } else {
            detail.classList.add('hidden');
            detail.classList.remove('animate-fade-in');
        }
    });
});

// --- Traducción de detalles de experiencia laboral, docencia y formación académica como bloques de texto ---
function updateExperienceDetails() {
    const detailKeys = [
        {id: 'exp-1-detail', key: 'exp-1-detail'},
        {id: 'exp-2-detail', key: 'exp-2-detail'},
        {id: 'exp-3-detail', key: 'exp-3-detail'},
        {id: 'exp-4-detail', key: 'exp-4-detail'},
        {id: 'exp-5-detail', key: 'exp-5-detail'},
        {id: 'exp-6-detail', key: 'exp-6-detail'},
        {id: 'exp-7-detail', key: 'exp-7-detail'},
        {id: 'exp-8-detail', key: 'exp-8-detail'},
        {id: 'teaching-1-detail', key: 'teaching-1-detail'},
        {id: 'teaching-2-detail', key: 'teaching-2-detail'},
        {id: 'education-detail', key: 'education-detail'}
    ];
    detailKeys.forEach(item => {
        const detail = document.getElementById(item.id) || document.querySelector(`[data-lang='${item.key}']`);
        if (detail && translations[currentLang][item.key]) {
            detail.textContent = translations[currentLang][item.key];
        }
    });
}

// --- Switch ON/OFF de idioma ---
const langSwitchToggle = document.getElementById('langSwitchToggle');
if (langSwitchToggle) {
    langSwitchToggle.checked = currentLang === 'en';
    langSwitchToggle.addEventListener('change', () => {
        currentLang = langSwitchToggle.checked ? 'en' : 'es';
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
            }
        });
        updateCVDownload();
        updateExperienceDetails();
    });
}

// --- Modal para galería HD con zoom y navegación ---
const galleryModal = document.getElementById('gallery-modal');
const galleryModalImg = document.getElementById('gallery-modal-img');
const galleryModalClose = document.getElementById('gallery-modal-close');
const galleryModalPrev = document.getElementById('gallery-modal-prev');
const galleryModalNext = document.getElementById('gallery-modal-next');
let galleryModalIndex = 0;

function openGalleryModal(idx) {
    if (!galleryModal || !galleryModalImg) return;
    galleryModal.classList.remove('hidden');
    galleryModalIndex = idx;
    galleryModalImg.src = galleryDir + galleryImages[galleryModalIndex];
    galleryModalImg.alt = 'Foto galería HD ' + (galleryModalIndex + 1);
}
function closeGalleryModal() {
    if (!galleryModal) return;
    galleryModal.classList.add('hidden');
    galleryModalImg.src = '';
}
function nextGalleryModal() {
    galleryModalIndex = (galleryModalIndex + 1) % galleryImages.length;
    openGalleryModal(galleryModalIndex);
}
function prevGalleryModal() {
    galleryModalIndex = (galleryModalIndex - 1 + galleryImages.length) % galleryImages.length;
    openGalleryModal(galleryModalIndex);
}
if (galleryModalClose) galleryModalClose.onclick = closeGalleryModal;
if (galleryModalNext) galleryModalNext.onclick = nextGalleryModal;
if (galleryModalPrev) galleryModalPrev.onclick = prevGalleryModal;
if (galleryModal) galleryModal.onclick = (e) => { if (e.target === galleryModal) closeGalleryModal(); };
if (galleryModalImg) {
    let zoomed = false;
    galleryModalImg.onclick = () => {
        zoomed = !zoomed;
        if (zoomed) {
            galleryModalImg.classList.add('scale-150', 'cursor-zoom-out');
        } else {
            galleryModalImg.classList.remove('scale-150', 'cursor-zoom-out');
        }
    };
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el idioma
    toggleLanguage();
    
    // Agregar clase de animación a elementos
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('animate-on-scroll');
    });
    
    // Event listeners
    langToggle.addEventListener('click', toggleLanguage);
    menuToggle.addEventListener('click', toggleMobileMenu);
    window.addEventListener('scroll', () => {
        updateScrollProgress();
        handleScrollAnimation();
    });
    
    // Manejar scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });
    
    // Inicializar galería
    handleGallery();
    
    // Cerrar menú móvil al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });
    
    updateCVDownload();
    updateExperienceDetails();
}); 