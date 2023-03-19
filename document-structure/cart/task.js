const product = [...document.querySelectorAll(".product")];

product.forEach((product) => {
    product.addEventListener("click", (event) => {
        const target = event.target;
        const parent = target.closest(".product");
        const countChild = parent.querySelector(".product__quantity-value");

        if (target.classList.contains("product__quantity-control_inc")) {
            ++countChild.textContent;
        }
        if (
            target.classList.contains("product__quantity-control_dec") &&
            countChild.textContent != 0
        ) {
            --countChild.textContent;
        }
        if (target.classList.contains("product__add")) {
            addToCart(parent, countChild);
        }
    });
});
function addToCart(parent, countChild) {
    const productInCart = Array.from(
        document.querySelectorAll(".cart__products")
    );
    const childrenInCart = [...document.querySelectorAll(".cart__product")];
    const countInCart = [...document.querySelectorAll(".cart__product-count")];
    const srcImg = parent.querySelector("img").getAttribute("src");

    let findInCart = childrenInCart.find((element) => {
        if (childrenInCart.length === 0) {
            return;
        } else {
            return element.dataset.id === parent.dataset.id;
        }
    });
    if (findInCart) {
        countInCart[0].textContent = countChild.textContent;
    } else {
        productInCart[0].insertAdjacentHTML(
            "afterbegin",
            ` 
            <div class="cart__product" data-id="${parent.dataset.id}">
            <img class="cart__product-image" src="${srcImg}">
            <div class="cart__product-count">${countChild.textContent}</div>
            </div>`
        );
    }
}
