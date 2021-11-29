var rightNow = moment().format("MMMM Do, YYYY - hh:mm a");
currentDayEl = document.querySelector("#currentDay");
var currentHour = moment().format("HH");

//Show current date and time in header
currentDayEl.textContent = rightNow;



