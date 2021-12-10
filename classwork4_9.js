// Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.
//      Input       Output
//      401         ‘yesʼ
//      63          ‘noʼ


let input = 63;
let prime = true;

if (input === 1) {
    console.log("1 doesn't count");
}
else if (input > 1) {
    for (let i = 2; i <= input/2; i++) {
        if (input % i == 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log('"yes"');
    } else {
        console.log('"no"');
    }
    } else {
    console.log("negatives don't count");
}


// ---------- DONE ---------- //
