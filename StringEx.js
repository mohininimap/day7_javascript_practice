


// let movie={
//     title:"a",
//     releaseYear:2018,
//     rating:4.5,
//     director:"b"
// }

// function showString(obj){
//     for(let key in obj){
//         if(typeof obj[key]==="string"){
//           console.log(key+" "+obj[key])
//         }
//     }
// }

// showString(movie);
// ==========================
// * pattern

// function printStar(rows){
//     let pattern="";
// for(let i=1;i<=rows;i++){
// pattern+="*"
// document.write(pattern+"<br/>")
// }
// }

// printStar(10)

// =========================
//prime number multiple by itself

// function primeNumber(nums){
// for(let num=2;num<=nums;num++){
//     let isPrime=true;
//     for(let factor=2;factor<num;factor++){
//         if(num%factor===0){
//             isPrime=false;
//             break;
//         }
//     }
//     if(isPrime) console.log(num)
// }
// }
// primeNumber(10);
// ========================================

// function primeNumber(nums){

// for(let num=2;num<=nums;num++){
//     let isPrime=true;
// if(num%2===0){
// isPrime=false;
// }
// }
// }

// primeNumber(10)
// =======================

// let add = function  (arr){
//    var num = 7 
//     for(var i of arr){
//         console.log(value)
//         var value = 'hi'
//    // console.log(value)
//    }
//    console.log(value)
// }
// let arr = [1,2]
// add(arr)

// console.log(typeof(add))

// ==========================

//In case of let
// for(let i=0;i<4;i++){
//     console.log(i)
// }
// console.log("outside for loop i in let ->"+i)

//here o/p
// 0
// 1
// 2
// 3
// and Uncaught ReferenceError: i is not defined
// ============================
// In case of var
// let a=[];
// for( i=0;i<4;i++){
//     console.log(i)
//     a.push(i)
// }

// // for (var i in a){
// //    console.log(i) 
// // }

// console.log("outside for loop i in let ->"+i)

// console.log("values->"+a)

// here o/p
// 0
// 1
// 2
// 3
// outside for loop i in let ->4
// =================================

// const circle={
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     isVisible:true,
//     draw:function(){
//         console.log('draw');
//     }
// };

// circle.draw() //Method

// Here is a circle object.Here is a function is a part of object then call that function as method

// =====================================================
// Factory function
// Definition=>When a function returns an object,we call it a factory function.It can produce object instance
// without new keyword or classess.
//here use camel notation
// function createCircle(radius){
// return{
//     radius,
//     draw(){
//         console.log('draw')
//     }
// };
// }

// const circle1=createCircle(1);
// console.log(circle1)

// const circle2=createCircle(2);
// console.log(circle2)

// =======================
// factory function another example

// function mobile(){
//     return{
//         model:'Galaxy',
//         price:function(){
//             // return ("Price :Rs. 3000");
//             //  or
//             return ("Price :Rs. 3000");
//         }
//     }
// }


// var samsung=mobile();
// document.write(samsung.model+ " " +samsung.price());

// ================================
// Constructor Function
//Start with capital letter
//using new keyword
//instead of return use this keyword


// function Circle(radius){
// this.radius=radius;
// this.draw=function(){
//     console.log('draw');
// }

// }

// const circle=new Circle(1)
// =============================

// Dynamic Nature of Object

// const circle={
//     radius:1
// };

// circle={};
// circle.color='yellow';

// circle.draw=function(){}

// delete circle.color;
// delete circle.draw();
// console.log(circle)

// Here come error when trying to reassign to const
//  Assignment to constant variable.
//     at StringEx.js:191:7
// (anonymous) @ StringEx.js:191

// =========================
//Switch case Example
// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }

// console.log(day)
// ==========================
// Object 
// const car = {type:"Fiat", model:"500", color:"white"};

// console.log(car.color)

// //for in loop with object
// for(let key in car){
//     console.log(key+" "+car[key])
// }











