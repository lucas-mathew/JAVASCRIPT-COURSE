  const products1 = [
      {id:"01",name:"Nails",stock:1, buyPrice:1000, salePrice:2000},
      {id:"02",name:"Roofs",stock:2, buyPrice:10000, salePrice:20000},
      {id:"03",name:"Cement",stock:10, buyPrice:10000, salePrice:20000}

    ]

  const products2 = [
      {id:"01",name:"Misumari",stock:1, buyPrice:1000, salePrice:2000},
      {id:"02",name:"Mabati",stock:2, buyPrice:10000, salePrice:20000},
      {id:"03",name:"Simenti",stock:10, buyPrice:10000, salePrice:20000}

    ]
let concatinated = products1.concat(products2) // Also arrays can concatinadet like strings

concatinated.forEach((element,index) => {
    
})

console.log(concatinated.length)
console.log(concatinated)





 //Arrays search
 const cars = [
   "Volvo",
   "Subaru",
   "Toyota"
 ]

 let myCar = cars.indexOf("Volvo") + 1 //This is method to get the position of an item
 console.log(myCar)
 
 let lastCar = cars.lastIndexOf("Toyota") + 1;
  console.log(lastCar)

 console.log(cars.includes("Volvo"))  //includes() alows us to cheak the presence of some element inside the array




 const numbers = [1,2,3,4,5,6]
  
 function myFunc(value,index,arrays){
      return value > 5
 }

 let firstValue = numbers.find(myFunc) 
 console.log(firstValue)

 function getCar(value,index,array) //This function must takes three value like it looks likes
 {  
    return value.length === 6
 }

 console.log(cars.find(getCar)) // find() return the first value  sartisfied in  the condition

 
 function findPosition(value,index,array){
    return value.length === 6
 }

 console.log(cars.findIndex(findPosition))
 
 //Note   findIndex return the index of of the first value sartisfied inthe condition

 function getFirstElementFromEnd(value,index,array){
    return value.length === 6
 }

 console.log(cars.findLast(getFirstElementFromEnd))

 function getIndexFromLast(value,index,array){
    return value.length === 6
 }

 console.log(cars.findLastIndex(getIndexFromLast))
   //findLastIndex() return the index 



   //Length concept
   const students = [
      "juma",
      "john",
      "Doe",
   ]

   students.length

   console.log(students[students.length - 1])

   
   //Mathod to know is this the array or not is to use 
   // Array.isArray()

  console.log( Array.isArray(students))
  console.log(typeof students)

