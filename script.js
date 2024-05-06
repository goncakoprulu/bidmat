const cards = document.querySelector(".cards");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const range = 30;

const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1);

let timeout;
document.addEventListener('mousemove', ({ x, y }) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }

  timeout = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);

    cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
    [].forEach.call(images, image => {
      image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
    });
    [].forEach.call(backgrounds, background => {
      background.style.backgroundPosition = `${xValue * .45}px ${-yValue * .45}px`;
    });
  });
}, false);


const cardsTwo = document.querySelector(".cards-two");
const imagesTwo = document.querySelectorAll(".cards-two .card__img");
const backgroundsTwo = document.querySelectorAll(".cards-two .card__bg");
const rangeTwo = 20;

const calcValueTwo = (a, b) => (a / b * rangeTwo - rangeTwo / 2).toFixed(1);

let timeoutTwo;
document.addEventListener('mousemove', ({ x, y }) => {
  if (timeoutTwo) {
    window.cancelAnimationFrame(timeoutTwo);
  }

  timeoutTwo = window.requestAnimationFrame(() => {
    const yValueTwo = calcValueTwo(y, window.innerHeight);
    const xValueTwo = calcValueTwo(x, window.innerWidth);

    cardsTwo.style.transform = `rotateX(${yValueTwo}deg) rotateY(${xValueTwo}deg)`;
    [].forEach.call(imagesTwo, image => {
      image.style.transform = `translateX(${-xValueTwo}px) translateY(${yValueTwo}px)`;
    });
    [].forEach.call(backgroundsTwo, background => {
      background.style.backgroundPosition = `${xValueTwo * .45}px ${-yValueTwo * .45}px`;
    });
  });
}, false);
