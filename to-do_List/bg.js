const body = document.querySelector("body");

const IMG_NUMBER = 6;


function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/i${imgNumber+1}.jpg`;
    body.prepend(image);
    // HTML body 태그 안에 이걸 생성하는것.
    image.classList.add('bgImage');
    // image에 클래스 추가
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();