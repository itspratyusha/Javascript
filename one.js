// console.log("hello js") //normal console ma hello js print hunchha
// console.warn("hello warn") //warning jasto dinchha
// console.error("hello error") //error dinchha
//         //single line comment
//         /* multi line comment */
// //variable define
// var fname="pratyusha"
// var lname="shrestha"
// console.log("hello i am ",fname,lname)

// var a //variable declared
// a=3 //assign
// //es6, ECMA script 6, mordern js(2015)=> let, const

// var b=3
// console.log(b) //3
// var b=4
// console.log(b) //4
// //var can be redeclared and reassigned means var chai fheri declare garna paunchha b bhaner ani last ma j call garya chha tyo chai ans aaunxa.

// let c=3
// console.log(c)
// // let c=4
// // console.log(c)
// c=4
// console.log(c)
// //let ma chai aautai operands two taal declare garna mildaina(no redeclare) but reassign garna milchha by not using let.

// const d=3
// console.log(d)
// //const cannot be redeclared and reassign

// let age=16
// console.log(age) //16
// if(true){
// let age=10
// console.log(age) //10
// }
// console.log(age) //16

// //var is global scope, let and const is block scope


//Data type
//1. primitive(string, number, boolean, undefined, null(bug), symbol, bigInt)

let a='sajan'
console.log(typeof a) //string
let b=50.5
console.log(typeof b) //number
let c=true
console.log(typeof c) //boolean
let d
console.log(typeof d) //undefined
let e=null
console.log(typeof e) //null ko datatype object aaunchha which is js bug
console.log('prat'== 'prat') //true hunxa ani yesmai symbol halyo bhane same prat==prat false hunchha

console.log(Symbol('pratsa')==Symbol('stha')) //false  cuz symbol=uniqueness.


//2. non-primitive (array, object)
//array single var ma multi data store
let fruits=['mango', 'banana' , 'apple']
console.log(fruits[1]) //index start with 0
console.log(typeof fruits) //object

//object key value 
let sir=['hari' ,'aaras' ,'ram' ] //[]=array
let sir1={sir: 'hari', son1: 'arras' , son2:'ram'} //curly braces=object (jasle chai define garya array lai )
console.log(sir1.son1) //aaras
console.log(typeof sir1) //object

