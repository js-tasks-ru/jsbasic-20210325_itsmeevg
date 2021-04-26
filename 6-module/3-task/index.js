import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    const slidesWrapper = this.addArrows();

    const carouselInner = this.slidesHandler();
    slidesWrapper.append(carouselInner);

    this.elem = slidesWrapper;

    // this.clickHandler();
  }

  clickHandler() {
    const rightArrow = document.querySelector(".carousel__arrow_right");
    const leftArrow = document.querySelector(".carousel__arrow_left");
    const slidesCount = document.querySelectorAll(".carousel__slide").length;
    let currentSlide = 1;

    rightArrow.addEventListener("click", function () {
      document.querySelector(".carousel__inner").style.transform =
        "translateX(-" + document.querySelector(".carousel__slide").offsetWidth * currentSlide + "px)";

      currentSlide++;

      if (slidesCount === currentSlide) {
        this.style.display = "none";
      } else {
        leftArrow.style.display = "flex";
      }
    });

    leftArrow.addEventListener("click", function () {
      currentSlide--;
      console.log(document.querySelector(".carousel__slide").offsetWidth * currentSlide - document.querySelector(".carousel__slide").offsetWidth);
      console.log(currentSlide);
      document.querySelector(".carousel__inner").style.transform =
        "translateX(-" + (document.querySelector(".carousel__slide").offsetWidth * currentSlide - slideWidth) + "px)";

      if (currentSlide === 1) {
        this.style.display = "none";
      } else {
        rightArrow.style.display = "flex";
      }
    });
  }

  addArrows() {
    let slidesWrapper = document.createElement("div");
    slidesWrapper.classList.add("carousel");

    let arrowRight = document.createElement("div");
    arrowRight.classList.add("carousel__arrow");
    arrowRight.classList.add("carousel__arrow_right");

    let arrowRightIcon = document.createElement("img");
    arrowRightIcon.alt = "icon";
    arrowRightIcon.src = "/assets/images/icons/angle-icon.svg";
    arrowRight.append(arrowRightIcon);

    slidesWrapper.append(arrowRight);

    let arrowLeft = document.createElement("div");
    arrowLeft.classList.add("carousel__arrow");
    arrowLeft.classList.add("carousel__arrow_left");
    arrowLeft.style.display = "none";

    let arrowLeftIcon = document.createElement("img");
    arrowLeftIcon.alt = "icon";
    arrowLeftIcon.src = "/assets/images/icons/angle-left-icon.svg";
    arrowLeft.append(arrowLeftIcon);

    slidesWrapper.append(arrowLeft);
    let currentSlide = 1;

    arrowRight.addEventListener("click", function () {
      const slideWidth = document.querySelector(".carousel__slide").offsetWidth;

      document.querySelector(".carousel__inner").style.transform =
        "translateX(-" + slideWidth * currentSlide + "px)";

      currentSlide++;

      if (document.querySelectorAll(".carousel__slide").length === currentSlide) {
        this.style.display = "none";
      } else {
        arrowLeft.style.display = "flex";
      }
    });

    arrowLeft.addEventListener("click", function () {
      const slideWidth = document.querySelector(".carousel__slide").offsetWidth;

      currentSlide--;
      
      document.querySelector(".carousel__inner").style.transform =
        "translateX(-" + (slideWidth * currentSlide - slideWidth) + "px)";

      if (currentSlide === 1) {
        this.style.display = "none";
      } else {
        arrowRight.style.display = "flex";
      }
    });

    return slidesWrapper;
  }

  slidesHandler() {
    let carouselInner = document.createElement("div");
    carouselInner.classList.add("carousel__inner");

    for (let i in this.slides) {
      let carouselSlide = document.createElement("div");
      carouselSlide.classList.add("carousel__slide");
      carouselSlide.dataset.id = this.slides[i].id;

      let carouselImg = document.createElement("img");
      carouselImg.classList.add("carousel__img");
      carouselImg.alt = "slide";
      carouselImg.src = "/assets/images/carousel/" + this.slides[i].image;
      carouselSlide.append(carouselImg);

      let carouselCaption = document.createElement("div");
      carouselCaption.classList.add("carousel__caption");

      let carouselPrice = document.createElement("span");
      carouselPrice.classList.add("carousel__price");
      carouselPrice.textContent = "€" + this.slides[i].price.toFixed(2);
      carouselCaption.append(carouselPrice);

      let carouselTitle = document.createElement("div");
      carouselTitle.classList.add("carousel__title");
      carouselTitle.textContent = this.slides[i].name;
      carouselCaption.append(carouselTitle);

      let carouselButton = document.createElement("button");
      carouselButton.classList.add("carousel__button");
      carouselButton.type = "button";

      let self = this;

      carouselButton.addEventListener("click", function () {
        this.dispatchEvent(
          new CustomEvent("product-add", {
            detail: self.slides[i].id,
            bubbles: true,
          })
        );
      });

      let plusIcon = document.createElement("img");
      plusIcon.alt = "icon";
      plusIcon.src = "/assets/images/icons/plus-icon.svg";
      carouselButton.append(plusIcon);

      carouselCaption.append(carouselButton);

      carouselSlide.append(carouselCaption);
      carouselInner.append(carouselSlide);
    }

    return carouselInner;
  }
}
