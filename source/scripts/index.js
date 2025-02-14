/* РЕАЛИЗУЕТ ОТКРЫТИЕ МЕНЮ В МОБИЛЬНОЙ ВЕРСИИ */
const mainNav = document.querySelector('.nav');
const burger = document.querySelector('.button-burger');

mainNav.classList.remove('nav--opened');
mainNav.classList.add('nav--closed');

burger.addEventListener('click', ()=> {
  if (mainNav.classList.contains('nav--opened')) {
    burger.classList.remove('button-burger--opened');
    burger.classList.add('button-burger--closed');
    mainNav.classList.remove('nav--opened');
    mainNav.classList.add('nav--closed');
  } else {
    burger.classList.add('button-burger--opened');
    burger.classList.remove('button-burger--closed');
    mainNav.classList.add('nav--opened');
    mainNav.classList.remove('nav--closed');
  }
});

/* РЕАЛИЗУЕТ ПЕРЕКЛЮЧЕНИЕ СЛАЙДОВ ПО КНОПКАМ С ГАЛОЧКАМИ И ДИНАМИЧЕСКИЙ ФОН*/
const sliderSection = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');
const stepButton = document.querySelector('.slider__button-step');
let currentCard = 0;

function showCard(index) {
    cards.forEach((card, i) => {
        card.classList.toggle('card--current', i === index);
    });

    const bgType = cards[index].getAttribute('data-bg');
    sliderSection.className = `slider slider--${bgType}`;
    stepButton.className = `slider__button-step slider__button-step--${bgType}`

    // Обновляем текущий слайд
    currentCard = index;

    // Отключаем кнопки, если слайд первый или последний
    prevButton.disabled = index === 0;
    nextButton.disabled = index === cards.length - 1;
}

// Обработчики для кнопок
prevButton.addEventListener('click', () => {
    if (currentCard > 0) {
        currentCard--;
        showCard(currentCard);
    }
});

nextButton.addEventListener('click', () => {
    if (currentCard < cards.length - 1) {
        currentCard++;
        showCard(currentCard);
    }
});

showCard(currentCard);
