// Элементы таймера
const refs = {
  timerEl: document.querySelector("#timer-1"),
  daysEl: document.querySelector('[data-value="days"]'),
  hoursEl: document.querySelector('[data-value="hours"]'),
  minsEl: document.querySelector('[data-value="mins"]'),
  secsEl: document.querySelector('[data-value="secs"]'),
};

// Функция которая считает разницу времени
function diffSubtract(date1, date2) {
  return date2 - date1;
}

// JSON в котором храним дату назначения
let endDate = {
  fullYear: "2022",
  month: "05",
  day: "18",
  hours: "17",
  minutes: "09",
  seconds: "00",
};

// Строка вивода времени
let endDateString = `${endDate.fullYear}-${endDate.month}-${endDate.day}T${endDate.hours}:${endDate.minutes}:${endDate.seconds}`;

// Запускаем таймер с интервалом в одну секунду
const timer = setInterval(() => {
  // Получаем нынешнее время
  let nowDate = new Date();
  // Получаем заданное время
  let targetDate = new Date(endDateString);
  // Вычесляем время которое осталось
  let remainingTime = diffSubtract(nowDate, targetDate);

  if (remainingTime <= 0) {
      clearInterval(timer);
      console.log('Время вышло')
  } else {
    let newTime = new Date(remainingTime);
    refs.daysEl.textContent = `${newTime.getUTCDate()}`;
    refs.hoursEl.textContent = `${newTime.getUTCHours()}`;
    refs.minsEl.textContent = `${newTime.getUTCMinutes()}`;
    refs.secsEl.textContent = `${newTime.getUTCSeconds()}`;
  }
}, 1000);
