//THIS HANDLES THE NAVICON-- TOGGLES THE CLASS ACTIVE ON NAV ELEMENT
const navigationIcon = document.querySelector("header div");
const navMeny = document.querySelector("nav");

navigationIcon.addEventListener("click", () => {
    navMeny.classList.toggle("active")
})



//API CALL

const url = "https://fakestoreapi.com/products";
const section = document.querySelector("section");
async function apiCall() {
    try {
        const req = await fetch(url);
        const json = await req.json();
        console.log(json)
        for (let i = 0; i < json.length; i++) {
            const jackets = json[i];
            DisplayProducts(jackets)
        }
        
    } catch (error) {
        
    }
}
apiCall()


function DisplayProducts(jackets) {
    if(jackets.category === "women's clothing") {
        section.innerHTML += `<div>
        <img class="items" src="${jackets.image}">
        <div>
        <h4>${jackets.title}</h4>
        <h5>${jackets.price} $</h5>
        <p>rated: ${jackets.rating.rate}</p>
        <a href="/spesific.html?id=${jackets.id}"><button>view</button></a>
                                </div>
                                </div>`
    }
}
