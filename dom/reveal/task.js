const reveal = [...document.getElementsByClassName("reveal")];

function banner() {
    reveal.forEach(function (revealElement) {
        revealElement.getBoundingClientRect();
        setInterval(() => {
            isVisible(revealElement);
        }, 1000);
    });

    function isVisible(element) {
        const { top, bottom } = element.getBoundingClientRect();

        if (top > window.innerHeight) {
            element.classList.remove("reveal_active");
            return true;
        }
        if (bottom < 0) {
            element.classList.remove("reveal_active");
            return true;
        }
        element.classList.add("reveal_active");
        return false;
    }
}
banner(reveal);
