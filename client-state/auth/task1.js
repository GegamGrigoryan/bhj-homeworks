const form = document.querySelector("#signin__form");
const https = "https://students.netoservices.ru/nestjs-backend/auth";

const listener = async (event) => {
    event.preventDefault();
    const singin = document.querySelector("#signin");
    const formData = new FormData(form);

    let responce = await fetch(https, {
        method: "POST",
        body: formData,
    })
        .then((responce) => responce.json())

    if (responce.success == true) {
        let userID = responce.user_id;
        setToLocalStorage(userID);
        singin.classList.remove("signin_active");
        greeting(userID);
    } else {
        alert("Неверный логин/пароль");
    }
};
if (getFromLocalStorage()) {
    let UserID = getFromLocalStorage();
    greeting(UserID);
    document.querySelector("#signin").classList.remove("signin_active");
    form.removeEventListener("submit", listener);
} else {
    form.addEventListener("submit", listener);
}

function greeting(userID) {
    document.querySelector("#welcome").classList.add("welcome_active");
    document.querySelector("#user_id").textContent = userID;
}

function getFromLocalStorage() {
    return localStorage.getItem("UserID");
}

function setToLocalStorage(userID) {
    localStorage.setItem("UserID", userID);
}
