const table = document.querySelector("#table");
const search = document.querySelector("#search-bar");
const tBody = document.querySelector("#tbody");
const thead = document.querySelector("#thead");
const billItems = [
  {
    id: 1,
    itemName: "Bread",
    price: 20,
  },
  {
    id: 2,
    itemName: "Butter",
    price: 50,
  },
  {
    id: 3,
    itemName: "Tomatoes",
    price: 30,
  },
  {
    id: 4,
    itemName: "Onion",
    price: 40,
  },
  {
    id: 5,
    itemName: "Pomegranate",
    price: 60,
  },
  {
    id: 6,
    itemName: "Apple",
    price: 40,
  },
  {
    id: 7,
    itemName: "Grapes",
    price: 30,
  },
  {
    id: 8,
    itemName: "Mango",
    price: 100,
  },
];

const getData = () => {
  const tableBody = document.createElement("tbody");
  let head = `<thead id="thead">
  <th>id</th>
  <th>itemName</th>
  <th>price</th>
</thead>`;

  billItems.map((val) => {
    const tableRow = document.createElement("tr");

    let data = ` 
        <td>${val.id}</td>
        <td>${val.itemName}</td>
        <td>${val.price}</td>
       `;

    tableRow.innerHTML = data;
    tableBody.appendChild(tableRow);
    table.innerHTML = head;
    table.insertAdjacentElement("afterbegin", tableBody);
  });
};

window.addEventListener("load", getData());

function update(e) {
  let arr = [];

  table.innerHTML = "";
  let value = search.value.toLocaleLowerCase();
  // console.log(value);

  if (value.length != 0) {
    const tableBody = document.createElement("tbody");
    billItems.map((val) => {
     /*  console.log(val.itemName.toLocaleLowerCase().includes(value)); */
      arr.push(val.itemName.toLocaleLowerCase().includes(value));
      //  console.log(arr);
      if (val.itemName.toLocaleLowerCase().includes(value)) {
        const tableRow = document.createElement("tr");
        let head = `<thead id="thead">
        <th>id</th>
        <th>itemName</th>
        <th>price</th>
      </thead>`;

        let data = ` 
        <td>${val.id}</td>
        <td>${val.itemName}</td>
        <td>${val.price}</td>
       `;
        tableRow.innerHTML = data;
        tableBody.appendChild(tableRow);
        table.innerHTML = head;
        table.insertAdjacentElement("afterbegin", tableBody);
      }
      //   if((val.itemName.toLocaleLowerCase().includes(value)) === false) {
      //     table.innerHTML = "No items found!";
      //   }
    });
    if (!arr.includes(true)) {
      table.innerHTML = "No items found!";
    }
  }
  if (value.length === 0) {
    getData();
  }
}
