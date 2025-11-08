


// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

let total = 0
for (let i = 0; i <= 30; i++) {
  if (i % 2 !== 0) {
    total += i;
  }

}

console.log(total)