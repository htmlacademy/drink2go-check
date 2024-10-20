/* в этот файл добавляет скрипты*/

//nav
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.header__toggle-iconline');
  const menu = document.querySelector('.main-navigation');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('main-navigation--open');
    menu.classList.toggle('main-navigation--closed');
    menuToggle.classList.toggle('header__toggle-iconline--opened');
  });
});



//slider
document.addEventListener('DOMContentLoaded', () => {
  const sliderItems = document.querySelectorAll('.slider__item');
  const paginationIndicators = document.querySelectorAll('.slider__indicator');
  const prevArrow = document.querySelector('.slider__arrow--left');
  const nextArrow = document.querySelector('.slider__arrow--right');
  let currentSlideIndex = 0;

  // Функция для обновления состояния слайдов и пагинации
  function updateSlider() {
    // Скрыть все слайды
    sliderItems.forEach((item, index) => {
      item.classList.remove('slider__item--current');
    });

    // Убрать активные состояния пагинации
    paginationIndicators.forEach((indicator) => {
      indicator.classList.remove('slider__indicator--active');
    });

    // Показать текущий слайд
    sliderItems[currentSlideIndex].classList.add('slider__item--current');

    // Активировать текущий индикатор
    paginationIndicators[currentSlideIndex].classList.add('slider__indicator--active');

    // Отключаем кнопки если мы на первом или последнем слайде
    // prevArrow.disabled = currentSlideIndex === 0;
    // nextArrow.disabled = currentSlideIndex === sliderItems.length - 1;
  }

  // Обработчик для кнопки "Предыдущий слайд"
  prevArrow.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      updateSlider();
    }
  });

  // Обработчик для кнопки "Следующий слайд"
  nextArrow.addEventListener('click', () => {
    if (currentSlideIndex < sliderItems.length - 1) {
      currentSlideIndex++;
      updateSlider();
    }
  });

  // Обработчики для клика на пагинацию
  paginationIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentSlideIndex = index;
      updateSlider();
    });
  });

  // Инициализация слайдера при загрузке
  updateSlider();
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
