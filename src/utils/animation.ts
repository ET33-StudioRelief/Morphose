import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animateCercle() {
  const circles = document.querySelectorAll<HTMLElement>('.animation_cercle.is-end');
  const trigger = document.querySelector('.objectif_content');

  if (!trigger) return;

  gsap.fromTo(
    circles,
    {
      width: '0rem',
      height: '0rem',
      borderRadius: '50%',
      transformOrigin: 'center',
    },
    {
      width: '56rem',
      height: '56rem',
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
