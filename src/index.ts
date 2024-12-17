import './index.css';

import { animateCercle, contributorsHoverEffect, footerParallaxEffect } from '$utils/animation';

contributorsHoverEffect();
footerParallaxEffect();

if (window.location.pathname === '/') {
  animateCercle();
}
