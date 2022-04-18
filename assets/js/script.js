$(document).ready(function () {
    // Display current day & time.
    
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // use of moment.js
})
    