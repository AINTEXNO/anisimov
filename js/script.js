
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const buttonsBlock = document.querySelector('.section-buttons');
const line = document.querySelector('.our-project__center-block');
const projectElements = document.querySelectorAll('.our-project__element');

let currentStep = 0;
let currentLinePosition = 0;

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