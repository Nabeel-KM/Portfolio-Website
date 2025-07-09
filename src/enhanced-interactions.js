/**
 * Enhanced Interactions for Portfolio Website
 * Created by Amazon Q - Professional UI/UX Enhancement
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all enhancements
  initScrollProgress();
  initAnimations();
  initThemeToggle();
  initNavHighlighting();
  initSkillBars();
  initLazyLoading();
});

/**
 * Scroll Progress Indicator
 */
function initScrollProgress() {
  // Create scroll progress element if it doesn't exist
  if (!document.querySelector('.scroll-progress')) {
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
  }
  
  // Update scroll progress on scroll
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
  });
}

/**
 * Scroll-triggered Animations
 */
function initAnimations() {
  // Add animation classes to elements
  const animatedElements = [
    { selector: 'section > h2', className: 'animate-fade-in' },
    { selector: '.about__container', className: 'animate-fade-in' },
    { selector: '.experience__container', className: 'animate-fade-in' },
    { selector: '.services__container', className: 'animate-fade-in' },
    { selector: '.portfolio__container', className: 'animate-fade-in' },
    { selector: '.testimonials__container', className: 'animate-fade-in' },
    { selector: '.contact__container', className: 'animate-fade-in' },
    { selector: '.portfolio__item', className: 'animate-scale' },
    { selector: '.testimonial', className: 'animate-scale' },
    { selector: '.service', className: 'animate-scale' }
  ];
  
  animatedElements.forEach(item => {
    document.querySelectorAll(item.selector).forEach(element => {
      element.classList.add(item.className);
      if (item.className === 'animate-fade-in') {
        element.classList.add('animate-on-scroll');
      }
    });
  });
  
  // Set up intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });
}

/**
 * Theme Toggle Functionality
 */
function initThemeToggle() {
  // Create theme toggle button if it doesn't exist
  if (!document.querySelector('.theme-toggle')) {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle dark/light mode');
    themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    document.body.appendChild(themeToggle);
  }
  
  // Check for saved theme preference or use device preference
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = localStorage.getItem('theme');
  
  if (currentTheme === 'light') {
    document.body.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  } else {
    document.body.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  }
  
  // Add event listener to theme toggle button
  document.querySelector('.theme-toggle').addEventListener('click', () => {
    let theme = 'dark';
    
    if (document.body.getAttribute('data-theme') === 'dark') {
      document.body.setAttribute('data-theme', 'light');
      theme = 'light';
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
    
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
  });
}

/**
 * Update theme icon based on current theme
 */
function updateThemeIcon(theme) {
  const themeToggle = document.querySelector('.theme-toggle');
  
  if (theme === 'light') {
    themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
  } else {
    themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
  }
}

/**
 * Navigation Highlighting
 */
function initNavHighlighting() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * Skill Bars Animation
 */
function initSkillBars() {
  // Find all skill bars and set up animation
  const skillBars = document.querySelectorAll('.skill-bar');
  
  if (skillBars.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target.querySelector('.skill-progress');
          const percentage = progressBar.getAttribute('data-percentage');
          progressBar.style.width = percentage + '%';
        }
      });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
  }
}

/**
 * Lazy Loading for Images
 */
function initLazyLoading() {
  // Convert images to lazy loading
  const images = document.querySelectorAll('img:not(.lazy)');
  
  images.forEach(img => {
    // Skip images that are already set up for lazy loading
    if (img.classList.contains('lazy') || img.hasAttribute('data-src')) {
      return;
    }
    
    // Save original src
    const src = img.getAttribute('src');
    
    // Set up for lazy loading
    img.classList.add('lazy');
    img.setAttribute('data-src', src);
    img.setAttribute('src', 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E');
  });
  
  // Set up intersection observer for lazy loading
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll('img.lazy').forEach(img => {
      img.src = img.dataset.src;
      img.classList.remove('lazy');
    });
  }
}
