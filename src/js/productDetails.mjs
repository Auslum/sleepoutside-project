import { findProductById } from "./productData.mjs";
import { setLocalStorage } from "./utils.mjs";

let product = {}

export default async function productDetails(productId) {
    product = await findProductById(productId);
    renderProductDetails();
    document.getElementById("addToCart").addEventListener("click", addToCart);
}

export function addToCart() {
    let carrito = getLocalStorage("so-cart") || [];
    carrito.push(product);
    setLocalStorage("so-cart", carrito);
}

export function renderProductDetails() {
    document.querySelector("#productName").innerText = product.Brand.Name;
    document.querySelector("#productNameWithoutBrand").innerText = product.NameWithoutBrand;
    document.querySelector("#productImage").scr = product.Image;
    document.querySelector("#productImage").alt = product.Name;
    document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
    document.querySelector("#productColorName").innerText = product.Colors[0].ColorName;
    document.querySelector("#productDescriptionHtmlSimple").innerText = product.DescriptionHtmlSimple;
    document.querySelector("#addToCart").dataset.id = product.Id;
}