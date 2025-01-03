import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animateCercle() {
  const circles = document.querySelectorAll<HTMLElement>('.animation_cercle.is-end');
  const trigger = document.querySelector('.objectif_content');

  if (!trigger) return;

  // Fonction pour obtenir les dimensions finales selon la taille d'écran
  const getFinalDimensions = () => {
    if (window.innerWidth <= 480) {
      return {
        width: '100%',
        height: '20rem',
      };
    }
    return {
      width: '56rem',
      height: '56rem',
    };
  };

  // Fonction pour créer l'animation
  const createAnimation = () => {
    // Kill toute animation existante
    ScrollTrigger.getAll()
      .filter((st) => st.vars.trigger === '.objectif_content')
      .forEach((st) => st.kill());

    const finalDimensions = getFinalDimensions();

    gsap.fromTo(
      circles,
      {
        width: '0rem',
        height: '0rem',
        borderRadius: '50%',
        transformOrigin: 'center',
      },
      {
        width: finalDimensions.width,
        height: finalDimensions.height,
        borderRadius: '50%',
        duration: 4,
        ease: 'power1.out',
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
        scrollTrigger: {
          trigger: '.objectif_content',
          start: 'top center',
          // markers: true,
        },
      }
    );
  };

  // Création initiale de l'animation
  createAnimation();

  // Mise à jour de l'animation lors du redimensionnement
  window.addEventListener('resize', () => {
    createAnimation();
  });
}

/*export function glitchEffect() {
  const elements = document.querySelectorAll('.hero_logo-wrapper');

  elements.forEach((element) => {
    // Effet principal - saccadé et aléatoire
    gsap.to(element, {
      duration: 0.2, // Plus rapide
      skewX: 0,
      x: 0,
      opacity: 1,
      ease: 'none',
      repeat: -1,
      repeatDelay: gsap.utils.random(0.5, 1), // Délais plus courts
      onRepeat: () => {
        gsap.to(element, {
          duration: 0.1, // Plus rapide
          skewX: gsap.utils.random(-8, 8), // Plus prononcé
          x: gsap.utils.random(-6, 6), // Plus prononcé
          opacity: gsap.utils.random(0.85, 1), // Plus prononcé
          ease: 'none',
        });
      },
    });

    // Glitch plus fort et aléatoire
    gsap.to(element, {
      duration: 0.15, // Plus rapide
      skewX: gsap.utils.random(-25, 25), // Plus prononcé
      x: gsap.utils.random(-12, 12), // Plus prononcé
      opacity: gsap.utils.random(0.75, 1), // Plus prononcé
      ease: 'none',
      repeat: -1,
      repeatDelay: gsap.utils.random(3, 5), // Intervalle plus court
      onRepeat: () => {
        // Retour rapide à l'état normal
        gsap.to(element, {
          duration: 0.08, // Plus rapide
          skewX: 0,
          x: 0,
          opacity: 1,
          ease: 'none',
        });
      },
    });
  });
}*/

