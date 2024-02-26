import renderCarousel from './renderCarousel';
import ImageIcon from './symbols/Circle-icons-image.svg';

export default function renderNavigation(images, main) {
    let footer = document.getElementById('footer');
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
            let isStartup = false;
            main = i;
            renderCarousel(images, main, isStartup);
            renderNavigation(images, main);
        })
        navigationContainer.appendChild(imageDot);
    }
    let autoNextSlide = function () {
        main = main + 1;
        let isStartup = false;
        renderCarousel(images, main, isStartup);
        renderNavigation(images, main);
    }
    let nextSlideAfter5 = setInterval(autoNextSlide, 5000);
}