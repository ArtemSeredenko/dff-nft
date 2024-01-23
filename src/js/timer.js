// Устанавливаем дату завершения таймера
 const countDownDate = new Date().getTime() + 216000000;

 const hoursValue = document.querySelector(".hoursValue");
 const minutesValue = document.querySelector(".minutesValue");
 const secondsValue = document.querySelector(".secondsValue");

 // Обновляет таймер каждую секунду
 const x = setInterval(function() {

     // Получаем текущую дату и время
     const now = new Date().getTime();

     // Рассчитываем оставшееся время между текущей датой и датой завершения
     const distance = countDownDate - now;

     // Рассчитываем дни, часы, минуты и секунды
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + days * 24);
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

     // Выводим результат
     hoursValue.textContent = hours;
     minutesValue.textContent = minutes;
     secondsValue.textContent = seconds;
 }, 1000);
