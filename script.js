



// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”




let balance = 1000 ;
let count = 0 ;
let withdrawal = null;

for(let i = 0 ;i<3;i++){
 withdrawal= prompt("give withdrawal ammount :");
 if(balance > withdrawal){
  balance = balance -withdrawal;
  console.log(balance)
 }
 else{
  console.log(`insufficient balance`)
  console.log(`your balance is :${balance}`)
  break;
 }
}