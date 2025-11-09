




// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.






let startPoint = prompt("starting point");
let endPoint = prompt("end point");


if (startPoint === null || startPoint === undefined || endPoint === null || endPoint === undefined || startPoint === "" || endPoint === "") {
  console.error("plese enter the valid input")
}
else {
  +startPoint;
  +endPoint
  if (isNaN(startPoint) || isNaN(endPoint)) {
    console.error("plese enter the valid input")
  }
  else if (startPoint > endPoint) {
    console.error("plese enter the valid input")
  }
  else {
    while (startPoint <= endPoint) {
      console.log(startPoint);
      ++startPoint;
    }
  }
}