//array is a single variable used to store multiple values or collection known as elements
//creating array
//1. literal
let fruits=['mango', 'apple', 'banana', 'kiwi']

//2. using new constructor
let fruits1=new Array('mango','apple','banana','kiwi')

//accesiing an element of array indexing=0
console.log(fruits[1])

//all access (use for of loop)
for(const a of fruits){
    console.log(a)
}
//adding an element in array (push, unshift)
fruits.push('papaya') //push le last ma add garchha element
console.log(fruits)
fruits.unshift('pineapple') //unshift le agadi add garchha element
console.log(fruits)

//removing an element in array (pop, shift)
fruits.pop() //pop le last ma hataunchha element
console.log(fruits)
fruits.shift() //shift le agadi remove garchha element
console.log(fruits)

//replacing an element in array (object[2])
fruits[1]='watermelon' //replace 1 index (apple to watermelon)
console.log(fruits)


//select an element slice (0,3) 0=> 0 indexing bata start, 3=> end
console.log(fruits.slice(0,3))
//adding extra names or replacig both kaam garchha splice le
//add
fruits.splice(1,0,"raspberries") //1(mango) pachhi raspberries thapya
console.log(fruits)
//replace
fruits.splice(1,2,"raspberries") //1(mango) pachhi raspberries thapya ani 2(watermelon lia replace)
console.log(fruits)

//propertyy
console.log(fruits.concat(fruits1)) //fruits ra fruits1 conacat bhara aaunchha
console.log(fruits.join()) // coma gari aaunchha aautai line ma
console.log(fruits.join('>>')) //yo braces bhitra j rakhey tei aaunchha elements ko bich //mango>>banana
console.log(fruits.length) //kati ota element
console.log(fruits.includes('kiwi')) //kiwi chha ki xaina t or f
console.log(fruits.indexOf('kiwi')) //kati index ma chha kiwi
console.log(fruits.sort()) //sort in alphabetic order //banana, kiwi, mnago, rasp
console.log(fruits.reverse()) //sort reverse like //rasp mango kiwi banana


//find, filter, map (VIMP)
//find le chai aauta matra value find garchha like > 20 ma 30 only prints and 90 chai doesnt cuz auta matra dinchha value 
let age=[1,30,20,11,7,90]
let find= age.find(function abc(q)
{
    return q>20
})
console.log(find)
//or easy in 1 line
let afind=age.find(q=>q> 20)
console.log(afind)

//filter le chai sabbai lai array ma print garchha like >20 is 30 & 90 so tyo duitai [30,90] print hunchha
let agefilter=age.filter(a=>a>20)
console.log(agefilter)

//map le chai new array ma lanchha like prev array ma +5 thapesi new array banchha tei print garchha
let agemap=age.map(a=>a+5)
console.log(agemap)

//one by one print garne bhaye map use garda hunchha
age.map(a=>console.log(a+5))
agefilter.map(a=> console.log(a))

//even number using map for one by one and fiter to find all even numbers
//even numbers (a%2==0)
let number=[22,10,7, 61, 40,32 ]
let even= number.filter(a=>a%2==0)
even.map(a=> console.log("map",a))