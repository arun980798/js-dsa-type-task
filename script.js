

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.


let con = true;
let num = null;





while (con) {

  num = prompt("give the number");

  if (num === null || num === undefined || num === "") {
    continue
  }

  num = num.trim();
  if (num % 2 === 0) {
    console.log(`number is ${num}`);
    con = false;
  }



}

