import './index.css';

import {
  animateCercle,
  contributorsHoverEffect,
  footerParallaxEffect,
  initAlgo2ImgScale,
  initH2Animations,
  initSocialButtonsHover,
  scaleDownLogoNav,
} from '$utils/animation';

contributorsHoverEffect();
footerParallaxEffect();
scaleDownLogoNav();
initSocialButtonsHover();
initH2Animations();
initAlgo2ImgScale();

if (window.location.pathname === '/') {
  animateCercle();
}
