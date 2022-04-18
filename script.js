// The ready() method is used to make a function available after the document is loaded. 
//Whatever code you write inside the $(document ).ready() method will run once the page DOM is ready to execute JavaScript code.
$(document).ready(function () {
    // Display current day & time.
    
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // use of moment.js
    

})