
const mainPage = document.querySelector(".container");

const getNews = async () => {
    const response = await fetch("https://inshorts.deta.dev/news?category=science");
    const value = await response.json();

    console.log(value.data)

    value.data.map((val , index) => {

        const html = `<div class="main">
            <h2>${val.title}</h2>
            <p>${val.content}</p>
            <img src="${val.imageUrl}" />
            <div class="inner">
                <p>${val.date}</p>
                <a href="${val.url}"><button>Read More</button></a>
            </div>
        </div>`;

        mainPage.insertAdjacentHTML('afterbegin' , html );

    })
   
}



// const getPost =  async()  =>{
//     const response =  await fetch('https://fakestoreapi.com/products');
//    const data = await response.json();
//    console.log(data);



// }

// getPost();




getNews();