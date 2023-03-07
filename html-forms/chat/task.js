const widget = [...document.getElementsByClassName("chat-widget")];
const textInput = [...document.getElementsByClassName("chat-widget__input")];
const messages = document.querySelector(".chat-widget__messages");

const messagesRobot = [
  ["Добрый день, преподаватель "],
  ["Как вам мой код?Подход верный?"],
  ["Спасибо"],
  ["Хорошего дня"],
];

widget.forEach((el) => {
  el.onclick = () => {
    el.classList.add("chat-widget_active");
  };
});

function time() {
  return new Date(Date.now()).toTimeString().slice(0, 5);
}

textInput.forEach((el) => {
  let countMsg = 0;

  el.addEventListener("keydown", (event) => {
    let textClient = event.target.value;
    let textArray = [...textClient];

    if (event.keyCode === 32) {
      event.preventDefault()
    }
    if (
      event.keyCode === 13 &&
      !(textClient == "") &&
      !(textArray.length <= 0)

    ) {
      messages.innerHTML += `
            <div class="message message_client">
              <div class="message__time">${time()}</div>
              <div class="message__text">
                ${textClient}
              </div>
            </div>
          `;
      event.target.value = "";
      countMsg++;
    }
    if (
      countMsg != 0 &&
      event.keyCode === 13 &&
      !(textClient == "") &&
      !(textArray.length <= 0)
    ) {
      setTimeout(() => {
        messages.innerHTML += `
            <div class="message">
              <div class="message__time">${time()}</div>
              <div class="message__text">
                ${messagesRobot[countMsg - 1]}
              </div>
            </div>
          `;
      }, 1000);
    }
  });
});
