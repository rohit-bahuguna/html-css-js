
const datas = [
    {name: "rohit" , profission: "coder"},
    {name: "mohit" , profission: "coder"}
]

function getDatas(){
    let output="";
    setTimeout(() => {
        datas.forEach((data) => {
            output += `<li>${data.name}</li>`;
        });
        document.body.innerHTML =output;
    }, 1000);
}

function creatDatas (newdata){

        return new Promise((resole , reject) =>{
            setTimeout( () => {
                datas.push(newdata);
                let error = true;
                if(!error){
                    resole();
                }
                else{
                    reject("something is not good");
                }
                
           }, 2000);
        })
          
} 


creatDatas({name: "sohit" , profission: "coder"} ).then(getDatas).catch(err => console.log(err));

(function () {
    console.log('rojit');
  })();
  

// Example POST method implementation:


fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then((res) => {
  return res.json();
})
.then((finalData) => {
	console.log('final data', finalData.bpi)
})
.catch((response) => {
	console.log('failed promise', response);
})


let my = function () {

    setTimeout (() =>{
            console.log("rohit");
    } , 1000)

}

console.log(my());