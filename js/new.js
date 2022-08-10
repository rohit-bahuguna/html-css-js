
const rangeAHolder = document.querySelector("#range-a-holder");
const rangeBHolder = document.querySelector("#range-b-holder");
const rangeAValue = document.querySelector("#range-a-value");
const rangeBValue = document.querySelector("#range-b-value");

const input = document.querySelector("#input");
const rangeA = document.getElementById("rangeA").max;
const rangeB = document.getElementById("rangeB").max;

let text = rangeA.getAttribute("max")
let text1 = rangeB.getAttribute("max")
let max;
let vlaue;
let rangea;
let rangeb;

input.addEventListener('onchange' , (e) => {
    vlaue = e.target.value;


})


rangeB.addEventListener('onchange' , (e) => {
  //  rangeb = e.target.value;
    text1 = vlaue 


})

rangeA.addEventListener('onchange' , (e) => {
   // rangea = e.target.value;
     text = vlaue - rangeb;
    
})