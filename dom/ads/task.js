
const rotator = [...document.querySelectorAll('.rotator__case')]

setInterval(() => {
    const index = rotator.findIndex(p => p.classList.contains('rotator__case_active'));
    const nextElement = rotator[index].nextElementSibling;
    const currentElement = rotator[index];
    const firstElement = rotator[index].parentNode.firstElementChild;

    nextElement == null ?
        firstElement.classList.add('rotator__case_active') :
        nextElement.classList.add('rotator__case_active');

    currentElement.classList.remove('rotator__case_active')

}, 1000)
