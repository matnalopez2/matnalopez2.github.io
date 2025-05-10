// Objeto con las traducciones
const translations = {
    es: {
        'nav-home': 'Inicio',
        'nav-profile': 'Perfil',
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
        'experience-title': 'Experiencia Laboral',
        'exp-1-title': 'Director de TI – Grupo Tesacom',
        'exp-2-title': 'Gerente Regional de TI – Tesacom',
        'exp-3-title': 'Líder de Aplicaciones – Tesacom',
        'exp-4-title': 'Ingeniero de Redes – Tesacom',
        'exp-5-title': 'Desarrollador Full Stack – Debmedia',
        'exp-6-title': 'Asistente Técnico – Investigaciones Médicas S.A.',
        'exp-7-title': 'Asesor independiente de SySO – SA&GE',
        'exp-8-title': 'Técnico Electrónico – Energía Confiable SRL',
        'education-title': 'Formación Académica',
        'education-text': 'Ingeniería Electrónica en curso – UTN FRBA. Carrera cursada en su totalidad, con finales pendientes para la obtención del título.',
        'teaching-title': 'Docencia',
        'teaching-1-title': 'Auxiliar docente – UTN FRBA',
        'teaching-1-desc': 'Informática 1: Participación en el curso piloto de Programación en C con introducción a microcontroladores. Enfoque en lógica de programación, estructura de código y primeros conceptos de hardware embebido.',
        'teaching-2-title': 'Auxiliar docente – UTN FRBA',
        'teaching-2-desc': 'Informática 2: Lenguaje C/C++, programación con Qt, trabajo con microcontroladores (UART, SPI, I2C), desarrollo de proyectos integradores en software y hardware.',
        'skills-title': 'Aptitudes',
        'skill-1': 'Resolución de problemas complejos',
        'skill-2': 'Gestión de cambio estructural',
        'skill-3': 'Transformación digital aplicada al negocio',
        'skill-4': 'Idiomas: Español (nativo), Inglés (profesional completo)',
        'contact-title': 'Contacto',
        'footer-rights': 'Todos los derechos reservados'
    },
    en: {
        'nav-home': 'Home',
        'nav-profile': 'Profile',
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
        'experience-title': 'Work Experience',
        'exp-1-title': 'IT Director – Grupo Tesacom',
        'exp-2-title': 'Regional IT Manager – Tesacom',
        'exp-3-title': 'Applications Lead – Tesacom',
        'exp-4-title': 'Network Engineer – Tesacom',
        'exp-5-title': 'Full Stack Developer – Debmedia',
        'exp-6-title': 'Technical Assistant – Investigaciones Médicas S.A.',
        'exp-7-title': 'Independent ISMS Consultant – SA&GE',
        'exp-8-title': 'Electronics Technician – Energía Confiable SRL',
        'education-title': 'Education',
        'education-text': 'Electronic Engineering in progress – UTN FRBA. Entire program completed; final exams pending for degree completion.',
        'teaching-title': 'Teaching Experience',
        'teaching-1-title': 'Teaching Assistant – UTN FRBA',
        'teaching-1-desc': 'Computer Science 1: Participation in the pilot course of C Programming with microcontroller introduction. Focus on programming logic, code structure, and first embedded hardware concepts.',
        'teaching-2-title': 'Teaching Assistant – UTN FRBA',
        'teaching-2-desc': 'Computer Science 2: C/C++ programming, Qt development, microcontroller work (UART, SPI, I2C), integrated software and hardware projects.',
        'skills-title': 'Skills',
        'skill-1': 'Complex problem solving',
        'skill-2': 'Structural change management',
        'skill-3': 'Business-focused digital transformation',
        'skill-4': 'Languages: Spanish (native), English (professional)',
        'contact-title': 'Contact',
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
    
    // Cerrar menú móvil al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });
}); 