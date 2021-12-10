// Given an array of strings and numbers. Print the number of integers and the number of strings in the array.

//              Input                       Output

//      [1, ‘10ʼ, ‘hiʼ, 2, 3]       “Numbers: 3, Strings: 2”
// [1, 4, ‘i am a stringʼ, ‘456ʼ]   “Numbers: 2, Strings: 2”

let input = [1, 4, 'i am a string', '456'];
let output = {
    Numbers: 0,
    Strings: 0,
};
for(let i = 0; i < input.length; i++){
    if (typeof(input[i]) === "number"){
        output.Numbers +=1; 
    } else {
        output.Strings += 1;
    }
}
console.log(output);



// ---------- DONE ---------- //
