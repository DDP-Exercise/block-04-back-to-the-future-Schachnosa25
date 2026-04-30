"use strict";


export let digitalClockView = {
    update : function(hour, minutes, seconds) {
        document.getElementById("clockS").innerHTML = seconds;
        document.getElementById("clockM").innerHTML = minutes;
        document.getElementById("clockH").innerHTML = hour;
    }


}