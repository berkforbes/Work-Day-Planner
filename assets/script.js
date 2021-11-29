$(document).ready(function () {
var rightNow = moment().format("MMMM Do, YYYY - hh:mm a");
$("#currentDay").html(rightNow); 
//Show current date and time in header
//currentDayEl = document.querySelector("#currentDay");
//currentDayEl.textContent = rightNow;
var currentHour = moment().format("HH");

$("#clearCalendarBtn").click(function(event) {
  $("textarea").val("");
  localStorage.clear();

})
})