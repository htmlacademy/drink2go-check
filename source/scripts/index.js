/* в этот файл добавляет скрипты*/
const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.onclick = function () {
  navMain.classList.toggle("main-nav--opened");
};

//слайдер

const slider = document.querySelector(".slider__list");
const prevButton = document.querySelector(".slider-button-prev");
const nextButton = document.querySelector(".slider-button-next");
const slides = Array.from(slider.querySelectorAll("li"));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

// Инициализация слайдера
updateSlider();

// Scroll - RangeScale

const select = document.querySelector(".range__field--min");
const rangeScale = document.querySelector(".range__slider");
const inputNumber = document.querySelector(".range-field--max");

noUiSlider.create(rangeScale, {
  start: [0, 900],
  connect: true,
  range: {
    min: 0,
    max: 1000,
  },
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
  cssPrefix: "noui-", // defaults to 'noUi-',
});

rangeScale.noUiSlider.on("update", (values, handle) => {
  const value = values[handle];
  if (handle) {
    inputNumber.value = value;
  } else {
    select.value = value;
  }
});

select.addEventListener("change", function () {
  rangeScale.noUiSlider.set([this.value, null]);
});

inputNumber.addEventListener("change", function () {
  rangeScale.noUiSlider.set([null, this.value]);
});
