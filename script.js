

// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”


const pass = "arun";

let count = 0;

let currentPass = prompt("Enter the password:");
++count;

if (currentPass === pass) {
  console.log("Welcome");
} else {
  for (let i = count; i < 3; i++) {
    currentPass = prompt("Enter the password:");
    ++count;

    if (currentPass === pass) {
      console.log("Welcome");
      break;
    }
  }
}
