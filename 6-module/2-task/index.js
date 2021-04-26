import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  constructor(product) {
    this.product = product;

    let card = document.createElement("div");
    card.classList.add("card");

    let cardTop = document.createElement("div");
    cardTop.classList.add("card__top");

    let cardImage = document.createElement("img");
    cardImage.classList.add("card__image");
    cardImage.alt = "product";
    cardImage.src = "/assets/images/products/" + product.image;
    cardTop.append(cardImage);

    let cardPrice = document.createElement("span");
    cardPrice.classList.add("card__price");
    cardPrice.textContent = "€" + product.price.toFixed(2);
    cardTop.append(cardPrice);

    card.append(cardTop);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card__body");

    let cardTitle = document.createElement("div");
    cardTitle.classList.add("card__title");
    cardTitle.textContent = product.name;

    cardBody.append(cardTitle);

    let button = document.createElement("button");
    button.classList.add("card__button");
    button.type = "button";

    let icon = document.createElement("img");
    icon.alt = "icon";
    icon.src = "/assets/images/icons/plus-icon.svg";
    button.append(icon);

    cardBody.append(button);

    let self = this;

    button.addEventListener("click", function () {
      this.dispatchEvent(
        new CustomEvent("product-add", {
          detail: self.product.id,
          bubbles: true,
        })
      );
    });

    card.append(cardBody);

    button.addEventListener("product-add", function (event) {});

    this.elem = card;
  }
}
