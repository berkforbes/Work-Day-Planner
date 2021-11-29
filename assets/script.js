//js moment to display current time
$(document).ready(function () {
  var rightNow = moment().format("MMMM Do, YYYY - hh:mm a");
  var currentHour = moment().format("HH");

  //Show current date and time in heade
  $("#currentDay").html(rightNow);

  //button to clear text from calendar
  $("#clearPlannerBtn").click(function (event) {
    $("textarea").val("");
    localStorage.clear();
  });

  //Thumbtack button saves to local storage
  $(".saveBtn").click(function (event) {
    event.preventDefault;
    var taskItem = $(this).siblings(".task").val();
    var timeOfDay = $(this).parent().attr("id");
    localStorage.setItem(taskItem, timeOfDay);
  });

  //Local storage retrieval
  $("#hour1 .task").val(localStorage.getItem("hour1"));
  $("#hour2 .task").val(localStorage.getItem("hour2"));
  $("#hour3 .task").val(localStorage.getItem("hour3"));
  $("#hour4 .task").val(localStorage.getItem("hour4"));
  $("#hour5 .task").val(localStorage.getItem("hour5"));
  $("#hour6 .task").val(localStorage.getItem("hour6"));
  $("#hour7 .task").val(localStorage.getItem("hour7"));
  $("#hour8 .task").val(localStorage.getItem("hour8"));
  $("#hour9 .task").val(localStorage.getItem("hour9"));
  $("#hour10 .task").val(localStorage.getItem("hour10"));

  // loop over time blocks
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    // To check the time and add the classes for background indicators
    if (blockTime < rightNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (blockTime === rightNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
});
