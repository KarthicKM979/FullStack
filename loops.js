LOOPS:

let a=1
for(;;){
    console.log("c");
} -- c infinite Times 

---------------------------------------

let a=1
for(console.log("a");a<=3;console.log("b"))
{
    console.log("c");
    a++;
} -- acbcbcb

----------------------------------------

let a=1
for(a=1;a<100;a++);
console.log("hi");
console.log(a); -- hi 100

-------------------------------------------

arrow functions:

let apple = () => console.log("Hello");
apple();

let orange = () => "Hello"
console.log(orange);

let banana = () => {
    console.log("Hello");
    return 3+3
}
console.log(banana())