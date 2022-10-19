const timerDaysNode = document.querySelector("#timer-days-value");
const timerHoursNode = document.querySelector("#timer-hours-value");
const timerMinutesNode = document.querySelector("#timer-minutes-value");
const timerSecondsNode = document.querySelector("#timer-seconds-value");

let intervalCancelToken = 0;

const StartCourseDate = new Date(2022, 10, 1, 20, 0, 0);
const dateNow = new Date();
console.log(StartCourseDate - dateNow);

function extractDatePart(diffDate, partName) {
  switch (partName.toLowerCase()) {
    case "day":
      return Math.floor(diffDate / (24 * 60 * 60 * 1000));
    case "hour":
      return Math.floor((diffDate % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    case "minute":
      return Math.floor((diffDate % (60 * 60 * 1000)) / (60 * 1000));
    case "second":
      return Math.floor((diffDate % (60 * 1000)) / 1000);
    default:
      break;
  }
}

setInterval(function () {
  const dateNow = new Date();
  const timeRemains = StartCourseDate - dateNow;
  timerDaysNode.textContent = extractDatePart(timeRemains, "day");
  timerHoursNode.textContent = extractDatePart(timeRemains, "hour");
  timerMinutesNode.textContent = extractDatePart(timeRemains, "minute");
  timerSecondsNode.textContent = extractDatePart(timeRemains, "second");
}, 1000);
