

const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const sliderArrows = Array.from(document.querySelectorAll('.slider__arrow'));

sliderArrows.forEach((element) => {
    element.onclick = () => {
        let currentIndex = sliderItem.findIndex(item => (item.classList.contains('slider__item_active')))

        sliderItem[currentIndex].classList.remove('slider__item_active')
        if (element.classList.contains('slider__arrow_next')) {
            (currentIndex < (sliderItem.length - 1)) ? currentIndex++ : currentIndex = 0;
        }

        if (element.classList.contains('slider__arrow_prev')) {
            (currentIndex <= 0) ? currentIndex = (sliderItem.length - 1) : currentIndex--;
        }
        sliderItem[currentIndex].classList.add('slider__item_active')
    }
})

