function countWrp(time) {
    let countDownTimer = document.getElementById("timer");

    function countDownFunc() {
        let hh = Math.floor(time / (1000 * 60 * 60) % 24);
        let mm = Math.floor((time / 60) % 60);
        let ss = time % 60;

        mm = mm < 10 ? "0" + mm : mm;
        hh = hh < 10 ? "0" + hh : hh;
        ss = ss < 10 ? "0" + ss : ss;

        countDownTimer.innerHTML = `${hh} :${mm}: ${ss}`
        time--;

        if (hh == 0 && ss == 0 && mm == 0) {
            alert("Вы подебили в конкурсе")
            window.location.assign('https://www.meme-arsenal.com/memes/89d7fffd58962febe492ffe982fd86c2.jpg')
        }
    }
    setInterval(countDownFunc, 1000)
}
countWrp(100000)
