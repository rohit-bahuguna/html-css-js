const countryList = document.querySelector("#country-list");
const companyList = document.querySelector("#company-list");
const exchangeList = document.querySelector("#exchange-list");
const currencyList = document.querySelector("#currency-list");
const select = document.querySelector("#select");
const option = document.querySelectorAll(".option");

console.log(option.text)
let countryArr = [];
let companyArr = [];
let exchangeArr = [];
let currencyArr = [];

const url = "https://api.twelvedata.com/stocks?source=docs";

const getData =  async () => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result.data[0]);

  /********** Country List **********/
  result.data.map((value) => {
    if (!countryArr.includes(value.country)) {
      countryArr.push(value.country);
    }
  });
  console.log("done1..................");

  result.data.map((value) => {
    if (!companyArr.includes(value.name)) {
      companyArr.push(value.name);
    }
  });

  console.log("done2..................");
  result.data.map((value) => {
    if (!currencyArr.includes(value.currency)) {
      currencyArr.push(value.currency);
    }
  });
  console.log("done3..................");
  result.data.map((value) => {
    if (!exchangeArr.includes(value.exchange)) {
        exchangeArr.push(value.exchange);
    }
  });



  /*

  companyArr.map((value) => {
    console.log("company...................");
    const company = document.createElement("li");
    company.innerHTML = value;
    companyList.appendChild(company);
  });
 */
 
  console.log("done4..................");
};

getData();



countryArr.map((value) => {
    console.log("country...................");
    const country = document.createElement("li");
    country.innerHTML = value;
    countryList.appendChild(country);
  });

/* 



     const company =  document.createElement('li');
        const exchange =  document.createElement('li');
        const currency =  document.createElement('li');
company.innerHTML = value.name;
        exchange.innerHTML = value.exchange;
        currency.innerHTML = value.currency;


  
     if (!exchangeArr.includes(value.exchange)) {
      exchangeArr.push(value.exchange);
    }
    if (!currencyArr.includes(value.currency)) {
      currencyArr.push(value.currency);
    }


*/

function massage() {
    let val = select.value;
    if(val === "contury"){

        countryArr.map((value) => {
            console.log("country...................");
            const country = document.createElement("li");
            country.innerHTML = value;
            countryList.appendChild(counry);
          });
    }
    if(val === "company"){

        companyArr.map((value) => {
            console.log("country...................");
            const company = document.createElement("li");
            company.innerHTML = value;
            countryList.appendChild(company);
          });
    }
    if(val === "company"){

        companyArr.map((value) => {
            console.log("country...................");
            const company = document.createElement("li");
            company.innerHTML = value;
            countryList.appendChild(company);
          });
    }

    if(val === "currency"){

        currencyArr.map((value) => {
            console.log("country...................");
            const currency = document.createElement("li");
            currency.innerHTML = value;
            countryList.appendChild(currency);
          });
    }
    if(val === "exchange"){

        exchangeArr.map((value) => {
            console.log("country...................");
            const exchange = document.createElement("li");
            exchange.innerHTML = value;
            countryList.appendChild(exchange);
          });
    }

}