
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const buttonsBlock = document.querySelector('.section-buttons');
const line = document.querySelector('.our-project__center-block');
const projectElements = document.querySelectorAll('.our-project__element');

const buttons = document.querySelector('#second-buttons');
const items = document.querySelectorAll('.middle-content');
const images = [
    'img/rent-img.png',
    'img/item-1.png',
    'img/item-2.png'
];

const oneImage = document.querySelector('.right-content__middle-img');

let currentStep = 0;
let currentLinePosition = 0;
let currentSlide = 0;

buttonsBlock.addEventListener('click', (event) => {
    let target = event.target.id;

    if(currentLinePosition < projectElements.length - 2 && target == 'next') {
        currentStep -= 570;
        currentLinePosition++;
    } 

    if(currentLinePosition > 0 && target == 'prev') {
        currentStep += 570;
        currentLinePosition--;
    }
    line.style.left = currentStep + 'px';
});

buttons.addEventListener('click', (event) => {
    let target = event.target.id;

    if(target == 'prev-button' && currentSlide > 0) {
        currentSlide--;
    }

    if(target == 'next-button' && currentSlide < images.length - 1) {
        currentSlide++;
    }
    oneImage.src = images[currentSlide];
    items[currentSlide].classList.add('active');

    items.forEach((currentElement, currentElementIndex) => {
        if(currentElementIndex != currentSlide && currentElement.classList.contains('active')) {
            currentElement.classList.remove('active');
        }
    });
});