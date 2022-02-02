// //some console commands.
// console.time('random label');
// // console.log('hello world');

// // console.warn('this is a warning');
// // console.error('this is an error');
// // console.clear();
// console.timeEnd('random label');

//DAY2 Variables,let and constant:
//variables:containers to store data values.
// numbers
var number1=22;
var number2=78;
console.log(number1+number2);
 
// Strings
var name='Gautam';
var name2="luffy is protagonist of onepiece"
console.log(name2);
//objects
var marks={
    gautam:10,
    luffy:99,
    zoro:-69
}
console.log(marks);
//Booleans
// var a=true,b=false;
// console.log(a,b);
//undefined and null
var und=undefined;
var no=null;
console.log(und,no);

//there are two types of dataypes in JavaScript:
//1.primitive datatypes:undefined,null,number,string,boolean,symbol
//2.reference datatypes:Arrays and objects

//ARRAYS:

var arr=[1,2,3,4,"onigiri"];
console.log(arr);

//operators in JavaScript:
var a=110,b=50;
console.log("The value of a+b is",a+b);
console.log("The value of a-b is",a-b);
console.log("The value of a/b is",a/b);
console.log("The value of a%b is",a%b);
console.log(a==b);
console.log(a>b);
console.log(a<b);

//Functions in Javascript

// function avg(a,b){
//     return (a+b)/2;
// }
// console.log(avg(5,10));

//Conditional in javascript;

var age=15;
if (age>=18) {
    console.log("eligible to vote");
}
else{
    console.log("not eligible");
}
//LOOPS in js:
var arr1=[1,2,3,4,11];
// for (let index = 0; index < arr1.length; index++) {
//     console.log( arr1[index]);
    
// }

arr1.forEach(function(element){
    console.log(element);
})
// let is a block scope variable 
//used in modernday js.
//const is a js variable keyword which is immutable once declared.
// let j=0;
// while (j<arr1.length) {
//     console.log(arr[j]);
// }
//DATES IN JS
let mydate=new Date();
console.log(mydate);
console.log(mydate.getTime());
console.log(mydate.getDay());
console.log(mydate.getFullYear());
console.log(mydate.getMonth());

//DOM (document object model) Manipulation in JS;


