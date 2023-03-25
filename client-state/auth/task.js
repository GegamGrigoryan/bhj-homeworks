const form = document.querySelector("#signin__form");
const https = "https://students.netoservices.ru/nestjs-backend/auth";

// document.cookie = "UserId" + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
console.log(document.cookie);

if (findCookie() == true) {
  let UserID = findCookie().split("=")[1];
  greeting(UserID)
} else {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const singin = document.querySelector("#signin");
    const formData = new FormData(form);

    let responce = await fetch(https, {
      method: "POST",
      body: formData,
    })
      .then((responce) => responce.json())
      .then((data) => data);

    console.log(responce)

    if (responce.success == true) {
      let userID = responce.user_id;
      document.cookie = `UserId=${userID};`;
      singin.classList.remove("signin_active");
      greeting(userID)
    } else {
      alert("Неверный логин/пароль");
    }
  });
}


function greeting(userID) {
  document.querySelector("#welcome").classList.add("welcome_active");
  document.querySelector("#user_id").textContent = userID;
}


function findCookie() {
  const el = document.cookie
    .split("; ")
    .find((el) => el.startsWith('UserID'));
  return el;
}


