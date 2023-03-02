const fontControl = [...document.querySelectorAll('.font-size')];
const fontSize = [...document.querySelectorAll('.book')];
const сolor = [...document.querySelectorAll('.color')];



fontControl.forEach(el => {
    el.addEventListener('click', (event) => {
        fontControl.forEach(el => {
            el.classList.remove('font-size_active')
        })
        if (event.target.dataset.size == 'small') {
            event.preventDefault();
            event.target.classList.add('font-size_active');
            fontSize.forEach(el => el.classList.add('book_fs-small'));
        }
        if (event.target.dataset.size == 'big') {
            event.preventDefault();
            event.target.classList.add('font-size_active');
            fontSize.forEach(el => el.classList.add('book_fs-big'));
        }
    })
})

сolor.forEach(el => {
    el.addEventListener('click', (event) => {
        let fontColor = event.target.dataset.textColor;
        let bgColor = event.target.dataset.bgColor;
        сolor.forEach(el => {
            el.classList.remove('color_active')
        })

        if (fontColor == "gray") {
            event.preventDefault();
            event.target.classList.add('color_active');
            fontSize.forEach(el => el.classList.add('book_color-gray'));
            fontSize.forEach(el => el.classList.remove('book_color-black'));
            fontSize.forEach(el => el.classList.remove('book_color-whitesmoke'));
        }
        if (fontColor == "black") {
            event.preventDefault();
            event.target.classList.add('color_active');
            fontSize.forEach(el => el.classList.add('book_color-black'));
            fontSize.forEach(el => el.classList.remove('book_color-whitesmoke'));
            fontSize.forEach(el => el.classList.remove('book_color-gray'));
        }

        if (fontColor == "whitesmoke") {
            event.preventDefault();
            event.target.classList.add('color_active');
            fontSize.forEach(el => el.classList.add('book_color-whitesmoke'));
            fontSize.forEach(el => el.classList.remove('book_color-black'));
            fontSize.forEach(el => el.classList.remove('book_color-gray'));
        }
        //////////////////////////////////////////////bg
        if (bgColor == "gray") {
            event.preventDefault();
            event.target.classList.add('color_active');
            fontSize.forEach(el => el.classList.add('book_bg-gray'));
            fontSize.forEach(el => el.classList.remove('book_bg-black'));
            fontSize.forEach(el => el.classList.remove('book_bg-white'));
        }
        if (bgColor == "black") {
            event.preventDefault();
            event.target.classList.add('color_active');
            fontSize.forEach(el => el.classList.add('book_bg-black'));
            fontSize.forEach(el => el.classList.remove('book_bg-white'));
            fontSize.forEach(el => el.classList.remove('book_bg-gray'));
        }
        if (bgColor == "white") {
            event.preventDefault();
            event.target.classList.add('color_active');
            fontSize.forEach(el => el.classList.add('book_bg-white'));
            fontSize.forEach(el => el.classList.remove('book_bg-black'));
            fontSize.forEach(el => el.classList.remove('book_bg-gray'));
        }
    })
})
