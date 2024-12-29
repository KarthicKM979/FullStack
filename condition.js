const { Timestamp } = require("mongodb")

Conditional_Statements:

if 
if else 
if elseif else 
nested if else
switch

--------------------------------------------

if(condition){

}
else{
    if(condition){

    }
    else{

    }
} -- valid 

-------------------------------------------

if(x%3==0 && x%5==0)
{
    console.log("hi hello");
}
else if(x%3==0){
    console.log("hi");
}
else{
    console.log("Hello");
}

-------------------------------------------

switch(choice){
    case 1:
        statements;
        break;
    case 2:
        statements;
        break;
    default:  //optional
        statements;  
        break;    
}

the break is not necessary as it executes all cases until it finds a break statement..

--------------------------------------------

LOOPS:

let a=1
for(;;){
    console.log("c");
} -- c infinite Times 

let a=1
for(console.log("a");a<=3;console.log("b"))
{
    console.log("c");
    a++;
} -- acbcbcb

