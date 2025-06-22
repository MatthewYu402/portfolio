// ============ COMPLETE script.js for Multi-Page Portfolio with Scroll Lock ============

// Invisible Scroll Lock Class
class InvisibleScrollLock {
  constructor() {
    this.locked = false;
    this.originalScrollY = 0;
  }

  lock() {
    if (this.locked) return;

    console.log('Locking scroll for animation');

    // Store current scroll position
    this.originalScrollY = window.scrollY;

    // Bind event handlers
    this.handleWheel = this.handleWheel.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    // Add event listeners to prevent ALL forms of scrolling
    window.addEventListener('wheel', this.handleWheel, { passive: false });
    window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
    window.addEventListener('keydown', this.handleKeyDown, { passive: false });
    window.addEventListener('scroll', this.handleScroll, { passive: false });

    // Also prevent on document and body
    document.addEventListener('wheel', this.handleWheel, { passive: false });
    document.addEventListener('touchmove', this.handleTouchMove, { passive: false });
    document.body.addEventListener('wheel', this.handleWheel, { passive: false });
    document.body.addEventListener('touchmove', this.handleTouchMove, { passive: false });

    this.locked = true;
  }

  unlock() {
    if (!this.locked) return;

    console.log('Unlocking scroll after animation');

    // Remove all event listeners
    window.removeEventListener('wheel', this.handleWheel);
    window.removeEventListener('touchmove', this.handleTouchMove);
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('scroll', this.handleScroll);

    document.removeEventListener('wheel', this.handleWheel);
    document.removeEventListener('touchmove', this.handleTouchMove);
    document.body.removeEventListener('wheel', this.handleWheel);
    document.body.removeEventListener('touchmove', this.handleTouchMove);

    this.locked = false;
  }

  handleWheel(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  }

  handleTouchMove(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  }

  handleKeyDown(e) {
    // Prevent scroll-related keys
    const scrollKeys = [
      32,  // Space
      33,  // Page Up
      34,  // Page Down
      35,  // End
      36,  // Home
      37,  // Left Arrow
      38,  // Up Arrow
      39,  // Right Arrow
      40   // Down Arrow
    ];

    if (scrollKeys.includes(e.keyCode)) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    }
  }

  handleScroll(e) {
    // Force scroll position to stay at original position
    window.scrollTo(0, this.originalScrollY);
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
}

// Hamburger Menu Controller
class HamburgerMenu {
  constructor() {
    this.hamburger = document.getElementById('hamburger');
    this.navOverlay = document.getElementById('navOverlay');
    this.closeBtn = document.getElementById('closeBtn');
    this.body = document.body;
    this.isOpen = false;

    this.init();
  }

  init() {
    if (!this.hamburger || !this.navOverlay) return;

    this.hamburger.addEventListener('click', () => {
      this.toggleMenu();
    });

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => {
        this.closeMenu();
      });
    }

    this.navOverlay.addEventListener('click', (e) => {
      if (e.target === this.navOverlay) {
        this.closeMenu();
      }
    });

    // Close menu when clicking navigation links
    const navLinks = this.navOverlay.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        setTimeout(() => {
          this.closeMenu();
        }, 200);
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 850 && this.isOpen) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    this.hamburger.classList.add('active');
    this.navOverlay.classList.add('active');
    this.body.classList.add('nav-open');
    this.isOpen = true;

    if (this.closeBtn) {
      this.closeBtn.focus();
    }
  }

  closeMenu() {
    this.hamburger.classList.remove('active');
    this.navOverlay.classList.remove('active');
    this.body.classList.remove('nav-open');
    this.isOpen = false;

    this.hamburger.focus();
  }
}

// Navigation Controller for Multi-Page Setup
class NavigationController {
  constructor() {
    this.pageMap = {
      'home': 'home.html',     // Changed: home now points to home.html
      'about': 'about.html',
      'skills': 'skills.html',
      'projects': 'projects.html',
      'experience': 'experience.html',
      'contact': 'contact.html'
    };
    this.init();
  }

