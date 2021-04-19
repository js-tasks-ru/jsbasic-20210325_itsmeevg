function initCarousel() {
  const rightArrow = document.querySelector(".carousel__arrow_right");
  const leftArrow = document.querySelector(".carousel__arrow_left");
  const slideWidth = document.querySelector(".carousel__slide").offsetWidth;
  const slidesCount = document.querySelectorAll(".carousel__slide").length;
  let currentSlide = 1;

  leftArrow.style.display = "none";

  rightArrow.addEventListener("click", function () {
    document.querySelector(".carousel__inner").style.transform =
      "translateX(-" + slideWidth * currentSlide + "px)";

    currentSlide++;

    if (slidesCount === currentSlide) {
      this.style.display = "none";
    } else {
      leftArrow.style.display = "flex";
    }
  });

  leftArrow.addEventListener("click", function () {
    currentSlide--;
    console.log(slideWidth * currentSlide - slideWidth);
    console.log(currentSlide);
    document.querySelector(".carousel__inner").style.transform =
      "translateX(-" + (slideWidth * currentSlide - slideWidth) + "px)";

    if (currentSlide === 1) {
      this.style.display = "none";
    } else {
      rightArrow.style.display = "flex";
    }
  });
}
