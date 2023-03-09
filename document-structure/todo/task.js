const textInput = [...document.querySelectorAll(".tasks__input")];
const tasks = [...document.querySelectorAll(".tasks__list")];
const taskAdd = document.querySelector(".tasks__add");



function removeTask() {
    const removeTasks = [...document.querySelectorAll(".task__remove")];
    removeTasks.forEach((el) => {
        el.addEventListener("click", (event) => {
            el.closest(".task").remove();
        });
    });
}

function task() {
    textInput.forEach((el) => {
        el.addEventListener("keydown", (event) => {
            let textInput = event.target.value;
            let textArray = [textInput];

            // if (event.keyCode === 32) {
            //     event.stopPropagation()
            // }
            if (
                event.keyCode === 13 &&
                !(textInput == "") &&
                !(textArray.length <= 0)
            ) {
                tasks[0].innerHTML += `
            <div class="task">
            <div class="task__title">
              ${textInput} 
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>
                `;
                event.target.value = "";
                removeTask();
            }
            return
        });
    });

}
task()