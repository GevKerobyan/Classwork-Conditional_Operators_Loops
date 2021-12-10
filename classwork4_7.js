// Insert a digit and a number. Check whether the digits contains in the number or not.
//      Input       Output
//      5, 2463     ‘Noʼ
//      4, 6        ‘Noʼ
//      8, 45689    ‘Yesʼ


// LONG METHOD

let x = 555;
let y = 4654684555164;
let str = y.toString();
let input = x.toString();
let result = str.includes(input);

if (result) {
    console.log("yes");
}   else if (!result) {
    console.log("no");
}

// SHORT METHOD

// let x = 5555;
// let y = 4654684555164;
// if(y.toString().includes(x.toString())){
//     console.log("yes");
// } else {
//     console.log("no");
// }

// ---------- DONE ---------- //