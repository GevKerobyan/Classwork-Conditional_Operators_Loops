// Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the
// numbers in a separate array. Arrange them such as from the beginning are the odds and from the
// ending the evens.
// 
//                  Input                                       Output
// [8, 0, 1, ‘heyʼ, 12, 5 , true, ‘2ʼ, null, 7, 3]      [1, 5, 7, 3, 8, 0, 12]
// [8, 8, ‘mehʼ, 6]                                            [8, 8, 6]
// [null, null, 1, undefined, 5, 9, false]                     [1, 5, 9]


let input = [8, 0, 1, 'hey', 12, 5 , true, '2', null, 7, 3];
let numOddArr = [];
let numEvenArr = [];
let numMixArr = [];
let outcome = [];

for(i in input){
    if (typeof(input[i]) === "number"){
        numMixArr.push(input[i])
    }
}

for (g in numMixArr){
    if(numMixArr[g]%2 === 0){
        numEvenArr.push(numMixArr[g]);
    }   else {
        numOddArr.push(numMixArr[g]);
    }
}

outcome = numOddArr.concat(numEvenArr);

console.log(outcome);



// ---------- DONE ---------- //
