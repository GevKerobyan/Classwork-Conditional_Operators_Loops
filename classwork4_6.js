// Find the sign of product of three numbers without multiplication operator. Display the specified sign.

//             Input               Output

//           -14, 5, 0          “unsigned”
//           -8, 9, -6              “+”
//            4, 19, -2             “-”


let input = [-14, 14, 15];
let signCount = 0;
let inputString

for (let i= 0; i < input.length; i++) {
    if (input[i] === 0) {
        console.log("0s don't work")
        break;
    }

    inputString = input[i].toString();
    
    if (inputString.charAt(0) === "-") {
            signCount++;

        } 
};

if (signCount%2 === 0) {
    console.log("Product of signs is " + '"+"');
}   else {
        console.log("Product of signs is " + '"-"');
}


// ---------- DONE ---------- //