  init() {
    this.setupPageNavigation();
    this.setupActiveNavigation();
    this.setupScrollHeader();
  }

  setupPageNavigation() {
    // Handle all navigation links (both desktop and mobile)
    const allNavLinks = document.querySelectorAll('nav a, .mobile-nav a');

    allNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const linkText = link.textContent.trim().toLowerCase();
        const targetPage = this.pageMap[linkText];

        if (targetPage) {
          this.navigateToPage(targetPage);
        }
      });
    });
  }

  navigateToPage(targetPage) {
    // Add smooth transition
    document.body.style.transition = 'opacity 0.3s ease-out';
    document.body.style.opacity = '0';

    setTimeout(() => {
      window.location.href = targetPage;
    }, 300);
  }

  setupActiveNavigation() {
    // Set active navigation based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Map file names to navigation text
    const pageToNav = {
      'index.html': null,       // Animation page - no nav highlight
      'home.html': 'home',      // Only home.html gets 'home' nav highlight
      'about.html': 'about',
      'skills.html': 'skills',
      'projects.html': 'projects',
      'experience.html': 'experience',
      'contact.html': 'contact'
    };

    const currentNavId = pageToNav[currentPage];

    // Remove active from all links
    document.querySelectorAll('nav a, .mobile-nav a').forEach(link => {
      link.classList.remove('active');
    });

    // Add active to current page links (only if currentNavId exists)
    if (currentNavId) {
      document.querySelectorAll('nav a, .mobile-nav a').forEach(link => {
        if (link.textContent.trim().toLowerCase() === currentNavId) {
          link.classList.add('active');
        }
      });
    }
  }

  setupScrollHeader() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    if (header) {
      window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          header.style.transform = 'translateY(-120%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
      });
    }
  }
}

// Logo Controller (for animation page navigation)
class LogoController {
  constructor() {
    this.init();
  }

  init() {
    const logo = document.querySelector('.logo');

    if (logo) {
      logo.style.cursor = 'pointer';
      logo.addEventListener('click', (e) => {
        e.preventDefault();

        // Always navigate to home page (home.html)
        this.navigateWithTransition('index.html');
      });
    }
  }

  navigateWithTransition(targetPage) {
    // Smooth fade out
    document.body.style.transition = 'opacity 0.5s ease-out';
    document.body.style.opacity = '0';

    // Navigate after fade
    setTimeout(() => {
      window.location.href = targetPage;
    }, 500);
  }
}

// Typewriter Class
class Typewriter {
  constructor(element, options = {}) {
    this.element = element;
    this.texts = options.texts || ['Student', 'Software Developer', 'Web Developer', 'Creative'];
    this.typeSpeed = options.typeSpeed || 80;
    this.deleteSpeed = options.deleteSpeed || 80;
    this.pauseTime = options.pauseTime || 2250;
    this.currentTextIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;

    this.start();
  }

  start() {
    this.type();
  }

  type() {
    const currentText = this.texts[this.currentTextIndex];

    if (this.isDeleting) {
      this.element.textContent = currentText.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;

      if (this.currentCharIndex == 0) {
        this.isDeleting = false;
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        setTimeout(() => this.type(), 500);
        return;
      }

      setTimeout(() => this.type(), this.deleteSpeed);
    } else {
      this.element.textContent = currentText.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;

      if (this.currentCharIndex == currentText.length) {
        setTimeout(() => {
          this.isDeleting = true;
          this.type();
        }, this.pauseTime);
        return;
      }

      const speed = this.typeSpeed + Math.random() * 100;
      setTimeout(() => this.type(), speed);
    }
  }
}

// Page-specific functionality
class PageController {
  constructor() {
    console.log('PageController constructor called');
    this.currentPage = this.detectPage();
    console.log('Detected page:', this.currentPage);
    this.init();
  }

