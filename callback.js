function dog(cat){
    setTimeout(() => {
        console.log("JACK the dog");
        callback();
    },2000);
}

function cat(){
    console.log("ROSE the cat");
}
dog(cat)


function attendance(lunch){
    setTimeout(() => {
        console.log("Attendance");
        callback();
    },2000);
}
function lunch(home){
    setTimeout(() => {
        console.log("Lunch Time");
        callback();
    },2000);
}
function home(){
    console.log("arrived home");
}
attendance(()=>{
    lunch(() =>
        home(() => 
            console.log("Day completed")
        )
    )
})