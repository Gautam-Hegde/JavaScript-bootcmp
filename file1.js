
// let d=new Date();
// function myfunc() {
//     alert("hey there!");
// }
// document.getElementById("test").addEventListener=(onclick,myfunc());
// console.log(d.getFullYear());
// let arr=new Array(5,4);
// let array=[];
// console.log(arr);
// console.log(array);

// let i=0;
// while(i<=8){
//     arr[i]=i++;
// }
// console.log(arr);
// c=("9");
// console.log(c);
// let a=5;
// var b=4;
// const pi=3.14159;
// let mname="gautam";
// console.log(mname);
// let newname=mname.lastIndexOf("a",mname);
// console.log(newname);
// console.log(mname.length);
// newname=mname.slice(1,4);
// console.log(newname);
// let arr=[10,20,30,40];
// console.log(arr)
// console.log("first element is" ,arr[0]);
// console.log("second element is" ,arr[1]);
// console.log("third element is" ,arr[2]);
// console.log("fourth element is" ,arr[3]);
// console.log("fifth element is" ,arr[4]);
// console.log("test")
// console.log(typeof(c),typeof(mname),typeof(arr));



// console.log(a);
// console.log(b);
// console.log(c);
//  a=5.5;
// console.log(a);
// objects in jscript
// const person={
// name :"gautam",
// age :19,
// designation : "student"
// };
// console.log(person);
// console.log(person['name']);
// console.log(person.age);
// console.log(person.designation);

//spread operator;

// var array1=[1,2,3,4,5];
// var array2=[...array1,33,44,55,...array1];
// console.log(array1);
// console.log(array2);
//functions,func expressions ,arrow functions
// function sumofa(number1,number2){
//     console.log(number1+number2);
//     // return;
// }
// let something=function(num1,num2)
// {
//     console.log(num1+num2);
// }

// function facto(number) {
//     if(number==1 || number==0){
//         return 1;
//     }
//     return number*facto(number-1);
// }
// function asd(number) 
// {
//     if(number==1 || number==0){
//         return 1;
//     }
//     return number*asd(number-1);
    
// }
    
// foreach method 
// const myarray=[1,2,3,4,5,6,7,8,9,10];
// myarray.forEach(asd);

// myarray.forEach(function asdyy(number,index){console.log(`number is ${number} and index is ${index}`);});

//map method and filter method
// const myarray=[1,3,4,2,11];
// function myfunc(number,index){
//     return number * index;
// }
// let newarray=myarray.map(myfunc);
 
// console.log(newarray);
// const myarray=[1,2,3,4,5,6,7,8,9,10,13];
// function isprime(number){
//     let flag=1;
//     for(let i=2;i*i<=number;i++){
//         if(number%i===0)
//     //   return false;
//       flag=0;
//     }
//     return flag;
//     // return number%2===0;
// }
// const newarray=myarray.filter(isprime);
// console.log(newarray);



//reduce method:

// const myarray=[3,54,22,11];

// let newarray=myarray.reduce(function(accumulator,currentvalue){return accumulator+currentvalue;})
// console.log(newarray);
//accumulator    currentvalue  return
//100               200         300
// 300              300         600
// 600              400         1000
// 1000             500         1500

// const mycart=[
//     {"product1":1,"productname":"phone","cost":20000},
//     {"product1":2,"productname":"cover","cost":1000},
//     {"product1":3,"productname":"laptop","cost":120000},
//     {"product1":4,"productname":"headset","cost":3500}
// ];

// let totalprice=(accumulator,currentvalue)=>{
//     return accumulator + currentvalue.cost;
// };
// let newarray=mycart.reduce(totalprice,0);
// console.log(newarray)

// let newarray=mycart.reduce((accumulator,currentvalue)=>{
//     return accumulator + currentvalue.cost;
// },0)
// console.log(newarray)

// myarray.sort((a,b)=>{return a-b;});
// console.log(myarray)

//find method

// const myarray=["qwe","qwerty","asdf","azxc"];
// let len4=(string)=>{
//     return string.length===4;
// }
// let thisarray=myarray.find(len4);
// console.log(thisarray);
//maps structure
//splice
//some
//every
//sets
//call,apply,bind
//object.create
//__proto__