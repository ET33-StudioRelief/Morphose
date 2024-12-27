import './index.css';

import {
  animateCercle,
  contributorsHoverEffect,
  footerParallaxEffect,
  initAlgo2ImgScale,
  initH2Animations,
  initScrollUpHover,
  initSocialButtonsHover,
} from '$utils/animation';

contributorsHoverEffect();
footerParallaxEffect();
initScrollUpHover();
initSocialButtonsHover();
initH2Animations();
initAlgo2ImgScale();

if (window.location.pathname === '/') {
  animateCercle();
}
