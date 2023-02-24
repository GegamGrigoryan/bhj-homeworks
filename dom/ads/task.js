
const rotator = [...document.querySelectorAll('.rotator__case')]


setInterval(() => {
    const index = rotator.findIndex(p => p.classList.contains('rotator__case_active'));
    if (rotator[index].classList.contains('rotator__case_active') && index < rotator.length - 1) {
        rotator[index + 1].classList.add('rotator__case_active')
    } else {
        rotator[index].parentElement.firstElementChild.classList.add('rotator__case_active')
    }
    rotator[index].classList.remove('rotator__case_active');
}, 1000)
