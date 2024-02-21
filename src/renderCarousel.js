
export default function renderCarousel(images, main) {
    let mainSrc = "";

    let leftInner, rightInner;
    leftInner = main - 1;
    if (leftInner === -1) {
        leftInner = images.length - 1;
    };

    rightInner = main + 1;
    if (rightInner > images.length - 1) {
        rightInner = 0;
    }
    for (let i=0; i<=images.length; i++) {
        if (i === leftInner) {
            leftInner = images[i];
        } else if (i === main) {
            mainSrc = images[i];

        } else if (i === rightInner) {
            rightInner = images[i];
        }
    }
    renderPics( leftInner, mainSrc, rightInner);
    function renderPics(leftInner, mainSrc, rightInner) {
        document.getElementById('leftInnerImage').src = leftInner;
        document.getElementById('leftInnerImage').setAttribute('class', 'carouselPics')
        document.getElementById('centerImage').src = mainSrc;
        document.getElementById('centerImage').setAttribute('class', 'mainCarousel')
        document.getElementById('rightInnerImage').src = rightInner;
        document.getElementById('rightInnerImage').setAttribute('class', 'carouselPics')
    }

    return main;
}