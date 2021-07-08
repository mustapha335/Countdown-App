const newYears = "1 jan 2022";
const Day = document.getElementById('Days')
const Hours = document.getElementById('Hours')
const mins = document.getElementById('Mins')
const secs = document.getElementById('Secs')

function countdown(){
    const YearsDate = new Date(newYears);
    const currentDate = new Date();
    const seconds = (YearsDate - currentDate) / 1000;
    const day = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds/ 3600) % 24;
    const Mins = Math.floor(seconds/ 60) % 60;
    const Sec = Math.floor(seconds % 60)

   Day.innerHTML= day;
   Hours.innerHTML=hours;
   mins.innerHTML=Mins;
   secs.innerHTML=Sec;
};
countdown();
setInterval(countdown, 1000);