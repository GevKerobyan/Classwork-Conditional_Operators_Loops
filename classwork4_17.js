// Given a sentence as a string. Split it according to space and comma and create an array consisting of
// the words of the array. The last word should not contain the last . or ! .

//                              Input                                                       Output

//                  “May the Force be with you.”                            [“May”, “the”, “Force”, “be”, “with”, “you”]
//      “Keep your friends close, but your enemies closer.”     [“Keep”, “your”, “friends”, “close”, “but”, “your”, “enemies”, “closer”]

let input = "Keep your friends close, but your enemies closer.";
let output;
if(input[input.length-1] === "."){
    input = input.slice(0, -1);
    console.log(input);
    output = input.split(" "); 
}
console.log(output);


// ---------- DONE ---------- //
