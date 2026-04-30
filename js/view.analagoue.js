"use strict";

// View represents Data in the Browser


export let analogClockView = {
    update : function(hour, minutes, seconds) {


        let angleS = seconds * 6;
        let angleM = minutes * 6 + seconds * (6/60);
        let angleH = (hour % 12) * (360/12) + minutes * (360/(12*60));

        document.querySelector(".second")
            .style.transform = `rotate(${angleS}deg)`;
        document.querySelector(".minute")
            .style.transform = `rotate(${angleM}deg)`;
        document.querySelector(".hour")
            .style.transform = `rotate(${angleH}deg)`;
    }
}


