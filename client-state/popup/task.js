const popUp = document.querySelector("#subscribe-modal");
const close = document.querySelector(".modal__close");

window.onload = () => {
  if (!findCookie()) {
    openModal();
    setCookie();
  }
};

function setCookie() {
  document.cookie = "isActive=true;";
}
function findCookie() {
  console.log(document.cookie);
  const el = document.cookie
    .split("; ")
    .find((el) => el.startsWith("isActive"));
  return !!el;
}
function openModal() {
  popUp.classList.add("modal_active");
}
function closeModal() {
  popUp.classList.remove("modal_active");
}
close.addEventListener("click", () => {
  closeModal();
});
