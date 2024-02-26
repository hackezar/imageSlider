
export default function renderCarousel(images, main, isStartup) {
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
    if (isStartup === true){
        renderPics(leftInner, mainSrc, rightInner);
    } else if (isStartup === false) {
        updatePics(leftInner, mainSrc, rightInner);
    }

    function updatePics(leftInner, mainSrc, rightInner) {
        let leftImg = document.getElementById('leftInnerImage');
        leftImg.classList.add('fadeIn')
        let centerImg = document.getElementById('centerImage');
        centerImg.classList.add('fadeIn');
        let rightImg = document.getElementById('rightInnerImage');
        rightImg.classList.add('fadeIn');
        centerImg.src = mainSrc;
        leftImg.src = leftInner;
        rightImg.src = rightInner;

        // toggle off fade in after animation end
        leftImg.addEventListener('animationend', () => {
            document.getElementById('leftInnerImage').classList.remove('fadeIn');
        });
        centerImg.addEventListener('animationend', () => {
            document.getElementById('centerImage').classList.remove('fadeIn');
        });
        rightImg.addEventListener('animationend', () => {
            document.getElementById('rightInnerImage').classList.remove('fadeIn');
        });
    }

    function renderPics(leftInner, mainSrc, rightInner) {
        let leftImg = document.createElement('img');
        leftImg.src = leftInner;
        leftImg.setAttribute('id', 'leftInnerImage');
        leftImg.setAttribute('class', 'carouselPics');

        let centerImg = document.createElement('img');
        centerImg.setAttribute('id', 'centerImage');
        centerImg.src = mainSrc;

        let rightImg = document.createElement('img');
        rightImg.src = rightInner;
        rightImg.setAttribute('class', 'carouselPics');
        rightImg.setAttribute('id', 'rightInnerImage');

    
        document.getElementById('centerDiv').appendChild(centerImg);
        document.getElementById('rightInner').appendChild(rightImg);
        document.getElementById('leftInner').appendChild(leftImg);
    }
    

    return main;
}

