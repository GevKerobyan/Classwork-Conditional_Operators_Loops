// . Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of
//     the angles of a triangle equals 180 degrees).
//     Input Output
//     45, 90 45
//     30, 30 120
//     75, 25 80
    
let first = 55;
let second = 45;
let third = 180 - (first+second);
if(third <=0){
    console.log("Incorrect data")
} else console.log(third);

// ---------- DONE ---------- //
