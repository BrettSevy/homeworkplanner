/*jshint esversion: 6 */


    
// header time
   { var day = moment().format("llll");
    $("#currentDay").append(day);
    
}

//view the timeblocks for that day
var momentTime = moment().startOf("day").add(7, "hour");
var hour = moment().format("H");

for(var i = 8; i<20; i++)

{
    var timeSlot = momentTime.add(1, "hour").format("HH:mm A");
    var currentState;
    
    // timeblock is color coded to indicate whether it is in the past, present, or future
        if(hour == i) {
            currentState = 'present';
        } else if (hour > i) {
            currentState = 'future';
        } else if (hour < i) {
            currentState = 'past';
        }
        
        var newStuff =
        `<container class="row" >
            <div class="col-2"></div>
            <div class="hour w-25 p-4 col-1" id=time>${timeSlot}</div>
            <textarea class="w-50 p-4 col-6 ${currentState}"></textarea>
            <button class="saveBtn w-25 p-4 col-1 far fa-save"></button>
            <div class="col-2">
            </div>
        </container>`
        ;

        $("#containAll").append(newStuff);
    }
    
    // WHEN I click the save button for that timeblock
    // THEN the text for that event is saved in local storage
    // WHEN I refresh the page
    // THEN the saved events persist
    


    
   
    






