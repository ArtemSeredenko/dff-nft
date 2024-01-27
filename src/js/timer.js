const hoursValue = document.querySelector('.hoursValue');
const minutesValue = document.querySelector('.minutesValue');
const secondsValue = document.querySelector('.secondsValue');
let countDownDate;

if (localStorage.getItem('date')) {
  countDownDate = JSON.parse(localStorage.getItem('date'));
} else {
  setTime();
}

// Устанавливаем дату завершения таймера
//  const countDownDate = new Date().getTime() + 216000000;

// Обновляет таймер каждую секунду
const timer = setInterval(function () {
  // Получаем текущую дату и время
  const now = new Date().getTime();

  // Рассчитываем оставшееся время между текущей датой и датой завершения
  const distance = countDownDate - now;

  // Рассчитываем дни, часы, минуты и секунды
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + days * 24
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (
    Number(days) <= 0 &&
    Number(hours) <= 0 &&
    Number(minutes) <= 0 &&
    Number(seconds) <= 0
  ) {
    setTime();
  }

  // Выводим результат
  hoursValue.textContent = addLeadingZero(hours);
  minutesValue.textContent = addLeadingZero(minutes);
  secondsValue.textContent = addLeadingZero(seconds);
}, 1000);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function setTime() {
  countDownDate = new Date().getTime() + 216000000;

  localStorage.setItem('date', JSON.stringify(countDownDate));
}
