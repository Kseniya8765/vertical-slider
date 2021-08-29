const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const slideRight = document.querySelector('.right-slide');
const slidesLength = slideRight.querySelectorAll('div').length;
const slideLeft = document.querySelector('.left-slide');
const sliderContainer = document.querySelector('.slider-container');

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upBtn.addEventListener('click',()=>{
    changeSlide('up');
})

downBtn.addEventListener('click',()=>{
    changeSlide('down');
})

function changeSlide(dir){
    const sliderHeight = sliderContainer.clientHeight;

    if(dir === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else if(dir === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}