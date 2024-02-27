import addArrowSymbols from './addArrowSymbols';
import { startInterval, stopInterval } from './autoSlide';
import renderCarousel from './renderCarousel';
import ImageIcon from './symbols/Circle-icons-image.svg';


export default function renderNavigation(images, main, interval) {
    let navigationContainer = document.getElementById('navigationContainer');
    navigationContainer.innerHTML = "";
    // Put a border around the current image
    for (let i = 0; i < images.length; i++) {
        let imageDot = document.createElement('img');
        imageDot.src = ImageIcon;
        imageDot.classList.add('navigationIcon');
        if (i === main) {
            imageDot.classList.add('active');
            navigationContainer.appendChild(imageDot);
        }
        // Change to that image on click
        imageDot.addEventListener('click', () => {
            stopInterval(interval);
            let isStartup = false;
            main = i;
            renderCarousel(images, main, isStartup);
            interval = startInterval(images, main);
            renderNavigation(images, main, interval);
            addArrowSymbols(images, main, interval);
        })
        navigationContainer.appendChild(imageDot);
    }

}