var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
var myfunc = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((timeleft % (1000 * 60 )) / 1000 );
    // var process = Math.floor((100 - (timeleft / (1000 * 60 * 60 * 24 * 365) * 100)) * 100000) / 100000

    hours = (hours < 10) ? "0" + hours : hours
    mins = (mins < 10) ? "0" + mins : mins
    secs = (secs < 10) ? "0" + secs : secs

    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours 
    document.getElementById("mins").innerHTML = mins 
    document.getElementById("secs").innerHTML = secs 
    // document.getElementById("process").innerHTML = "Process: " + process + "%"

    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = 0
        document.getElementById("hours").innerHTML = 0
        document.getElementById("mins").innerHTML = 0
        document.getElementById("secs").innerHTML = 0
        // document.getElementById("process").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME'S UP!!!!";
    }

}, 1000)