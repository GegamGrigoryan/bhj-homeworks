let countClick = document.getElementById("clicker__counter");
let cookieClick = document.querySelector(".clicker__cookie");
let countTimer = document.getElementById("clicker__timer");


function countClickFunc() {
    let cookieSize = document.getElementById("cookie");
    cookieSize.width = ++countClick.textContent % 2 ? 250 : 200;
};


cookieClick.addEventListener("click", countClickFunc);
