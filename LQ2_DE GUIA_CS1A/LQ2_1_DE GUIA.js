// no#1
// prompt user for username and password
let userName = prompt("Enter your username:");
let userPassword = prompt("Enter your password:");
let correctPassword = "password123";

// check if the username and password are correct
if (userPassword === correctPassword) {
    alert(`Welcome ${userName}`);
} else {
    alert("Maybe Username or Password is Invalid or Does not Match");
}
