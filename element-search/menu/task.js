let subMenu = document.querySelectorAll('.menu_sub');
let arrSub = [...subMenu];

arrSub.forEach(function (arrSub) {
    arrSub.closest('li').onclick = function () {
        closseMenu()
        if (subMenu.classList != 'menu_active') {
            return (arrSub.classList.toggle('menu_active')), false;
        }
    }
})
function closseMenu() {
    arrSub.forEach(item => item.classList.remove('menu_active'));
}