const tab = [...document.querySelectorAll('.tab')];
const tabContent = [...document.querySelectorAll('.tab__content')];




tab.forEach(element => {
    element.addEventListener('click', clickFn);

    function clickFn(event) {
        let eventTarget = event.target;
        let i = tab.indexOf(eventTarget);

        tab.forEach(el => el.classList.remove('tab_active'))
        tabContent.forEach(element => element.classList.remove('tab__content_active'))
        eventTarget.classList.add('tab_active')
        tabContent[i].classList.add('tab__content_active');
    };
});