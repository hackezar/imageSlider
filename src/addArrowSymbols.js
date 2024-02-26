import ArrowLeft from './symbols/left.svg';
import ArrowRight from './symbols/right.svg';

import renderCarousel from './renderCarousel';
import renderNavigation from './navigationDots';

export default function addArrowSymbols(images, main) {
    let arrowLeft = document.createElement('img');
    arrowLeft.setAttribute('class', 'arrow');
    arrowLeft.setAttribute('id', 'leftArrowImg')
    arrowLeft.src = ArrowLeft;
    arrowLeft.addEventListener('click', () => {
        main = main - 1;
        if (main < 0) {
            main = images.length - 1;
        };
        let isStartup = false;
        renderCarousel(images, main, isStartup);
        renderNavigation(images, main);
    });
    document.getElementById('leftArrow').appendChild(arrowLeft);

    let arrowRight = document.createElement('img');
    arrowRight.setAttribute('class', 'arrow');
    arrowRight.setAttribute('id', 'rightArrowImg')
    arrowRight.src = ArrowRight;
    arrowRight.addEventListener('click', () => {
        main = main + 1;
        if (main > images.length -1) {
            main = 0;
        };
        let isStartup = false;
        renderCarousel(images, main, isStartup);
        renderNavigation(images, main);
    });
    document.getElementById('rightArrow').appendChild(arrowRight);

    return main;
}
