const request = "https://students.netoservices.ru/nestjs-backend/poll";
const xhr = new XMLHttpRequest();
const polpoll__title = document.querySelector("#poll__title");
const poll__answers = document.querySelector("#poll__answers");

xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === xhr.DONE) {
        const get = JSON.parse(xhr.response);
        const title = get.data.title;
        polpoll__title.insertAdjacentHTML("beforebegin", title);
        let buttons = get.data.answers.map(
            (el) => `<button class="poll__answer">
        ${el}
      </button>`
        );

        buttons = buttons.join("");
        poll__answers.insertAdjacentHTML("beforebegin", buttons);

        const buttonsElements = document.querySelectorAll(".poll__answer");

        buttonsElements.forEach((element) => {
            element.addEventListener("click", () => {
                alert("Ваш голос засчитан");
            });
        });
    }
});

xhr.open("GET", request);
xhr.send();
