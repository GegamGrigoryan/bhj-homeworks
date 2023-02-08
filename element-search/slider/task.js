

const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const sliderArrows = Array.from(document.querySelectorAll('.slider__arrow'));
let currentIndex = 0;

function swith(index) {
    sliderItem.forEach(item => item.classList.remove('slider__item_active'));
    sliderItem[index].classList.add('slider__item_active')
}

sliderArrows.forEach((element, index) => {
    currentIndex = index;
    if (element.classList.contains('slider__arrow_next')) {
        element.onclick = () => {
            if (currentIndex == sliderItem.length - 1) {
                currentIndex = 0;
            } else {
                currentIndex++;
                swith(currentIndex)
            }


        }
    }
    if (element.classList.contains('slider__arrow_prev')) {
        element.onclick = () => {
            if (currentIndex == sliderItem.length - 1) {
                currentIndex = 0;
            } else {
                currentIndex++;
                swith(currentIndex)
            }
        }
    }
})



// sliderArrows.forEach(element => element.onclick = () => {
//     if(element.classList.contains('slider__arrow_next')) {
//         if(currentIndex == sliderItem.length - 1) {
//             currentIndex = 0;
//         } else {
//             currentIndex++;
//         }
//     }
//     if (element.classList.contains('slider__arrow_prev')) {
//         if(currentIndex == 0) {
//             currentIndex = sliderItem.length - 1;
//         } else {
//             currentIndex--;
//         }
//     }
//     swith(currentIndex)
// })