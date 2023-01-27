let countClick = document.getElementById("clicker__counter");
let cookieClick = document.querySelector(".clicker__cookie");
let countTimer = document.getElementById("clicker__timer");


function countClickFunc() {
    let evenOdd = countClick.innerHTML++;
    let cookieSize = document.getElementById("cookie");

    if (evenOdd % 2 === 0) {
        cookieSize.width = 250;
    }
    if (!(evenOdd % 2 === 0)) {
        cookieSize.width = 200;
    }
};


cookieClick.addEventListener("click", countClickFunc);
