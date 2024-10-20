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

  // Обновляем состояние кнопок
  function updateButtons() {
      if (currentSlide === 0) {
          prevButton.disabled = true; // Блокируем кнопку "Назад" на первом слайде
      } else {
          prevButton.disabled = false;
      }

      if (currentSlide === sliderItems.length - 1) {
          nextButton.disabled = true; // Блокируем кнопку "Вперед" на последнем слайде
      } else {
          nextButton.disabled = false;
      }
  }

  // Перемещаем к предыдущему слайду
  prevButton.addEventListener('click', function() {
      if (currentSlide > 0) {
          sliderItems[currentSlide].classList.remove('slider__item--current'); // Убираем класс активного слайда
          currentSlide--; // Переходим на предыдущий слайд
          sliderItems[currentSlide].classList.add('slider__item--current'); // Добавляем класс новому активному слайду
          updateButtons(); // Обновляем состояние кнопок
      }
  });

  // Перемещаем к следующему слайду
  nextButton.addEventListener('click', function() {
      if (currentSlide < sliderItems.length - 1) {
          sliderItems[currentSlide].classList.remove('slider__item--current'); // Убираем класс активного слайда
          currentSlide++; // Переходим на следующий слайд
          sliderItems[currentSlide].classList.add('slider__item--current'); // Добавляем класс новому активному слайду
          updateButtons(); // Обновляем состояние кнопок
      }
  });

  // Инициализация начального состояния кнопок
  updateButtons();
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
