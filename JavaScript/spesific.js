const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


const url = "https://fakestoreapi.com/products";
const spesificUrl = "https://fakestoreapi.com/products/" + id;
const section = document.querySelector("figure");

async function spesific() {
    try{
        const req = await fetch(spesificUrl);
        const json = await req.json();
        console.log(json);
        displayProduct(json)
    } catch(error) {
        console.log(error);
    }
}
spesific()

function displayProduct (jacket) { 
    section.innerHTML +=`<div>
                    <h3>${jacket.title}</h3>
                    <p><b>${jacket.price} $</b></p>
                    <img src="${jacket.image}">                                      
                    <p>${jacket.category}</p>
                    <p>${jacket.description}</p>
                    <a href="/cart.html?id=${jacket.id}" id="a">add</a>

</div>`;}