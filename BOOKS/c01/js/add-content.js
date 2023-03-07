const today = new Date();
const hoursNow = today.getHours();
let greeting;

if (hoursNow > 18) {
    greeting = "Good evening!";
} else if (hoursNow > 12) {
    greeting = "Good afternoon!";
} else if (hoursNow > 0) {
    greeting = "Good morning!";
} else {
    greeting = "Welcome!";
}

document.write('<h3>' + greeting + '</h3>');