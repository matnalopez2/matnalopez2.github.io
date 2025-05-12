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
        'hero-description': 'Liderazgo tecnológico con human touch para transformar negocios. \nProfesional en tecnología e ingeniería con más de 10 años de trayectoria; hoy diseño y ejecuto la estrategia TI de un grupo regional de telecomunicaciones satelitales y formo futuros ingenieros como docente en UTN FRBA.',
        'profile-title': 'Perfil Profesional',
        'profile-text-1': 'Soy Matías Nahuel López, profesional de tecnología con formación íntegra en Ingeniería Electrónica (carrera completa, finales en curso) y líder tecnológico por convicción. Inicié mi camino instalando equipamiento médico de alta complejidad -incluido el reemplazo de un resonador abierto que obligó a reforzar la estructura de un edificio con geopolímero- y desde entonces convierto cada desafío técnico en valor de negocio.',
        'profile-text-2': 'Actualmente dirijo la estrategia TI de un grupo regional de telecomunicaciones satelitales. Creo en la tecnología con human touch: decisiones basadas en datos, ejecutadas por personas motivadas y seguras.',
        'profile-text-3': 'Logros destacados:',
        'profile-text-4': 'Implementación regional de plataforma de gestión (Odoo): ERP, CRM, Email Marketing, Legajo Digital RR.HH. y HelpDesk integrados. El 100% de los procesos críticos ya opera allí en los 4 países de la región.',
        'profile-text-5': 'Optimización de infraestructura TI: racionalización de hosting y virtualización, con una reducción aproximada del 25% en costos anuales.',
        'profile-text-6': 'Resiliencia en ciberseguridad: contuvimos un ataque de ransomware LockBit Black sin pérdida de datos e implementamos backups inmutables, 2FA y modelo Zero Trust, alineados con las recomendaciones FBI/CISA.',
        'profile-text-7': 'Cultura y liderazgo: desarrollo de un equipo TI multidisciplinario de alto desempeño con impacto regional; gestión por OKRs, mentoría continua y retención de talento en un entorno de crecimiento.',
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
        'education-text': 'Ingeniería Electrónica en curso - UTN FRBA. Carrera cursada en su totalidad, con finales pendientes para la obtención del título.',
        'teaching-title': 'Docencia',
        'teaching-1-title': 'Informática 1 -Auxiliar docente',
        'teaching-1-desc': 'Informática 1: Participación en el curso piloto de Programación en C con introducción a microcontroladores. Enfoque en lógica de programación, estructura de código y primeros conceptos de hardware embebido.',
        'teaching-2-title': 'Informática 2 - Auxiliar docente',
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
        'footer-rights': 'Todos los derechos reservados',
        'exp-1-detail': 'Responsable de la estrategia tecnológica, liderazgo de equipos multidisciplinarios y gestión de proyectos de transformación digital.',
        'exp-2-detail': 'Gestión regional de infraestructura, soporte y ciberseguridad para operaciones en LATAM.',
        'exp-3-detail': 'Liderazgo en desarrollo de aplicaciones empresariales y automatización de procesos.',
        'exp-4-detail': 'Diseño, implementación y mantenimiento de redes críticas.',
        'exp-5-detail': 'Desarrollo full stack de soluciones SaaS y aplicaciones a medida.',
        'exp-6-detail': 'Soporte técnico y mantenimiento de equipos médicos.',
        'exp-7-detail': 'Consultoría independiente en seguridad y salud ocupacional.',
        'exp-8-detail': 'Instalación y reparación de sistemas electrónicos industriales.',
        'teaching-1-detail': 'Participación en el curso piloto de Programación en C con introducción a microcontroladores. Enfoque en lógica de programación, estructura de código y primeros conceptos de hardware embebido.',
        'teaching-2-detail': 'Lenguaje C/C++, programación con Qt, trabajo con microcontroladores (UART, SPI, I2C), desarrollo de proyectos integradores en software y hardware.',
        'education-detail': 'Carrera cursada en su totalidad, con finales pendientes para la obtención del título.'
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
        'profile-text-1': 'I am Matías Nahuel López, a technology professional with a complete Electronic Engineering curriculum (final exams in progress) and a tech leader by conviction. I began my career installing high-complexity medical equipment -including the replacement of an open MRI that required reinforcing a building\'s structure with geopolymer- and since then, I\ve turned every technical challenge into business value.',
        'profile-text-2': 'I currently lead the IT strategy of a regional satellite-telecom group. I believe in technology with a human touch: data-driven decisions executed by empowered, motivated people.',
        'profile-text-3': 'Key achievements:',
        'profile-text-4': 'Regional management-platform roll-out (Odoo): integrated ERP, CRM, Email Marketing, Digital HR Records and Help Desk. 100% of critical processes now run on the platform across four countries.',
        'profile-text-5': 'IT infrastructure optimization: streamlined hosting and virtualization, achieving an approximate 25% annual cost reduction.',
        'profile-text-6': 'Cyber-resilience: contained a LockBit Black ransomware attack with zero data loss and deployed immutable backups, 2-factor authentication and a Zero Trust model in line with FBI/CISA guidance.',
        'profile-text-7': 'Culture & leadership: built a high-performing, multidisciplinary IT team with regional impact; OKR-driven management, continuous mentoring and strong talent retention in a growth environment.',
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
        'teaching-1-title': 'Computer Science 1 - Teaching Assistant',
        'teaching-1-desc': 'Participation in the pilot course of C Programming with microcontroller introduction. Focus on programming logic, code structure, and first embedded hardware concepts.',
        'teaching-2-title': 'Computer Science 2 - Teaching Assistant',
        'teaching-2-desc': 'C/C++ programming, Qt development, microcontroller work (UART, SPI, I2C), integrated software and hardware projects.',
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
        'footer-rights': 'All rights reserved',
        'exp-1-detail': 'Responsible for technology strategy, leading multidisciplinary teams and managing digital transformation projects.',
        'exp-2-detail': 'Regional management of infrastructure, support, and cybersecurity for LATAM operations.',
        'exp-3-detail': 'Leadership in enterprise application development and process automation.',
        'exp-4-detail': 'Design, implementation, and maintenance of critical networks.',
        'exp-5-detail': 'Full stack development of SaaS solutions and custom applications.',
        'exp-6-detail': 'Technical support and maintenance of medical equipment.',
        'exp-7-detail': 'Independent consulting in occupational health and safety.',
        'exp-8-detail': 'Installation and repair of industrial electronic systems.',
        'teaching-1-detail': 'Participation in the pilot course of C Programming with microcontroller introduction. Focus on programming logic, code structure, and first embedded hardware concepts.',
        'teaching-2-detail': 'C/C++ programming, Qt development, microcontroller work (UART, SPI, I2C), integrated software and hardware projects.',
        'education-detail': 'Entire program completed; final exams pending for degree completion.'
    }
};

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