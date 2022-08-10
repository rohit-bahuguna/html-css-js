
const main = document.querySelector('#main');

  
const getPost =  async()  =>{
 const response =  await fetch('https://fakestoreapi.com/products');
const data = await response.json();
console.log(data);

data.map(value  => {
const html = `<div>
${value.title}
</div>`;

main.insertAdjacentHTML('beforeend' , html);
})

}


 getPost();


