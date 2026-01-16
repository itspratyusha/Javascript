//js operators
//arithmentic operators: =,-,*,/,%,++,--,**(exponentiation)

// let a,b
// a=10;
// b=3;
// console.log("a+b=",a+b)
// console.log("a-b=",a-b)
// console.log("a*b=",a*b)
// console.log("a/b=",a/b)
// console.log("a%b=",a%b)
// console.log("a**b=",a**b) //power ko kaam garchha

// //pre and post increment
// console.log("increment a",++a) //a=a+1 //add 1 first then use a
// console.log("increment a",a++) //11output //use a first then add 1
// console.log(a) //12 

//assignment operator: =,+=,-=,*=,/=,%=
// let a=1;
// let b=3;
// console.log(a+=b) //a=a+b //1+3=4
// console.log(a-=b) //a=a-b //4-3=1
// console.log(a*=b) //a=a*b //1*3=3
// console.log(a/=b) //a=a/b //3/3=1
// console.log(a%=b) //a=a%b //1%3=1

// datatype and value check

//comparison soperator: ==, ===, !=, !==, >,<,>=,<=
// console.log(3='3') //true (checks only value so 'string' ra num no farak)
// console.log(3==='3') //false (value+datatype check)
// console.log(3!=4) //true
// console.log(3!=='3') //true
// console.log(3>4) //false
// console.log(3<3) //true
// console.log(3>=3) //true
// console.log(3<=2) //false


//logical operator: &&, ||, !
//(AND)
console.log(true && true) //ttrue
console.log("admin"=="admin" && "pass"=="pass") //true
//or
console.log(true || true) //true
console.log(false || false) //false
//not
console.log(!true) //false
console.log(!false) //true

//ternary operator: condition ? true: false
let age=16
let result= age>=18 ? "you can vote": "you cannot vote"
console.log(result)

//Data conversion
//1.implicit (automatic conversion by js engine)
//2. explicit (manual conversion by programmer)

//implicit (add garda concatenate hunchha tara - garda subtract.. js automatic conversion )
console.log('5'+3) //53 
console.log('5'-3) //2

//explicit (programmer le convert garya manually)
console.log(parseInt(3.4)) //3
console.log(Number(true)) //1 aaunchha
console.log(String(123)) //number dekhaunchha tara datatype string

