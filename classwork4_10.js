// Given a number n ( n >= 0 ) . Print n Fibonacci number. 
// (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)
//     | Input | Output |
//     | --- | ----------- |
//     | 0 | 0 |
//     | 2 | 1 |
//     | 10 | 55 |
//     | 20 | 6765 |

let input = 2;
let num1 = 0,
    num2 = 1;
let outcome = 0;

if (input<0){
    console.log("negatives don't work")
}   else    {
        for(let i = 2; i <=input; i++) {
            outcome = num2 + num1;
            num1 = num2
            num2 = outcome; 
        }
    console.log(outcome);
}

// ---------- DONE ---------- //