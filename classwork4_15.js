// Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of their lengths.

//                          Input                                               Output
// [“anymore”, “raven”, “me”, “communicate”]                                      13
// ['wish', 'slightly', 'understand', 'longer', 'unexpected', 'heart']            14

let input = ['wish', 'slightly', 'understand', 'longer', 'unexpected', 'heart'];

let max = 0;
let min = input[0].length;

let output;

for(let i = 0; i < input.length; i++) {

    if(input[i].length > max) {
        max = input[i].length;
    }

    if(input[i].length < min){
        min = input[i].length;
    }
}

output = max + min;

console.log(output);

// ---------- DONE ---------- //