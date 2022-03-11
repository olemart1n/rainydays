//THIS HANDLES THE NAVICON-- TOGGLES THE CLASS ACTIVE ON NAV ELEMENT
const navigationIcon = document.querySelector("header div");
const navMeny = document.querySelector("nav");

navigationIcon.addEventListener("click", () => {
    navMeny.classList.toggle("active")
})


            const queryString = document.location.search;
            const params = new URLSearchParams(queryString);
            const id = params.get("id");
            
            
            const url = "https://fakestoreapi.com/products/" + id;
            const section = document.querySelector("main");
            
            async function spesific() {
                try{
                    const req = await fetch(url);
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
                                <button>checkout</button>
            
            </div>`;}