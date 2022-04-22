$productsSlider = document.querySelector('.products__slider');
$productsMainImage = document.querySelector('.products__main-image');

function changeProductImage(event) {
  if (event.target.hasAttribute('src')) {
    $productsMainImage.setAttribute('src', event.target.src);
  }
}

$productsSlider.addEventListener('click', changeProductImage);
