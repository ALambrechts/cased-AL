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
  let $stepCounter = document.getElementById('step-counter');

  let currentSlide = 0;
  let slideCount = $SliderContainer.children.length;

  $SliderContainer.style.left = '-0%';

  function nextBtnClick() {
    if (currentSlide === slideCount - 1) {
      return;
    }

    currentSlide++;
    $SliderContainer.style.left = `${-currentSlide * 125}%`;
    $stepCounter.innerText = `${currentSlide + 1} of 8`;
  }

  function prevBtnClick() {
    if (currentSlide === 0) {
      return;
    }

    currentSlide--;
    $SliderContainer.style.left = `${-currentSlide * 125}%`;
    $stepCounter.innerText = `${currentSlide + 1} of 8`;
  }

  $nextBtn.addEventListener('click', nextBtnClick);
  $prevBtn.addEventListener('click', prevBtnClick);
}

window.addEventListener('load', function () {
  enableStepSlider();
});
