import ArrowLeft from './symbols/left.svg';
import ArrowRight from './symbols/right.svg';

import renderCarousel from './renderCarousel';
import renderNavigation from './navigationDots';
import {startInterval, stopInterval} from './autoSlide';


export default function addArrowSymbols(images, main, interval) {
    console.log(interval);
    document.getElementById('leftArrow').innerHTML = "";
    let arrowLeft = document.createElement('img');
    arrowLeft.setAttribute('class', 'arrow');
    arrowLeft.setAttribute('id', 'leftArrowImg')
    arrowLeft.src = ArrowLeft;
    arrowLeft.addEventListener('click', () => {
        // Stops the auto slide feature
        stopInterval(interval);
        main = main - 1;
        if (main < 0) {
            main = images.length - 1;
        };
        let isStartup = false;
        renderCarousel(images, main, isStartup);
        interval = startInterval(images, main);
        renderNavigation(images, main, interval);
        addArrowSymbols(images, main, interval);
    });
    document.getElementById('leftArrow').appendChild(arrowLeft);

    document.getElementById('rightArrow').innerHTML = "";
    let arrowRight = document.createElement('img');
    arrowRight.setAttribute('class', 'arrow');
    arrowRight.setAttribute('id', 'rightArrowImg')
    arrowRight.src = ArrowRight;
    arrowRight.addEventListener('click', () => {
        // Stops auto slide feature
        stopInterval(interval);
        main = main + 1;
        if (main > images.length -1) {
            main = 0;
        };
        let isStartup = false;
        renderCarousel(images, main, isStartup);
        interval = startInterval(images, main);
        renderNavigation(images, main, interval);
        addArrowSymbols(images, main, interval);
    });
    document.getElementById('rightArrow').appendChild(arrowRight);
    return main;
}
