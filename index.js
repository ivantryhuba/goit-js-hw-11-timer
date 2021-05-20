'use strict'
// !Элементы таймера
const refs = {
  timerEl: document.querySelector("#timer-1"),
  daysEl: document.querySelector('[data-value="days"]'),
  hoursEl: document.querySelector('[data-value="hours"]'),
  minsEl: document.querySelector('[data-value="mins"]'),
  secsEl: document.querySelector('[data-value="secs"]'),
};

// !Класс таймера
class CountdownTimer {
  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start = setInterval(() => {
    const nowDate = Date.now();
    const remainingTime = this.targetDate - nowDate;
    const time = this.getTimeComponents(remainingTime);

    this.updateClockface(time);
    this.stop(time)
  }, 1000);

  stop(time) {
    if (time <= 0) {
      clearInterval(this.start)
      refs.timerEl.textContent = 'Your time is over-GOOD BYE=))'
    }
  }

  // !Считаем сколько чего влазит в количество милисекунд
  getTimeComponents(time) {
    //  TODO Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    //  TODO Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора остатка % и делим его на количество миллисекунд в одном часе (1000 * 60 * 60 = миллисекунды * минуты * секунды)
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );

    // TODO Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    // TODO Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество миллисекунд в одной секунде (1000)
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  // !Принимаем число, приводим к строке и добавляем в начало 0, если число меньше 2-х символов
  pad(value) {
    return String(value).padStart(2, "0");
  }

  // !Обновляем данные в разметке
  updateClockface({ days, hours, mins, secs }) {
    refs.daysEl.textContent = `${days}`;
    refs.hoursEl.textContent = `${hours}`;
    refs.minsEl.textContent = `${mins}`;
    refs.secsEl.textContent = `${secs}`;
  }
}

// !Создаём новый таймер
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2022'),
});