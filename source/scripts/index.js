// MENU
const menuNav = document.querySelector('.menu-nav');
const menuNavToggle = document.querySelector('.menu-nav__toggle');

menuNav.classList.remove('menu-nav-nojs');

menuNav.classList.add('menu-nav--closed');

menuNavToggle.addEventListener('click', () => {
  if (menuNav.classList.contains('menu-nav--closed')) {
    menuNav.classList.remove('menu-nav--closed');
    menuNav.classList.add('menu-nav--opened');
  } else {
    menuNav.classList.add('menu-nav--closed');
    menuNav.classList.remove('menu-nav--opened');
  }
});


// слайдера
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-slide');
  const leftButton = document.querySelector('.hero-slider-button-left');
  const rightButton = document.querySelector('.hero-slider-button-right');
  const radioButtons = document.querySelectorAll('.hero-slider-radio-button');
  const totalSlides = slides.length;
  let currentIndex = 0;

  // Функция для обновления слайдера
  function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.classList.add('hero-slide-displayed');
      } else {
        slide.classList.remove('hero-slide-displayed');
      }
    });

    radioButtons.forEach((radio, index) => {
      if (index === currentIndex) {
        radio.checked = true;
      } else {
        radio.checked = false;
      }
    });
  }

  // Функция для перехода к следующему слайду
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  // Функция для перехода к предыдущему слайду
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  // Обработчик для кнопки "Следующий слайд"
  rightButton.addEventListener('click', () => {
    nextSlide();
  });

  // Обработчик для кнопки "Предыдущий слайд"
  leftButton.addEventListener('click', () => {
    prevSlide();
  });

  // Обработчик для радиокнопок
  radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', () => {
      if (radio.checked) {
        currentIndex = index;
        updateSlider();
      }
    });
  });
});

// range-slider
const rangeSlider = document.getElementById('range-slider');

noUiSlider.cssClasses.target += ' drink-slider';

if(rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    connect: true,
    step: 1,
    range: {
      'min': [0],
      'max': [1000]
    },
    cssPrefix: 'noui-'
  });

  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];
  rangeSlider.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = Math.round(values[handle]);
  });
  const setRangeSlider = (i, value) => {
    const arr = [null, null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
  };
  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
