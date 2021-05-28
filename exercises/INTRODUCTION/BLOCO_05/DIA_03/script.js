function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


function createCalendarDays() {

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days');
  const holidays = [24, 25, 31];
  const fridays = [4, 11, 18, 25];

  for (let day of dezDaysList) {
    const dayListItem = document.createElement('li');
    dayListItem.innerText = day;
    dayListItem.classList.add('day');

    for (holiday of holidays) {
      if (day === holiday) dayListItem.classList.add('holiday');
    }

    for (friday of fridays) {
      if (day === friday) dayListItem.classList.add('friday');
    }

    monthDaysList.appendChild(dayListItem);
  };
};

createCalendarDays();