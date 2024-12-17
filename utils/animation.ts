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
      width: '80rem',
      height: '80rem',
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

export function glitchEffect() {
  const logo = document.querySelector<HTMLElement>('.hero_logo-wrapper');
  if (!logo) return;

  const glitchTimeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.5, // Un peu plus de délai entre les séries
  });

  glitchTimeline
    // Premier glitch léger
    .to(logo, {
      duration: 0.02,
      x: 3,
      y: 2,
      skewX: 5,
      skewY: 3,
      opacity: 0.9,
      filter: 'brightness(1.2) contrast(1.2)',
      ease: 'none',
    })
    // Deuxième glitch
    .to(logo, {
      duration: 0.01,
      x: -4,
      y: -2,
      skewX: -3,
      skewY: -2,
      opacity: 0.95,
      filter: 'brightness(1.1) contrast(1.1)',
      ease: 'none',
    })
    // Troisième glitch
    .to(logo, {
      duration: 0.02,
      x: 2,
      y: -1,
      skewX: 4,
      skewY: -3,
      scale: 1.02,
      opacity: 0.95,
      filter: 'brightness(1.3)',
      ease: 'none',
    })
    // Retour à la normale
    .to(logo, {
      duration: 0.01,
      x: 0,
      y: 0,
      skewX: 0,
      skewY: 0,
      scale: 1,
      opacity: 1,
      filter: 'none',
      ease: 'none',
    });
}
