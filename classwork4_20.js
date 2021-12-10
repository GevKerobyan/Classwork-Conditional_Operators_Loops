// Print the following pattern:
//      1
//      2 6
//      3 7 10
//      4 8 11 13
//      5 9 12 14 15



let x = 0;
let g;

let arr = [];
// let output = 0;

let param1 = x;
let param2 = x+g;

for (let i = 1; i <= 15; i++){
   arr.push(i);
}

let arrG = [];

for (g = 4; g >= 0; g--)  {

    arrG.push(arr[x+g])

    x += 1;
}

console.log(arrG);
console.log(arr);

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 



// output.push(x += 1); 
// output.push(x += 1, x+4);
// output.push(x += 1, x+4, x+3);
// output.push(x += 1, x+4, x+3, x+2);
// output.push(x += 1, x+4, x+3, x+2, x+1);
// let outputSplit = output.slice("");
// let outputJoin = output.join("\n");

// console.log(output);
