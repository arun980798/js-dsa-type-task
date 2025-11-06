


// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

let hardPass = "harsh";

let currentPass = prompt("Enter your password:");

if (currentPass === null || currentPass === "") {
  console.log("Please re-enter your password.");
} else {
  console.log("Correct password.");
}
