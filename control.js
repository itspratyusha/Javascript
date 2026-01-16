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
    //console.log(`for loop ${a}`) or
    console.log("for loop",a)
}
console.log("stop loop")