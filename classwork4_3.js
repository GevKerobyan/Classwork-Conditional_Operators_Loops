// Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If
// the last digit of the inserted number is 0, number remains the same.
// Input Output
// 367 736
// 1002 2100
// 250 250
// 8 8

let num = 1002;
let lastDigit = num%10;
num = (num - lastDigit)/10;
console.log(num);
num = num + "";
console.log(typeof(num));
let outcome = lastDigit + num;
outcome = +outcome;
console.log(outcome);


// ---------- DONE ---------- //



