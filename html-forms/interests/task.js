
const interests = document.querySelector('.interests');

interests.addEventListener('change', event => {
    const target = event.target.closest('.interest');
    const childrens = target.querySelectorAll('.interests');
    const parents = target.querySelector('.interest__check');

    childrens.forEach(el => {
        const checkBoxes = el.querySelectorAll('.interest__check');
        checkBoxes.forEach(element => {
            if (parents.checked) {
                element.checked = true;
            } else {
                element.checked = false;
            }
        });
    });
});

