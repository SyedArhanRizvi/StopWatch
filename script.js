// let displayTime = document.getElementsByClassName("display");
// let reset = document.getElementsByClassName("reset");
// let play = document.querySelector(".play")
// let stop = document.getElementsByClassName("stop");
// let timer = null;


// // Array Creation :
// let [seconds, minutes, hours] = [0, 0, 0];


// // Click Events :
// play.addEventListener("click", watchStart);


// // Test Case 1 :
// function timing() {
//     seconds++;
//     if(seconds == 60) {
//         seconds = 0;
//         minutes ++;
//         if(minutes == 60) {
//             minutes = 0;
//             hours ++;
//         }
//     }
//     displayTime.innerHTML = seconds + ":" + minutes + ":" + hours; 
// }

// // Test Case 2 : 
// function watchStart() {
//     if(timer != null) {
//         clearInterval(timer);
//     }
//     timer = setInterval(timing, 1000);
// }
let displayTime = document.querySelector(".display");
let reset = document.querySelector(".reset");
let play = document.querySelector(".play");
let stop = document.querySelector(".stop");
let timer = null;

// Array Creation :
let [seconds, minutes, hours] = [0, 0, 0];

// Click Events :
play.addEventListener("click", watchStart);
reset.addEventListener("click", watchReset);
stop.addEventListener("click", watchStop);

// Function to update the display
function updateDisplay() {
    let formattedTime = 
        String(hours).padStart(2, '0') + ":" + 
        String(minutes).padStart(2, '0') + ":" + 
        String(seconds).padStart(2, '0');
    displayTime.innerHTML = formattedTime;
}

// Test Case 1 :
function timing() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

// Test Case 2 :
function watchStart() {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(timing, 1000);
}

// Function to stop the timer
function watchStop() {
    if (timer != null) {
        clearInterval(timer);
        timer = null;
    }
}

// Function to reset the timer
function watchReset() {
    clearInterval(timer);
    timer = null;
    [seconds, minutes, hours] = [0, 0, 0];
    updateDisplay();
}