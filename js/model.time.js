"use strict";

// data and logic

export let clockModel = {
    getTime: function() {
        const now = new Date();

        return {
            seconds: now.getSeconds(),
            minutes: now.getMinutes(),
            hours: now.getHours()
        };
    }
};