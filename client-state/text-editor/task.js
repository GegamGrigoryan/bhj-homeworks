
const textarea = document.querySelector("#editor");
const clear = document.querySelector('.clear');
textarea.value = getText();


textarea.addEventListener('keydown', (event) => {
    let textClient = event.target.value;
    localStorage.setItem("textarea", textClient)
})

function getText() {
    return localStorage.getItem("textarea") || "";
}
clear.addEventListener('click', () => {
    localStorage.clear()
    textarea.value = ""
})

