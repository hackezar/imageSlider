import ArrowLeft from './symbols/left.svg';
import ArrowRight from './symbols/right.svg';

import renderCarousel from './renderCarousel';

export default function addArrowSymbols(images, main) {
    let arrowLeft = document.createElement('img');
    arrowLeft.setAttribute('class', 'arrow');
    arrowLeft.src = ArrowLeft;
    arrowLeft.addEventListener('click', () => {
        main = main - 1;
        if (main < 0) {
            main = images.length - 1;
        };
        renderCarousel(images, main);
    });
    document.getElementById('leftArrow').appendChild(arrowLeft);

    let arrowRight = document.createElement('img');
    arrowRight.setAttribute('class', 'arrow');
    arrowRight.src = ArrowRight;

    document.getElementById('rightArrow').appendChild(arrowRight);

    return main;
}