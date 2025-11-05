// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

let age = +prompt("give your age");
console.log(age)



if (age === null || age === undefined) {
  console.error("give the output")
}
else if (isNaN(age)) {
  console.error("give the age");
}
else {
  if (age < 18) {
    console.log(" you cant vote ")
  }
  else {
    console.log("now you can vote")
  }

}
