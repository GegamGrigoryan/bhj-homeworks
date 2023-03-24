const xhr = new XMLHttpRequest();
const https = "https://students.netoservices.ru/nestjs-backend/upload";
const progress = document.getElementById("progress");
const form = document.getElementById("form");
const input = document.querySelector("#file");
const inputText = document.querySelector(".input__wrapper-desc");

form.addEventListener("submit", (event) => {
  xhr.upload.onprogress = function (event) {
    progress.value = event.loaded;
  };
  xhr.onloadend = function () {
    if (xhr.status >= 400) {
      alert("Ошибка " + this.status);
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
