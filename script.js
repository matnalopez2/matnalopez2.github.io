

// Estado del idioma
let currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('es') ? 'es' : 'en');

// Elementos del DOM
const langToggle = document.getElementById('langToggle');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const scrollProgress = document.getElementById('scrollProgress');

// Función para cambiar el idioma
function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    if (langToggle) langToggle.textContent = currentLang === 'es' ? 'EN' : 'ES';
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLang][key] !== undefined) {
            element.textContent = translations[currentLang][key];
        }
    });
    updateCVDownload();
    updateExperienceDetails();
    updateProfileSection();
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

// Cambiar el enlace del CV según el idioma
function updateCVDownload() {
    const cvDownload = document.getElementById('cvDownload');
    if (!cvDownload) return;
    if (currentLang === 'es') {
        cvDownload.href = 'CV_Matias_Nahuel_Lopez_ES.pdf';
        cvDownload.querySelector('span').textContent = 'Descargar CV';
    } else {
        cvDownload.href = 'CV_Matias_Nahuel_Lopez_EN.pdf';
        cvDownload.querySelector('span').textContent = 'Download CV';
    }
}


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
        if (detail) {
            detail.textContent = translations[currentLang][item.key] || '';
        }
    });
}

// --- Switch ON/OFF de idioma ---
const langSwitchToggle = document.getElementById('langSwitchToggle');
if (langSwitchToggle) {
    langSwitchToggle.checked = currentLang === 'en';
    langSwitchToggle.addEventListener('change', () => {
        setLanguage(langSwitchToggle.checked ? 'en' : 'es');
    });
}


// Mostrar/ocultar bloques de perfil según idioma
function updateProfileSection() {
    const perfilEs = document.getElementById('perfil-es');
    const perfilEn = document.getElementById('perfil-en');
    if (perfilEs && perfilEn) {
        if (currentLang === 'es') {
            perfilEs.classList.remove('hidden');
            perfilEn.classList.add('hidden');
        } else {
            perfilEs.classList.add('hidden');
            perfilEn.classList.remove('hidden');
        }
    }
}

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLang][key] !== undefined) {
            element.textContent = translations[currentLang][key];
        }
    });
    updateCVDownload();
    updateExperienceDetails();
    if (typeof updateProfileSection === 'function') updateProfileSection();
    if (langSwitchToggle) langSwitchToggle.checked = currentLang === 'en';
    localStorage.setItem('lang', currentLang);
    // Mostrar el contenido solo cuando ya está traducido
    const mainBody = document.getElementById('mainBody');
    if (mainBody) mainBody.classList.remove('invisible');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
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
    
    // Cerrar menú móvil al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });
    
    updateCVDownload();
    updateExperienceDetails();
    updateProfileSection();
}); 