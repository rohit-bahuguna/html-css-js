/*
"use strict";

let name = {
    firstName :"rohit",
    lastName : "Bahuguna",
}

let printFullName = function (hometown , state){
    console.log(this.firstName + " " + this.lastName + " from " + hometown + " " + state);
}

printFullName.call(name , "Nainital" , "Uttarakhand");

let name2 = {
    firstName: "mohit",
    lastName: "bhatt"
}


// call methos ---> function borring ---> borrow function from  other object or methods
printFullName.call(name2 , "Haldwani" , "Uttarakhand");

// apply ---> only differance is the way  we pass arrgument in the function

printFullName.apply(name2 , ["mukteshwar" , "Uttarakhand"]);


// bind ---> insted of direct calling the  method ir bildes the method with a object and return a copy of that
// this is used to bild it and keep the copy of  that method and use is later
// it gives a copy them can be called later
let myName = printFullName.bind(name , "haldwami" , "uttarakhand");
console.log(myName);

myName();


// polyfill -----> are the browser fallback

//polyfill of bild() function

let arr = [1,2,3,4,5];
//output - [10,20,30,40,50];
//let newArr = arr.map((item) => item*10);


Array.prototype.myMap = function(callback) {
    let tempArray = [];
 //this - arr
  for(let i = 0; i<this.length; i++) {
        tempArray.push(callback(this[i]));
  }
  return tempArray;
}

let newArr = arr.myMap((item) => item*10);
console.log(newArr);

let maparr = arr.myMap((x) => x*x);
console.log(maparr);

*/

/*
Array.prototype.mapByRohit = function(value){

        let arr = [];
    for(let i = 0; i<value.length; )

} 

*/

// arrow function 
/*
var a = 5;

function abc () {
  var b = 10;
  console.log(b);
  //console.log(this.b);
}

let def = () => {
  var a = 20;
  console.log(a);
  console.log(this.a);
}

function fn(){
  var a = 1111;
  abc();
  def;
}

fn();

*/
//

/*

function foo() {

    let a = b = 0;
    
    a++;
    b++;
    return a;
 }

    console.log(foo(), typeof a, typeof b);



    function foo1() {

        let a = 0;
       let c = 0;
        
        a++;
        b++;
        return a;
     }
    
        console.log(foo1(), typeof a, typeof c + "  <-- from foo1");
    
    */

// 2
/* 

function main(){

    console.log('A');
    setTimeout(
    function print(){ console.log('B'); }
    ,0);
    console.log('C');

 }
    main();  // A C 

*/

/*
//3

var y = 1;  // y = undefined

if (function f(){}) {
   // function f1(){};
y = y + typeof f1;
// console.log(typeof f);
}
console.log(y);*/

/*
//4

var y = 1;
if ('foo') {
y += typeof f;
}
console.log(y);
*/


// 5
/*
var myChars = ['a', 'b', 'c', 'd'] 
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);

*/

// 6
/*

console.log(1 < 2 < 3); 
// 1 < 2 ----->  True --->  True will be converted to 1 ---->  1 < 3 ---> True

console.log(3 > 2 > 1);
// 3 > 2 ----> True  ---->  True will be converted to 1 ----> 1 > 1 ----> False

*/

//7

/*
function printNumbers(first, second, first) {
    console.log(first, second, first);
    }
    printNumbers(1, 2, 3);  // 3 ,2, 3
/* In non-strict mode, the regular JavaScript functions allow duplicate named
parameters. The above code snippet has duplicate parameters on 1st and 3rd
parameters. The value of the first parameter is mapped to the third argument
which is passed to the function. Hence, the 3rd argument overrides the first
parameter.
*/

/*
// another case

function printNumbers(first, second, first) {
    console.log("demo");
    console.log(first, second, first);
    }
    printNumbers(1,2);  //undefined, 2 ,undefined


    function printNumbers(first, second, first) {
        console.log("demo");
        console.log(first, second, first);
        }
        printNumbers(1);  //  undefined, undefined, undefined

*/

// 8------------->

/*
const arrowFunc = () => arguments.length;  // refreance error // arguments is not defined
console.log(arrowFunc(1, 2, 3));

*/

/*

// This way it will work

const arrowFunc1 = (...args) => args.length; // ...(rest operater) will convert it to a array
console.log(arrowFunc1(1, 2, 3));


const func = function () {
    return arguments.length;
    }
    console.log(func(1, 2, 3));
    

    function myFun(...manyMoreArgs) {

        console.log("manyMoreArgs", manyMoreArgs)
      }
      
      myFun("one", "two", "three", "four", "five", "six")
      

      */

// 9------------->

/*
console.log(10 == [10]);
console.log(10 == [[[[[[[10]]]]]]]);

 console.log(10 === Number(["10"].valueOf().toString()))
      
 console.log(10 === ["10"]);

 */

// 10------------->

/*

 console.log([0] == false); // true
if([0]) {
console.log("I'm True");  // this will be execuated
} else {
console.log("I'm False");
}
console.log(0 == false); // true

console.log(0 === false); // false 

console.log([0] == true);  // false;

*/


// 11 ---------->
/*
async function func() {
    return 10;
    }
    console.log(func());

    function fun1() {
        return Promise.resolve(10)
        }
        console.log(fun1());
        
    */

function x() {

   
    setTimeout( function(){
        console.log(i);
    } , 1000);
    var i =1;

}
x();

