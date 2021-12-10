// Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
// row and print them as an array.

//                      Input                                       Output

//      [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]            [12, 1, 13, 15]
//  [[8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]]         [45, 8, 0, -6]
//              [[1], [2], [3], [4]]                             [1, 2, 3, 4]

// let input = [
//     [3, 4, 5],
//     [1, 0, 0],
//     [4, 5, 4],
//     [8, 8, -1]
// ];

let input = [
    [8, 35, 2],
    [8],
    [5, 6, -5 , -6],
    [1, 3, -9, 0,-1]
];
let count;
let sum=[];
for ( i in input ){
    count = 0;
    for( g in input[i] ){
        count += input[i][g];
    }
sum.push(count);
}
console.log(sum);


// ---------- DONE ---------- //


