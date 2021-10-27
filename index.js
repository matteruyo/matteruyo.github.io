function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

var x = setInterval (function () {
    exam = new Date (2021,9,29,14,0,0);
    now = new Date ();

    mils = exam - now;

    days = Math.floor (mils / 86400000);
    mils = mils - (days * 86400000);

    hours = Math.floor (mils / 3600000);
    mils = mils - (hours * 3600000);

    mins = Math.floor (mils / 60000);
    mils = mils - (mins * 60000);

    secs = Math.floor (mils / 1000);
    mils = mils - (secs * 1000);

    $("#days").html (pad (days, 3));
    $("#hours").html (pad (hours, 2));
    $("#mins").html (pad (mins, 2));
    $("#secs").html (pad (secs, 2));
    $("#mils").html (pad (mils, 3));
}, 1);

var x = setInterval (function () {
    exam = new Date (2021,10,1,14,0,0);
    now = new Date ();

    mils = exam - now;

    days = Math.floor (mils / 86400000);
    mils = mils - (days * 86400000);

    hours = Math.floor (mils / 3600000);
    mils = mils - (hours * 3600000);

    mins = Math.floor (mils / 60000);
    mils = mils - (mins * 60000);

    secs = Math.floor (mils / 1000);
    mils = mils - (secs * 1000);

    $("#days2").html (pad (days, 3));
    $("#hours2").html (pad (hours, 2));
    $("#mins2").html (pad (mins, 2));
    $("#secs2").html (pad (secs, 2));
    $("#mils2").html (pad (mils, 3));
}, 1);