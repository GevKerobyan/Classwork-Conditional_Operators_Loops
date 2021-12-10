// Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the
// words from the array.

// Input                                                                                Output

// “_, we have a _.” [“Houston”, “problem”]                                             “Houston, we have a problem.”
// “If at _ you donʼt _, try, try _.” [“first”, “succeed”, “again”]                     “If at first you donʼt succeed, try, try again.”
// “May the _ _ _ _.” [“Force”, “be”, “with”, “you”]                                    “May the Force be with you.”

let input1 = "_, we have a _.";
let input2 = ["Houston", "problem"];
let g = 0;

for(let i = 0; i < input1.length; i++){
    if(input1[i] === "_"){
       
      
        input1.replace("_", input2[g]);
        
        g++;

    } else continue;

}

console.log(input1);

// ---------- NOT DONE ---------- // (NEED EXPLENATION);

// if (input1.indexOf("_") !== -1) {
//     let input1Arr = input1.split(" ");
//     console.log(input1Arr);
//     for(let i = 0; i<input1Arr.length; i++){
//             console.log(i);
//             console.log(input2[i]);
//         }
// }


// for(i = 0; i,input1Arr.length; i++){
//     console.log(input1Arr[i]);
//     if (input1Arr[i].indexOf("_") !== -1); {
//         input1Arr[i].replace("_", input2[i]);
//     }    
// }
// console.log(input1Arr);

// ---------- NOT DONE ---------- //