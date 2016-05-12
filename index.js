#!/usr/bin/env node
var moment = require('moment-timezone');

var locationToTimezone  = {'LA':'America/Los_Angeles','LONDON':'Europe/London','NY':'America/New_York','BERLIN':'Europe/Berlin'};

for (var zone in locationToTimezone) {
    console.log(zone + ': ' + moment().tz(locationToTimezone[zone]).format("HH:mm"));
}
