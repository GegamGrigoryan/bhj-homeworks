const form = document.getElementById("tasks__form");

form.addEventListener("submit", (event) => {
  const tasks = document.querySelector(".tasks__list");
  const input = document.getElementById("task__input");
  let text = input.value.trim();
  event.preventDefault();

  if (text == "null" || text == "" || text.keyCode === 32) {
    return false;
  }

  tasks.insertAdjacentHTML(
    "afterbegin",
    `  <div class="task">
           <div class="task__title">
            ${text}
            </div>
            <a href="#" class="task__remove">&times;</a>
             </div>`
  );
  tasks.addEventListener("click", (event) => {
    if (event.target.classList.contains("task__remove")) {
      event.target.closest(".task").remove();
    }
  });
  form.reset();
});
