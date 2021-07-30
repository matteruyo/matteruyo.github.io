var x = setInterval (function () {
    exam = new Date (2021,9,29,2,0,0);
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

    $("#days").html (days);
    $("#hours").html (hours);
    $("#mins").html (mins);
    $("#secs").html (secs);
    $("#mils").html (mils);
}, 1);