  detectPage() {
    const fileName = window.location.pathname.split('/').pop() || 'index.html';
    const hasAnimationContainer = document.querySelector('.animation-container');

    console.log('detectPage - fileName:', fileName);
    console.log('detectPage - hasAnimationContainer:', !!hasAnimationContainer);

    // Check for animation page by DOM element (since index.html is now the animation)
    if (hasAnimationContainer) {
      console.log('Detected as animation page');
      return 'animation';
    }
    if (fileName.includes('about')) return 'about';
    if (fileName.includes('skills')) return 'skills';
    if (fileName.includes('projects')) return 'projects';
    if (fileName.includes('experience')) return 'experience';
    if (fileName.includes('contact')) return 'contact';
    if (fileName.includes('home')) return 'home';  // home.html is the actual home page

    console.log('Defaulting to home page');
    return 'home';
  }

  init() {
    console.log('PageController init called for page:', this.currentPage);
    // Initialize page-specific functionality
    switch (this.currentPage) {
      case 'animation':
        console.log('Initializing animation page...');
        this.initAnimationPage();
        break;
      case 'home':
        console.log('Initializing home page...');
        this.initHomePage();
        break;
      case 'about':
        console.log('Initializing about page...');
        this.initAboutPage();
        break;
      default:
        console.log('Initializing generic page...');
        this.initGenericPage();
    }
  }

  initAnimationPage() {
    console.log('Animation page detected - starting animation sequence');

    // Convert all text immediately
    this.convertAllText();

    // Fade out lines after 6.4 seconds
    setTimeout(() => {
      console.log('Fading out animation lines...');
      document.querySelectorAll('.line').forEach(line => {
        line.classList.add('no-flicker');
        line.classList.add('fade-out');
      });
    }, 6400);

    // Redirect to home page after 12 seconds
    setTimeout(() => {
      console.log('Animation complete - preparing to redirect to home');

      // Mark animation as seen
      sessionStorage.setItem('animationSeen', 'true');

      // Fade out the page
      document.body.style.transition = 'opacity 1.5s ease-out';
      document.body.style.opacity = '0';

      // Navigate to home page after fade
      setTimeout(() => {
        console.log('Redirecting to home.html...');
        window.location.href = 'home.html';
      }, 1500);
    }, 12000);

    // Optional: Allow clicking to skip animation
    document.addEventListener('click', () => {
      console.log('Animation skipped by user click');
      sessionStorage.setItem('animationSeen', 'true');
      document.body.style.transition = 'opacity 0.5s ease-out';
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 500);
    });
  }

  initHomePage() {
    console.log('Home page detected');

    // Don't redirect if someone lands directly on home.html
    // Just show the home page normally - the animation is optional

    // Normal home page initialization
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in';
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);

    // Initialize typewriter
    this.initTypewriter();
  }

  initAboutPage() {
    console.log('About page detected');
    this.initSlideshow();
  }

  initGenericPage() {
    console.log(`${this.currentPage} page detected`);
    // Basic fade in for all other pages
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  }

  initTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
      new Typewriter(typewriterElement, {
        texts: ['Student', 'Software Developer', 'Web Developer', 'Creative'],
        typeSpeed: 80,
        deleteSpeed: 80,
        pauseTime: 2250
      });
    }
  }

  initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
      let slideIndex = 1;
      const dots = document.querySelectorAll('.dot');

      function showSlide(n) {
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[slideIndex - 1].classList.add('active');
        if (dots[slideIndex - 1]) {
          dots[slideIndex - 1].classList.add('active');
        }
      }

      function changeSlide(n) {
        slideIndex += n;
        showSlide(slideIndex);
      }

      function currentSlide(n) {
        slideIndex = n;
        showSlide(slideIndex);
      }

      window.changeSlide = changeSlide;
      window.currentSlide = currentSlide;

      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') changeSlide(-1);
        if (e.key === 'ArrowRight') changeSlide(1);
      });

      showSlide(slideIndex);
    }
  }

  convertAllText() {
    console.log("Starting auto-conversion on page load...");

    const sentences = document.querySelectorAll('[data-convert="true"]');

    sentences.forEach((element, sentenceIndex) => {
      const originalText = element.textContent.trim();
      console.log(`Converting sentence ${sentenceIndex + 1}: "${originalText}"`);

      element.innerHTML = '';
      let isItalic = false;

      originalText.split('').forEach((char, charIndex) => {
        if (char === '|') {
          const br = document.createElement('br');
          element.appendChild(br);
          return;
        }

        if (char === '*') {
          isItalic = !isItalic;
          return;
        }

        const span = document.createElement('span');

        if (char === ' ') {
          span.className = 'char space';
          span.textContent = ' ';
        } else {
          const fonts = ['font-spartan', 'font-playfair', 'font-mono'];
          span.className = fonts[charIndex % fonts.length];
          span.textContent = char;

          const rotation = (Math.random() - 0.5) * 6;
          const translateY = (Math.random() - 0.5) * 8;
          const scale = 0.95 + Math.random() * 0.1;

          span.style.transform = `rotate(${rotation}deg) translateY(${translateY}px) scale(${scale})`;
        }

        if (isItalic) {
          span.style.fontStyle = 'italic';
        }

        element.appendChild(span);
      });

      console.log(`Sentence ${sentenceIndex + 1} converted successfully`);
    });

    console.log("All sentences converted!");
  }
}

