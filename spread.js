Spread_Operator:

let a=[1,2,3,4,5];
let b=[..a];
console.log(b); -- [1,2,3,4,5]
console.log(b[0]) -- 1

Rest_Operator:

function speed(val){
    console.log(val);
}
speed(1,2,3,4,5)
     (OR)
function speed(..val){
    console.log(val);
}      
speed(1,2,3,4,5);