//key ra value ko pairing lai object bhaninchha.. {key: value}
let personDetails={
    id:1,
    name:'pratsa',
    phone: 123456
}
console.log(personDetails.name)
console.log(personDetails.phone)


//json (object inside array concept)
let studentDetails=[
    {id:1, name:"pratsa", edu:'masters'},
    {id:2, name:"nisha", edu:'bachelors'},
    {id:3, name:"shivam", edu:'masters'},
]
console.log(studentDetails[1].name, studentDetails[2].edu) //specific indexing print
studentDetails.map(a=>console.log(a.name,a.edu, a.id))  //print all using map
studentDetails.map(a=>console.log(a)) //a matra lekhn

let filterdata= studentDetails.filter(a=>a.edu=='b')
filterdata.map(a=> console.log(a.name))