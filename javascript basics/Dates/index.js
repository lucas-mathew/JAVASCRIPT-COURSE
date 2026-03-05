"use strict"

// javascript Dates object help us to works with daates 

 const date = new Date()
  //new Date() without argument(s) creates curent date and time

 console.log(date)




   //Ways of displaying date and time


   //new Date() 
     // This return curent date and time
  
    console.log(new Date())


 // new Date(date string)
   //This create object from date strings

   console.log(new Date("march 5, 2026 17:25"))
   console.log( new Date("2025-03-17"))


   //new Date(year,month,,)
     //This creates a date object with specified date and time

    let yearMonth = new Date(2028,18,16,40,20,2,7) //This should includes Numbers


   //NOTE 
       //JavaScript counts month from zero not from one 
         // January = 0;
         //js It does not return an error if the value of moth is greater than maximum  but it may cause overflow to the next year
   

    //i can use new Date(year,moth,...) format
       // to get the display which i want
         // like 2025 14

    //BUT month cannot be ommited which is second parameter 
      // so if i put one parameter js treate it as millseconds

    console.log(new Date(2026,3))// This return expected format which is year and month
    console.log(new Date(2026)) // This return milseconds not even year


    //if year parameter takes  one or two digits 
      // js interprete like this below:
      //(12) -- 19xx  so it interprete 1912
      //(8)  --19xx  so it interprete 1908

      console.log(new Date(6,3,17)) //This return march 1906

      console.log(new Date(24 * 60 * 60 * 1000))
      console.log(new Date(86400000))
      console.log(new Date(0))

      


const myArr =[1,2,34,5,6,7,8]
console.log(myArr[myArr.length - 1])

