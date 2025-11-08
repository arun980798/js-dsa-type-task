



// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".


let con = false;
let count = 0
let word = prompt("give your words ");
con = word.includes("stop")
count++

while (!con) {
  word = prompt("give your words ");
  count++
  con = word.includes("stop");
  if (con) {
    break;
  }
}
console.log(count)