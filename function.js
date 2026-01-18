//function in js =>block of code for reusuable and perform special task
//function declared
function abc()
{
    console.log("hello, it is function")
}
//must call function
abc()

// function with arguments(receive garne) and parameters(pathaune)
function greeting(a){ //parameter
    console.log("good",a)
}
//arguments
greeting('morning') 
greeting('evening')
greeting('night')
greeting()

// function with arguments(receive garne) and parameters(pathaune)
function sum(a,b) //parameter
{
    console.log(a+b)
}
//arguments
sum(20,1)
sum(9324,6) 
//default parameters
function multi(a=5,b=3){
    console.log(a*b)
}
multi(2,5)
multi()

//function with return value
function shop(amt){
    return amt
}
let result=shop(1500)
console.log(result> 1000 ? "went to shop": "stay at home")

function sum2(a,b){
    return a+b
}
console.log(sum2(3,7))

function efg(){
    console.log("code execute")
    return "hello" //return can be used only once and return means end of function 
    // so braces bhitra return pachhi kei lekhne haina
    console.log("code not executed") //this wont execute cuz of return above it
}
console.log(efg())

//ES5 function expression, (single variable store in a function)
//single parameter (takes only one input)
let sum4=function(a)
{
    return a*a
}
console.log(sum4(4))

//multi parameter (takes more than 1 input)
let sum6= function(a,b){
    return a+b
}
console.log(sum6(4,5))


//arrow function(es6) better than function expression cuz one line mai code hunchha
//single parameter
let sum7=(a)=> a*a; console.log(sum7(5))
//multi parameter
let sum8=(a,b)=> a*b; console.log(sum8(5,6))
//no parameter
let sum9=()=> "hello"; console.log(sum9())
//with return value
let sum10=(a,b)=>{
    return a+b
   
}
console.log(sum10(5,6))
