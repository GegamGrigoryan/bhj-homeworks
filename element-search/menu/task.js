const menuLink = [...document.getElementsByClassName('menu__link')]

menuLink.forEach(item => {
    item.onclick = (event) => {
        let parent = Array.from(item.parentElement.getElementsByClassName('menu_sub'))
        if (parent.length == 1) {
            event.preventDefault();
            parent.forEach(item => {
                item.classList.toggle('menu_active');
            })
        }
    }
})
