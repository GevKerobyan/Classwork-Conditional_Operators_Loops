// Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a
// new array where each element from that array is placed under the index of its value. Start from the
// smallest value and end with the biggest one. If there are missing values, put in its places undefined.

// | Input              |               Output |

// | ---------          |               ----------- |

// | [4, 3, 0, 9]       |               [0, undefined, undefined, 3, 4, undefined, undefined, undefined, undefined, 9] |


let input = [4, 3, 0, 9];
let largest = 0;
let output =[];

for(let i = 0; i < input.length; i++){
    if(input[i]>largest){
        largest = input[i];
    } else continue;
}

for (let x = 0; x <input.length; x++){
    if(typeof(input[x]) === "number"){
        let ind = input[x];
        output[ind] = input[x];
    } else {
        output[x] = "undefined";
    }
}

console.log(output);

// ---------- DONE ---------- //

