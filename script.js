// display current date
var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

$document.ready(function () {
    //saveBtn click listener
    $(".saveBtn").on("click", function () {
        //get value of description in jquery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //save to local storage

        localStorage.setItem(time, text);
    })

    function timeTracker() {
        //get current number of hours
        var timeNow = moment().hour();

        //loop over the time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            //check time and update class for background colors
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
})

//get item from local storage
$("#8am .description").val(localStorage.getItem("8am"));