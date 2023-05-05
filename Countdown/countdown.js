const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


const dateListing = document.querySelector('.end-date');
const area = document.querySelector('.countdown-area');
const items = document.querySelectorAll('.countdown-item h5');

function showZero(n) {
    return (n < 10)? `0${n}`: n;
}


// Displaying and Storing the Future Date
// let theDate = new Date(2022, 10, 20, 11, 0, 0, 0);
let theDate = new Date(2022, 10, 20, 11, 0, 0, 0);

const year = theDate.getFullYear();
const month = theDate.getMonth();
const weekDay = theDate.getDay();
const monthDay = theDate.getDate();
const hours = theDate.getHours();
const minutes = theDate.getUTCMinutes();

dateListing.textContent = `The FIFA World Cup begins on ${days[weekDay]}, ${months[month]} ${monthDay}, ${year} at ${hours}:${showZero(minutes)} EST`;

// Current Date
const futureMS = theDate.getTime(); // gives time value in MS

// let currentDate = new Date();
// let currentMS = currentDate.getTime();
let currentDate, currentMS;

// Calculations
const msInSec = 1000;
const msInMin = msInSec * 60;
const msInHr = msInMin * 60;
const msInDay = msInHr * 24;
const msInYr = msInDay * 365;

const msArray = [msInDay, msInHr, msInMin, msInSec];

// let diffMS = futureMS - currentMS;
let diffMS;

const leftArray = [0, 0, 0, 0];


// Finally, how do we get live changes?
let interval = setInterval(getTimeLeft, msInSec);
getTimeLeft();

function getTimeLeft() {
    currentDate = new Date();
    currentMS = currentDate.getTime();
    diffMS = futureMS - currentMS;

    if (diffMS < 0) {
        clearInterval(interval);
        dateListing.innerHTML = "Expired!";
        return;
    }

    for (let i = 0; i < leftArray.length; ++i) {
        leftArray[i] = Math.floor(diffMS / msArray[i]);
        diffMS %= msArray[i];
    }

    items.forEach((item, count) => {
        item.innerHTML = showZero(leftArray[count]);
    });
}