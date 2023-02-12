const dropdownValue = [...document.getElementsByClassName('dropdown__value')];
const dropList = [...document.querySelectorAll('.dropdown__list ')];
const dropItem = [...document.querySelectorAll('.dropdown__item')]


dropdownValue.forEach(el => el.addEventListener('click', dropValFunck));
dropItem.forEach(el => el.addEventListener('click', dropItFunck));

function dropValFunck() {
    dropList.forEach(el => el.classList.add('dropdown__list_active'));
}

function dropItFunck(event) {
    let result = dropdownValue[0].textContent = event.currentTarget.textContent;
    dropList.forEach(el => el.classList.remove('dropdown__list_active'));
    event.preventDefault(result);
}


