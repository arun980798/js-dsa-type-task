


// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
 
let count = 0;
let num = null;

for (let i = 0; i < 5; i++) {
  num = prompt("Enter a positive or negative number:");
  if (num < 0) {
    count++;
  }
}

console.log(`Your number of positive numbers is: ${count}`);




