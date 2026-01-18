let mark=91
if(mark<100 && mark> 80)
{
    console.log("A+")
}
else if(mark<80 && mark> 60)
{
    console.log("B+")
}
else{
    console.log("failed")
}

//date
console.log(new Date()) //whole date aaunxa
//tukryaunu paryo bhane function call like getfullyear(), getmonth(),getday(),gethour()
console.log(new Date().getFullYear()) //()- for function call
console.log(new Date().getMonth()+1) //default 0 index bata suru hunchha jan so add +1
console.log(new Date().getDay()+1) ////default 0 index bata suru hunchha sunday so add +1 garyo bhane sunday lai 1 ganinchha
console.log(new Date().getDate())
console.log(new Date().getHours())
console.log(new Date().getMinutes())

//switch case

switch(new Date().getDay()){
    case 0: console.log("today is sun"); break
    case 1: console.log("today is mon"); break
    case 2: console.log("today is tue"); break
    case 3: console.log("today is wed"); break
    case 4: console.log("today is thu"); break
    case 5: console.log("today is fri"); break
    case 6: console.log("today is sat"); break
    default: console.log("unknown")
}

//loop(for, while, do while, for in, for of)
//for
for(let a=1; a<10; a++){
    //if
    if(a==3){
        console.log("happy birthday 3")
         continue //<10 nabhaye samma loop garchha ni stops
        // break (happy birthday 3 pachhi stop loop hunchha)
    }
    //console.log(`for loop ${a}`) or
    console.log("for loop",a)
}
console.log("stop loop")

//nested loop
for(let a=1; a<3; a++){
    console.log("outer loop", a)
    for(let b=1;b<3; b++){
        console.log("inner loop",b)
    }
}

//while
//let a=1
// while(a<5){
//     console.log("while loop", a)
//     a++ // incase 1 loop will hang comp
// }

//do while loop
let a=0;
do{
    console.log("do while loop",a)
    a++
}while (a<10)

    
    //for of, for in loop(array)
let fruits=['mango', 'apple', 'kiwi'] 
for(const a of fruits){ //of le value bhanchha
    console.log(a)
}
for(const a in fruits){ //in le index 
    console.log(a)
}
