const addToList = document.querySelector("#ordered-list");
const btn_next = document.querySelector("#load_next");
const pageNumber = document.querySelector("#pageNumber");
const btn_prev = document.querySelector("#load_prev");

let current_page = 1;
let pageNumberHere = 1;

const getData = async() => {
    const url = `https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`;
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data[0].html_url);
    // console.log(data);

    data.map((value , index) => {
        let li = document.createElement('li');
        li.innerHTML = value.html_url;

        addToList.appendChild(li);
    })
    pageNumber.innerHTML = `Page number ${current_page}`;


} 

getData();

btn_next.addEventListener('click' , ()=> {
   pageNumberHere += 1;
   current_page += 1;
   btn_prev.removeAttribute('disabled')
   addToList.innerHTML = "";
    getData();
})

btn_prev.addEventListener('click' , ()=> {
    pageNumberHere -= 1;
 if(current_page !=1) { current_page -= 1;}
 if(current_page === 1 ){ btn_prev.setAttribute('disabled' , "")}
    addToList.innerHTML = "";
     getData();
 })

 if(current_page === 1 ){
   
}