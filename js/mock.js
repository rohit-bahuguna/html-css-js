
function button (){

 let fName  = document.getElementById('first_name').value;

 let lName = document.getElementById('last_name').value;

 let fullName = fName + " " + lName;

 document.getElementById('show').value = fullName;


}

function add() {
    let num1 = document.getElementById('num1').value;

     let num2 = document.getElementById('num2').value;

     let sum = parseFloat(num1) + parseFloat(num2);

     document.getElementById('result').value = sum;


}