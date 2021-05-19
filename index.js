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

// Объект в котором храним дату назначения
let endDate = {
  fullYear: "2021",
  month: "05",
  day: "20",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

// Строка вывода времени
let endDateString = `${endDate.fullYear}-${endDate.month}-${endDate.day} ${endDate.hours}:${endDate.minutes}:${endDate.seconds}`;
console.log('endDateString'+endDateString);

// Запускаем таймер с интервалом в одну секунду
const timer = setInterval(() => {
  // Получаем нынешнее время
  let nowDate = new Date();
  console.log("nowDate" + nowDate);

  // Получаем заданное время
  let targetDate = new Date(endDateString);
  console.log("targetDate" + targetDate);

  // Вычесляем время которое осталось
  let remainingTime = diffSubtract(nowDate, targetDate);
  console.log("remainingTime" + remainingTime);

  if (remainingTime <= 0) {
    clearInterval(timer);
    console.log("Время вышло");
  } else {
    let newTime = new Date(remainingTime);
    refs.daysEl.textContent = `${newTime.getUTCDate()-1}`;
    refs.hoursEl.textContent = `${newTime.getUTCHours()}`;
    refs.minsEl.textContent = `${newTime.getUTCMinutes()}`;
    refs.secsEl.textContent = `${newTime.getUTCSeconds()}`;
    console.log(newTime)
  }
}, 1000);