export function contributorsHoverEffect() {
  const cards = document.querySelectorAll<HTMLElement>('.contributors_card');

  cards.forEach((card) => {
    const arrow = card.querySelector<HTMLElement>('.contributors_arrow');
    const wrapper = card.closest<HTMLElement>('.bg_card-wrapper');
    if (!arrow || !wrapper) return;

    // État initial
    gsap.set(arrow, {
      opacity: 0,
      visibility: 'hidden', // On utilise visibility au lieu de display
    });

    // Au hover
    card.addEventListener('mouseenter', () => {
      // Animation de la flèche
      gsap.to(arrow, {
        opacity: 1,
        visibility: 'visible',
        duration: 0.4,
        ease: 'power2.out',
      });

      // Animation du wrapper
      gsap.to(wrapper, {
        y: -10,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    // À la sortie du hover
    card.addEventListener('mouseleave', () => {
      // Animation de la flèche
      gsap.to(arrow, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(arrow, { visibility: 'hidden' });
        },
      });

      // Animation du wrapper
      gsap.to(wrapper, {
        y: 0,
        duration: 0.4,
        ease: 'power2.inOut',
      });
    });
  });
}

export function footerParallaxEffect() {
  const footer = document.querySelector<HTMLElement>('.footer');
  const backgroundImg = document.querySelector<HTMLElement>('.news_background-img');

  if (!footer || !backgroundImg) {
    return;
  }

  // État initial
  gsap.set(backgroundImg, {
    scale: 1,
  });

  footer.addEventListener('mousemove', (e) => {
    // Calculer la position relative de la souris dans le footer
    const rect = footer.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;

    // Calculer le déplacement
    const moveX = (mouseX - 0.5) * 100;
    const moveY = (mouseY - 0.5) * 100;

    // Animer l'image de fond
    gsap.to(backgroundImg, {
      x: moveX,
      y: moveY,
      duration: 1,
      ease: 'power2.out',
    });
  });

  // Réinitialiser la position
  footer.addEventListener('mouseleave', () => {
    gsap.to(backgroundImg, {
      x: 0,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    });
  });
}

export function scaleDownLogoNav() {
  const logoWrapper = document.querySelector<HTMLElement>('.navbar_logo-wrapper');
  if (!logoWrapper) return;

  // Animation au hover
  logoWrapper.addEventListener('mouseenter', () => {
    gsap.to(logoWrapper, {
      scale: 0.8,
      duration: 0.3,
      ease: 'linear',
    });
  });

  // Animation à la sortie du hover
  logoWrapper.addEventListener('mouseleave', () => {
    gsap.to(logoWrapper, {
      scale: 1,
      duration: 0.3,
      ease: 'linear',
    });
  });
}

export const initSocialButtonsHover = (): void => {
  const buttons = document.querySelectorAll('.twiter-btn');

  if (!buttons.length) return;

  buttons.forEach((button) => {
    // Animation au hover
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    // Retour à l'état initial
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });
};

export const initH2Animations = (): void => {
  // Vérifier si gsap et ScrollTrigger sont disponibles
  if (!gsap || !ScrollTrigger) return;

  // All h2 in heading_content
  const h2Elements = document.querySelectorAll('.heading_content h2');

  if (!h2Elements.length) return;

  // Configuration initiale
  gsap.set(h2Elements, {
    opacity: 0,
    x: -50,
  });

  // Créer une animation pour chaque h2
  h2Elements.forEach((h2) => {
    ScrollTrigger.create({
      trigger: h2,
      start: 'top bottom-=100', // Démarre quand le haut de h2 atteint 100px avant le bas du viewport
      end: 'bottom top', // Termine quand le bas de h2 atteint le haut du viewport
      once: true, // L'animation ne se joue qu'une fois

      onEnter: () => {
        gsap.to(h2, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
        });
      },
    });
  });
};

export const initAlgo2ImgScale = (): void => {
  if (!gsap || !ScrollTrigger) return;

  // Vérification de la largeur d'écran
  const checkScreenSize = () => {
    const section = document.querySelector('.section_algo2');
    const imgWrapper = document.querySelector('.algo2_img-wrapper');

    if (!section || !imgWrapper) return;

    // Kill toutes les instances de ScrollTrigger existantes
    ScrollTrigger.getAll()
      .filter((st) => st.vars.trigger === section)
      .forEach((st) => st.kill());

    // Si l'écran est plus petit que 992px
    if (window.innerWidth < 992) {
      // Reset l'élément à son état normal
      gsap.set(imgWrapper, {
        scale: 1,
        clearProps: 'all',
      });
    } else {
      // Configuration pour grands écrans (≥992px)
      gsap.set(imgWrapper, {
        scale: 0.8,
        transformOrigin: 'center center',
      });

      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        animation: gsap.to(imgWrapper, {
          scale: 1,
          duration: 1,
          ease: 'none',
        }),
      });
    }
  };

  // Vérification initiale
  checkScreenSize();

  // Vérification à chaque redimensionnement
  window.addEventListener('resize', () => {
    checkScreenSize();
  });
};
