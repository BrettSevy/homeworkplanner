/*jshint esversion: 6 */

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
    // append day in moment.js in #currentDay header

   { var day = moment().format("llll");
    $("#currentDay").append(day);
    
}

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// need a container for each hour needed

    // var num1 = 10;
    // var num2 = 20;
    // var num3 = 30;

    // $(`
    // <section><span>${num1}</span></section>
    // <section><span>${num2}</span></section>
    // <section><span>${num3}</span></section>
    // `).appendTo(".container");


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    // for loop the time blocks so they color out as the time runs

// WHEN I click into a timeblock
// THEN I can enter an event
    // input text area in the time block onclick

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist





