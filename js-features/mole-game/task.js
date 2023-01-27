
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let hole = document.querySelectorAll('.hole');

function game() {

    hole.forEach(hole => {
        hole.onclick = function () {
            if (hole.className.includes('hole_has-mole')) {
                ++dead.textContent;
                chek()
            } else {
                ++lost.textContent;
                chek()
            }
        }
    });

    function clear() {
        dead.textContent = 0;
        lost.textContent = 0;
    }

    function chek() {
        if (dead.textContent == 10) {
            alert('WIN');
            clear()
        }
        if (lost.textContent == 5) {
            alert('LOST');
            clear()
        }
    }
}
game()