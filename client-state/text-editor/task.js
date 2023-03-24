// const textarea = [...document.getElementsByTagName('textarea')];
const textarea = document.querySelector("#editor");
const clear = document.querySelector('.clear');
// textarea.value = getText();


// textarea.addEventListener('keydown', (event) => {
//     let textClient = event.target.value;
//     localStorage.setItem("textarea", textClient)
// })

// function getText() {
//     return localStorage.getItem("textarea") || "";
// }
clear.addEventListener('click', () => {
    localStorage.clear()
    textarea.value = ""
})


class Local {
    constructor(text) {
        this.text = text;
    }
    listen() {
        console.log(this.text)
        this.text.addEventListener('keydown', (event) => {
            let textClient = event.target.value; // "hello world"
            localStorage.setItem('textarea', textClient)
        })
    }
    getText() {
        this.text = localStorage.getItem("textarea") || "";
    }
}

let get = new Local(textarea);

get.getText()
get.listen()