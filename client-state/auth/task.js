const form = document.querySelector("#signin__form");
const https = "https://students.netoservices.ru/nestjs-backend/auth";

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const greetingUser = document.querySelector("#welcome");
  const singin = document.querySelector("#signin");
  const formData = new FormData(form);

  let responce = await fetch(https, {
    method: "POST",
    body: formData,
  })
    .then((responce) => responce.json())
    .then((data) => data);

  if (responce.success == true) {
    singin.classList.remove("signin_active");
    greetingUser.classList.add("welcome_active");
    document.querySelector("#user_id").textContent = responce.user_id;
  } else {
    alert("Неверный логин/пароль");
  }
});
