let $productsSlider = document.querySelector('.products__slider');
let $productsMainImage = document.querySelector('.products__main-image');
let $submitButton = document.getElementById('submit-button');

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

// form submit

function formSubmit(event) {
  event.preventDefault();

  validateSubmit();
}

function validateSubmit() {
  let $contactName = document.getElementById('contact-name');
  let $contactEmail = document.getElementById('contact-email');
  let $contactMessage = document.getElementById('contact-msg');

  let errorTriggered = null;

  let validSymbols = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if ($contactName.value.length > 50 || $contactName.value.length === 0) {
    errorTriggered = 1;
    alert('Gelieve een naam onder 50 karakters in te vullen.');
  }

  if (
    !$contactEmail.value.match(validSymbols) ||
    $contactEmail.value.length === 0 ||
    $contactEmail.value.length > 100
  ) {
    errorTriggered = 1;
    alert('Gelieve een geldig email address in te geven.');
  }

  if ($contactMessage.length === 0 || $contactMessage.value.length > 5000) {
    // todo, show character limit counter
    errorTriggered = 1;
    alert('Gelieve een bericht onder 5000 karakters in te voeren.');
  }

  if (errorTriggered === 1) {
  } else {
    alert('Bericht succevol verstuurd!');
  }
}

// event listeners

$submitButton.addEventListener('click', formSubmit);
