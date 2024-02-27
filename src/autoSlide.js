import addArrowSymbols from "./addArrowSymbols";
import renderNavigation from "./navigationDots";
import renderCarousel from "./renderCarousel";

export function startInterval(images, main) {
    let interval = setInterval(function() {
        main = main + 1;
        if (main > images.length - 1) {
            main = 0;
        }
        let isStartup = false;
        renderCarousel(images, main, isStartup);
        addArrowSymbols(images, main, interval);
        renderNavigation(images, main, interval);
        console.log('next slide');
    }, 7000);
    return interval;
}

export function stopInterval(interval) {
    clearInterval(interval);
}