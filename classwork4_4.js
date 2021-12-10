// . Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
// Input Output
// 21 “21 is a multiple of 3 and 7.”
// 35 “35 is a multiple of 5 and 7.“
// 13 “13 is not a multiple of 3, 5 or 7.”
// 420 “420 is a multiple of 3, 5 and 7.”
// 24 “24 is a multiple of 3.”

function end (num){

let result = [];
let message = "";

if (num%3 === 0) {
    result.push("3");
} 
if (num%7 === 0) {
    result.push("7");
} 
if (num%5 === 0) {
    result.push("5");
} 
if (num%3 !== 0 && num%7 !== 0 && num%5 !== 0) {
    message = num + " is not a multiple of 3, 7 or 5.";
}

if(result.length === 1){
    message = num + " is a multiple of " + result[0] + ".";
}   else if (result.length>1){
        let sequence = [];
            for(let i=0; i<result.length-1;i++){
                sequence.push(" " + result[i]);
            }
            message = num + " is a multiple of" + sequence + " and " + result[result.length-1] + ".";
        }
    console.log(message);
}

end(420);


// ---------- DONE ---------- //