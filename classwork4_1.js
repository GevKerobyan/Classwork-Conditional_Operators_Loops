// 1. Given a number. Print “odd” if the number is odd and “even” if itʼs even.
// Input Output
// 125 “odd”
// 35 “odd”
// 20 “even”

function oddEven (x){
    let y;
    if(typeof(x) === "number") {
        if (x%2===0) {
          y = "even";  
        }else{
            y = "odd";
        }
    }else{
        y = "not a number";
    }
    console.log(y);
}

oddEven(116876);

// ---------- DONE ---------- //
