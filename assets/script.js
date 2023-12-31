// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var toDo = document.getElementById('hours');
var toDo1 = document.getElementById('hours1');
var toDo2 = document.getElementById('hours2');
var toDo3 = document.getElementById('hours3');
var toDo4 = document.getElementById('hours4');
var toDo5 = document.getElementById('hours5');
var toDo6 = document.getElementById('hours6');
var toDo7 = document.getElementById('hours7');
var toDo8 = document.getElementById('hours8');
var saveButton = document.querySelector('.saveBtn');

var userTexts = [
    toDo,
    toDo1,
    toDo2,
    toDo3,
    toDo4,
    toDo5,
    toDo6,
    toDo7,
    toDo8
]


$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    saveButton.addEventListener('click', () => {
        // for (var i = 0; i < userTexts.length; i++) {
        //     if (userTexts[i].value !== null) {
        //         var lsArray = [
        //             "hi"
        //         ];
        //         lsArray.push(userTexts[i]);
        //         console.log(lsArray);
        //     }
        // }
        // var savedText = toDo.value;
        // localStorage.setItem('saved', savedText);
        console.log("hihihihi")
    })

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    allHours = [
        nine = 9,
        ten = 10,
        eleven = 11,
        twelve = 12,
        thirteen = 13,
        fourteen = 14,
        fifteen = 15,
        sixteen = 16,
        seventeen = 17
    ]

    var rightNow = dayjs();
    var rightNowAsInt = parseInt(rightNow.hour(), 10);

    if (nine < rightNowAsInt) {
        $('.nine').css('backgroundColor', 'gray');
    } else if (nine > rightNowAsInt) {
        $('.nine').css('backgroundColor', 'red');
    } else {
        $('.nine').css('backgroundColor', 'green');
    }

    if (ten < rightNowAsInt) {
        $('.ten').css('backgroundColor', 'gray');
    } else if (ten > rightNowAsInt) {
        $('.ten').css('backgroundColor', 'red');
    } else {
        $('.ten').css('backgroundColor', 'green');
    }

    if (eleven < rightNowAsInt) {
        $('.eleven').css('backgroundColor', 'gray');
    } else if (eleven > rightNowAsInt) {
        $('.eleven').css('backgroundColor', 'red');
    } else {
        $('.eleven').css('backgroundColor', 'green');
    }

    if (twelve < rightNowAsInt) {
        $('.twelve').css('backgroundColor', 'gray');
    } else if (twelve > rightNowAsInt) {
        $('.twelve').css('backgroundColor', 'red');
    } else {
        $('.twelve').css('backgroundColor', 'green');
    }

    if (thirteen < rightNowAsInt) {
        $('.thirteen').css('backgroundColor', 'gray');
    } else if (thirteen > rightNowAsInt) {
        $('.thirteen').css('backgroundColor', 'red');
    } else {
        $('.thirteen').css('backgroundColor', 'green');
    }

    if (fourteen < rightNowAsInt) {
        $('.fourteen').css('backgroundColor', 'gray');
    } else if (fourteen > rightNowAsInt) {
        $('.fourteen').css('backgroundColor', 'red');
    } else {
        $('.fourteen').css('backgroundColor', 'green');
    }

    if (fifteen < rightNowAsInt) {
        $('.fifteen').css('backgroundColor', 'gray');
    } else if (fifteen > rightNowAsInt) {
        $('.fifteen').css('backgroundColor', 'red');
    } else {
        $('.fifteen').css('backgroundColor', 'green');
    }

    if (sixteen < rightNowAsInt) {
        $('.sixteen').css('backgroundColor', 'gray');
    } else if (sixteen > rightNowAsInt) {
        $('.sixteen').css('backgroundColor', 'red');
    } else {
        $('.sixteen').css('backgroundColor', 'green');
    }

    if (seventeen < rightNowAsInt) {
        $('.seventeen').css('backgroundColor', 'gray');
    } else if (seventeen > rightNowAsInt) {
        $('.seventeen').css('backgroundColor', 'red');
    } else {
        $('.seventeen').css('backgroundColor', 'green');
    }

    // for (let i = 0; i < allHours.length; i++) {
    //     var allHoursAtI = allHours[i];
    //     if (allHoursAtI < rightNowAsInt) {
    //         $(allHoursAtI).css("background-color", "red");
    //         console.log("worked");
    //     }
    // }




    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    var today = dayjs();
    $('#currentDay').text(today.format('MMMM D, YYYY'))
});
