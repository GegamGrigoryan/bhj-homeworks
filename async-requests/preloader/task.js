const xhr = new XMLHttpRequest();
const loader = document.getElementById("loader");
const items = document.querySelector("#items");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const get = JSON.parse(xhr.response);
    let valute = get.response.Valute;

    for (let key in valute) {
      let charCode = valute[key].CharCode;
      let value = valute[key].Value;

      const fragment = document.createDocumentFragment();

      const container = document.createElement("div");
      container.className = "item";

      const itemCode = document.createElement("div");
      itemCode.textContent = charCode;
      itemCode.className = "item__code";

      const itemValue = document.createElement("div");
      itemValue.textContent = value;
      itemValue.className = "item__value";

      const itemCurrency = document.createElement("div");
      itemCurrency.textContent = "руб.";
      itemCurrency.className = "item__currency";

      container.append(itemCode, itemValue, itemCurrency);
      fragment.append(container);
      items.appendChild(fragment);
    }

    loader.classList.remove("loader_active");
  }
  xhr.onprogress = function () {
    alert(`Произошла ошибка во время отправки: ${xhr.status}`);
  };
};
xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.send();
