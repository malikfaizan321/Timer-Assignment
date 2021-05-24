var hours = 0;
var minutes = 0;
var seconds = 0;
var miliseconds = 0;

var getHours = document.getElementById("hours");
var getMinutes = document.getElementById("minutes");
var getSeconds = document.getElementById("seconds");
var getMiliseconds = document.getElementById("miliseconds");

var interval;

function stopWatch()
{
    miliseconds++;
    getMiliseconds.innerHTML = miliseconds;
    if(miliseconds >= 100)
    {
        seconds++;
        getSeconds.innerHTML = seconds;
        miliseconds = 0;
    }
    else if(seconds >= 60)
    {
        minutes++;
        getMinutes.innerHTML = minutes;
        seconds = 0;
    }
    else if(minutes >= 60)
    {
        hours++;
        getHours.innerHTML = hours;
        minutes = 0;
    }
}

function startTime()
{   
    interval = setInterval(stopWatch , 10);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false; 
    document.getElementById("reset").disabled = false;  
}

function stopTime()
{
    clearInterval(interval);
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("reset").disabled = false;
}

function resetTime()
{
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds  = 0;

    getHours.innerHTML = hours;
    getMinutes.innerHTML = minutes;
    getSeconds.innerHTML = seconds;
    getMiliseconds.innerHTML = miliseconds;
    
    stopTime();

    document.getElementById("reset").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = false;
}
