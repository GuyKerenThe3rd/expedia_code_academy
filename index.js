#!/usr/bin/env node
var moment = require('moment-timezone');

var locationToTimezone  = {'London':'Europe/London'
    ,'New-York':'America/New_York'
    ,'Seattle':'America/Boise'
    ,'San-Francisco':'America/Boise'
    ,'Berlin':'Europe/Berlin'};

for (zone in locationToTimezone) {
    console.log(zone + ': ' + moment().tz(locationToTimezone[zone]).format("HH:mm dddd"));
}
