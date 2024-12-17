import './index.css';

import {
  animateCercle,
  contributorsHoverEffect,
  footerParallaxEffect,
  glitchEffect,
} from '$utils/animation';

contributorsHoverEffect();
footerParallaxEffect();

if (window.location.pathname === '/') {
  animateCercle();
  glitchEffect();
}
