/* в этот файл добавляет скрипты*/

//nav
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.header__toggle-iconline');
  const menu = document.querySelector('.main-navigation');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('main-navigation--open');
    menu.classList.toggle('main-navigation--closed');
    menuToggle.classList.toggle('header__toggle-iconline--opened'); // убрала точку перед классом
  });
});



//slider
document.addEventListener('DOMContentLoaded', function() {
  const sliderItems = document.querySelectorAll('.slider__item'); // Слайды
  const prevButton = document.querySelector('.slider__arrow--left'); // Кнопка "Предыдущий слайд"
  const nextButton = document.querySelector('.slider__arrow--right'); // Кнопка "Следующий слайд"
  let currentSlide = 0;

  // Функция обновления видимого слайда
  function updateSlides() {
    sliderItems.forEach((item, index) => {
      if (index === currentSlide) {
        item.classList.add('slider__item--current');
        item.classList.remove('swiper-slide-prev', 'swiper-slide-next');
      } else {
        item.classList.remove('slider__item--current');
        if (index === currentSlide - 1) {
          item.classList.add('swiper-slide-prev');
        } else if (index === currentSlide + 1) {
          item.classList.add('swiper-slide-next');
        } else {
          item.classList.remove('swiper-slide-prev', 'swiper-slide-next');
        }
      }
    });
    updateButtons();
  }

  // Обновление состояния кнопок
  function updateButtons() {
    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === sliderItems.length - 1;
  }

  // Обработчик клика для кнопки "Следующий слайд"
  nextButton.addEventListener('click', function() {
    if (currentSlide < sliderItems.length - 1) {
      currentSlide++;
      updateSlides();
    }
  });

  // Обработчик клика для кнопки "Предыдущий слайд"
  prevButton.addEventListener('click', function() {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlides();
    }
  });

  // Инициализация
  updateSlides();
});



//noUiSlider
const rangeSlider = document.getElementById('range-slider');
const inputMin = document.getElementById('range-min');
const inputMax = document.getElementById('range-max');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    connect: true,
    range: {
      min: 0,
      max: 1000
    },

    cssPrefix: 'noui-'

  });

  const inputs = [inputMin, inputMax];

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  inputs.forEach((input, index) => {
    input.addEventListener('change', function () {
      const value = Number(this.value);
      let values = [null, null];
      values[index] = value;
      rangeSlider.noUiSlider.set(values);
    });
  });
}
