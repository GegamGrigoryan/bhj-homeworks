const xhr = new XMLHttpRequest();
const https = "https://students.netoservices.ru/nestjs-backend/upload";
const progress = document.getElementById("progress");
const form = document.getElementById("form");
const input = document.querySelector("#file");
const inputText = document.querySelector(".input__wrapper-desc");

form.addEventListener("submit", (event) => {
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 1) {
            progress.value = 0.25;
        }
        if (xhr.readyState == 2) {
            progress.value = 0.5;
        }
        if (xhr.readyState == 3) {
            progress.value = 0.7;
        }
        if (xhr.readyState == 4) {
            progress.value = 1;
        }
        if (xhr.status >= 400) {
            alert(`Упс.. Ошибка`);
        }
    };
    xhr.open("POST", https);
    xhr.send(input.files[0]);
    event.preventDefault();
    setInterval(() => {
        inputText.textContent = "Файл успешно загружен";
        progress.value = 0;
    }, 1000);
});
