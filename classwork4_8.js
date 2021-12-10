// Enter a number. Reverse its first and last digits. Print the new number.
//      Input       Output
//        2           2
//       13          31
//   895796      695798

let input = 1354651669;

let inStr = input.toString();
console.log(inStr);

let middle = inStr.slice(1, -1);

let output = inStr[inStr.length-1] + middle + inStr[0];
// Tried to do with let output = inStr[-1] + middle + inStr[0], but inStr[-1] always returned undefined.

console.log(output);


// ---------- DONE ---------- //
