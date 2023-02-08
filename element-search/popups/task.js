
function popUp() {
    const popup = document.getElementById('modal_main');
    const close = document.getElementsByClassName('modal__close');
    const btn = document.getElementsByClassName('show-success');
    const btnSuc = document.getElementsByClassName('btn_success');

    popup.classList.add('modal_active');

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            popup.classList.remove('modal_active');
        }
    }

    btn[0].onclick = function () {
        btn[0].innerHTML = btnSuc[0].textContent
        btn[0].classList.replace('btn_danger', 'btn_success')
        // btn[0].innerHTML = btn[0].innerHTML.replace('Сделать хорошо', 'Хорошо сделано!')
        // понял , что  это не самое оптимальное решение =)

    }
}
popUp()