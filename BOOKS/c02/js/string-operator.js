const firstName = "Muhammad";
const lastName = "Faza";
const greeting = "Hello";

const elGreeting = document.getElementById("greeting");

const fullName = firstName + " " + lastName;
const fullMessage = greeting + " " + fullName + "!";
elGreeting.textContent = fullMessage;