const age = document.querySelector("#age");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const nextUser = document.querySelector("#getUser");
const userName = document.querySelector(".name");
const userPhoto = document.querySelector(".photo");
const show = document.querySelector("#show");

let userAge;
let UserEmail;
let userPhone;


const url = "https://randomuser.me/api/";

const getData = async() => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results[0].phone)
  //  console.log(data.results[0].picture.large)
  
    userAge = data.results[0].dob.age;
    UserEmail= data.results[0].email;
    userPhone = data.results[0].phone;
    userName.innerHTML = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last

    userPhoto.innerHTML =` <img src="${data.results[0].picture.large}" alt="User-picture"/>`
    
}
getData();
nextUser.addEventListener('click' , () => {
    show.innerHTML = "";
    getData();
   

 });

age.addEventListener('click' , ()=>{
    show.innerHTML = userAge;

})
email.addEventListener('click' , ()=>{
    show.innerHTML = UserEmail;
    
})
phone.addEventListener('click' , ()=>{
    show.innerHTML = userPhone;
    
})
