$productsSlider = document.querySelector('.products__slider');
$productsMainImage = document.querySelector('.products__main-image');

function changeProductImage(event) {
  if (event.target.hasAttribute('src')) {
    $productsMainImage.setAttribute('src', event.target.src);
  }
}

$productsSlider.addEventListener('click', changeProductImage);

// slider for steps

function enableStepSlider() {
  let $SliderContainer = document.querySelector('.product-process__container');
  let $nextBtn = document.getElementById('step-slider-next');
  let $prevBtn = document.getElementById('step-slider-prev');

  let currentSlide = 0;
  let slideCount = $SliderContainer.children.length;

  function nextBtnClick() {
    if (currentSlide === slideCount - 2) {
      return;
    }

    currentSlide++;
    $SliderContainer.style.left = `${-currentSlide * 50}%`;
  }

  function prevBtnClick() {
    if (currentSlide === 0) {
      return;
    }

    currentSlide--;
    $SliderContainer.style.left = `${-currentSlide * 50}%`;
  }

  $nextBtn.addEventListener('click', nextBtnClick);
  $prevBtn.addEventListener('click', prevBtnClick);
}

window.addEventListener('load', function () {
  enableStepSlider();
});
