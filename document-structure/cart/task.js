const product = [...document.querySelectorAll(".product")];
let countProduct = [...document.querySelectorAll(".product__quantity-value")];
const cartProduct = [...document.querySelectorAll(".cart__products")];
const img = [...document.getElementsByTagName("img")];
const productAdd = [...document.querySelectorAll(".product__add")];

product.forEach((product) => {
    product.addEventListener("click", (event) => {
        const target = event.target;
        const id = target.closest(".product").dataset.id - 1;

        if (target.classList.contains("product__quantity-control_inc")) {
            plus(id);
        }
        if (target.classList.contains("product__quantity-control_dec")) {
            minus(id);
        }
        if (target.classList.contains("product__add")) {
            addToCart(id);
        }

    });

    function plus(id) {
        ++countProduct[id].textContent;
    }
    function minus(id) {
        if (countProduct[id].textContent == 0) {
            return false;
        }
        --countProduct[id].textContent;
    }
    function addToCart(id) {
        if (countProduct[id].textContent == 0) {
            return false;
        }
        cartProduct[0].innerHTML += ` 
<div class="cart__product" data-id="${id + 1}">
<img class="cart__product-image" src="${img[id].currentSrc}">
    <div class="cart__product-count">${countProduct[id].textContent}</div>
</div>`;
    }
});

