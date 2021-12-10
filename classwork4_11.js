// Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the
// sum, print the quotient, otherwise print the remainder.

//      Input           Output

//      1233        ‘Quotient is 2.ʼ
//      5           ‘Quotient is 1.ʼ
//      0           ‘Cannot calculate.ʼ
//      455         ‘Remainder is 2.ʼ


let input = 0;

let inStr = input.toString(10);
let inArr = inStr.split("");

let message;

let numArr = [];

for(let i = 0; i < inArr.length; i++){
     numArr[i] = Number(inArr[i]);
}

let sum = 0;
let prod = 1;

for(let x = 0; x<numArr.length; x++){
    sum += numArr[x];
    prod *= numArr[x];
}

if(prod%sum == 0){
    message = "Quotent is " + prod/sum;
} else {
    message = "Remainder is " + prod%sum;
}
if (input === 0) {
    message = "Can't calculate 0s";
}

console.log(message);

// ---------- DONE ---------- //


