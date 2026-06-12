
let data = []
async function fetchProducts() {
        loader.style.display = "block";
        const  response = await fetch("https://fakestoreapi.com/products");
        const res = await response.json();
        data = res;
        console.log(data)
        loader.style.display = "none";
        loadContent()
}



document.addEventListener("DOMContentLoaded", async () => {
    await fetchProducts();   
});

    
let itemBox = document.querySelector(".items");
let msg = document.querySelector(".no-item"); 
function loadContent(category = "",search = ""){
    itemBox.style.display="flex"
    itemBox.innerHTML ='';
    data.filter((el,i)=>{
        return category == ""? true : el.category==category;
    }).filter((el,i)=>{
        let title = el.title.toLowerCase(); 
        return search == ""? true : title.includes(search.toLowerCase());
    }).map((el,i)=>{
        let item = document.createElement("div");
        let imgBox = document.createElement("div");
        item.classList.add("card");
        imgBox.classList.add("img-box");
        let img = document.createElement("img");
        img.setAttribute("src", el.image);
        item.appendChild(imgBox).appendChild(img);
        let desc = document.createElement('div');
        desc.classList.add("info");
        desc.innerHTML = `<h3>${el.title}</h3><p>Category: ${el.category}</p><p>&#8377; ${el.price}</p><p>Rating: ${el.rating.rate}</p>`;
        item.appendChild(desc);
        itemBox.appendChild(item);
    });
 
}

let dropDown = document.getElementById("drop-down");
function handleChange(e){
    let val = e.value;
    let allOptions = new Array(...e.children);
    let selectedOption = allOptions.filter((el)=>el.value==val)
    console.log(selectedOption[0].clientWidth)
    
    loadContent(dropDown.value);
}

let Search = document.getElementById("search-input");
function handleSearch(){
    if (Search.value.trim() == ""){
        return
    }
    console.log(Search.value);
    loadContent("",Search.value);
    Search.value= ""
}

loadContent()