// Function to check if we're on the animation page
function isAnimationPage() {
  return window.location.pathname.includes('animation') ||
    document.querySelector('.animation-container') !== null;
}

// Function to force unlock scroll (for safety)
function forceUnlockScroll() {
  // Remove event listeners if they exist
  if (window.invisibleScrollLock && window.invisibleScrollLock.locked) {
    window.invisibleScrollLock.unlock();
  }

  // Force remove any scroll locks
  document.documentElement.classList.remove('scroll-locked');
  document.body.classList.remove('scroll-locked', 'hide-scrollbar');
  document.body.style.top = '';
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';

  // Restore scroll position if it was saved
  if (window.originalScrollPosition) {
    window.scrollTo(0, window.originalScrollPosition);
  }
}

// Main Portfolio Controller
class PortfolioController {
  constructor() {
    this.init();
  }

  init() {
    // Initialize scroll lock first
    window.invisibleScrollLock = new InvisibleScrollLock();

    // Initialize all other controllers
    this.hamburgerMenu = new HamburgerMenu();
    this.navigationController = new NavigationController();
    this.logoController = new LogoController();
    this.pageController = new PageController();

    console.log('Portfolio initialized successfully!');
  }
}

// ===== SCROLL LOCK INITIALIZATION =====
// Always unlock scroll when page loads (safety measure)
document.addEventListener('DOMContentLoaded', function () {
  // First, always unlock scroll
  forceUnlockScroll();

  // Only lock scroll if we're on the animation page
  if (isAnimationPage()) {
    // Small delay to ensure page is ready
    setTimeout(() => {
      if (window.invisibleScrollLock) {
        window.invisibleScrollLock.lock();

        // Unlock after animation completes
        setTimeout(() => {
          window.invisibleScrollLock.unlock();
        }, 15000); // Adjust timing as needed
      }
    }, 100);
  }
});

// Always unlock scroll when leaving the page
window.addEventListener('beforeunload', function () {
  forceUnlockScroll();
});

// Also unlock when page becomes hidden (tab switching, etc.)
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    forceUnlockScroll();
  }
});

// Unlock scroll when clicking navigation links
document.addEventListener('click', function (e) {
  const link = e.target.closest('a[href]');
  if (link && !link.href.includes('animation')) {
    forceUnlockScroll();
  }
});

// ===== INITIALIZE EVERYTHING =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing portfolio...');
  new PortfolioController();
});

// Also initialize immediately in case DOMContentLoaded already fired
console.log('Script.js loaded');
if (document.readyState === 'loading') {
  console.log('Document still loading, waiting for DOMContentLoaded');
} else {
  console.log('Document already loaded, initializing immediately');
  new PortfolioController();
}
