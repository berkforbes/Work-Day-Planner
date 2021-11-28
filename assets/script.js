var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
currentDayEl = document.querySelector("#currentDay");

//Show current date and time in header
currentDayEl.textContent = rightNow;


