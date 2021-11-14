// display current date
var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var inputText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save in local storage
        localStorage.setItem(time, inputText);
    })

    function timeTracker() {
        //pull current time
        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
    
            // update styling based on current time
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    //local storage 
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})