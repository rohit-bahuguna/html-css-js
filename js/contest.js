const tableBody = document.querySelector("tbody");


const url = "https://my-json-server.typicode.com/FreSauce/json-ipl/data";

const getData = async() => {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data)

 data.map((value ) =>{

      let html =  `   
            <td>${value.No}</td>
            <td>${value.Team}</td>
            <td>${value.Matches}</td>
            <td>${value.Won}</td>
            <td>${value.Lost}</td>
            <td>${value.Tied}</td>
            <td>${value.NRR}</td>
            <td>${value.Points}</td>
        `
    let tr = document.createElement("tr")
    tr.innerHTML = html;

        tableBody.appendChild(tr); 


    } ) 
    


}
getData();