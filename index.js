


// const header = document.createElement("h2")
// header.textContent = "Hello, there.This is vanilla JS."
// header.style.color = "green"
// header.style.paddingLeft = '20px'

// const sectionDiv = document.createElement("div")
// sectionDiv.setAttribute('id', 'my-div')
// // Creating paragraphs dynamically and appending to the div
// for (let i=1; i<=5;i++){
//     let para = document.createElement("p");  
//     para.innerHTML = `Paragraph ${i}`;   
//     // Adding a unique id for each paragraph 
//     para.setAttribute("id",`para${i}`)     ;
//     sectionDiv.appendChild(para) 
// }

const sectionDiv2 = document.createElement("div")
sectionDiv2.setAttribute('class','container')
const btn = document.createElement("button")
btn.textContent = "Click me!"
btn.style.margin = "auto";
btn.style.display = "block"; 

btn.addEventListener("click", fetchProducts)

function truncateHeadings (heading, maxLength){
    if (heading.length > maxLength){
        return heading.substring(0, maxLength) + "..."
    }
    return heading
    
}

function fetchProducts(){
    fetch('https://fakestoreapi.com/products')
            .then(res => {
                if(!res.ok){
                    throw new Error("Network response is not ok.")
                }
                return res.json()
            })
            .then(products => {
                // data = JSON.parse(data)
                console.log(products)
                displayProducts(products);
            })
            .catch(error => {
                console.error("Fetch operation problem", error)
            });

}
fetchProducts()

const products = document.createElement("div")
// products.style.display = "grid"
// products.style.gridTemplateColumns = "repeat(3, 1fr)"
// products.style.gap = ".5rem"

products.appendChild(sectionDiv2)





function displayProducts(products){

    const productsContainer = document.createElement("div")
    productsContainer.id = "product-card"

    products.forEach(item => {
        const itemElement = document.createElement("div")
        const imageElement = document.createElement("img")
        const titleElement = document.createElement("p")
        const descriptionElement = document.createElement("p")
        const priceElement = document.createElement("p")


        const buttonElements = document.createElement("div")
        buttonElements.id = "buttons-element"
        const likeButton = document.createElement("button")
        likeButton.textContent = "Like"
        const dislikeButton = document.createElement("button")
        dislikeButton.textContent = "Dislike"


        buttonElements.appendChild(likeButton)
        buttonElements.appendChild(dislikeButton)




        descriptionElement.textContent = truncateHeadings(item.description, 70)
        
      


        imageElement.src = item.image
        imageElement.style.height = "60px"
        imageElement.style.margin = "auto";
        imageElement.style.display = "block"; 


        titleElement.textContent = truncateHeadings(item.title, 30)
        titleElement.style.fontSize = "0.8em"
        titleElement.style.margin = "auto";
        titleElement.style.display = "block"; 

        

        priceElement.textContent = `Price : ${item.price.toFixed(2)}`
        priceElement.style.fontSize = "0.9em"
        priceElement.style.margin = "auto";
        priceElement.style.display = "block"; 



        itemElement.style.border = "1px solid black"
        itemElement.style.borderRadius = "10px"
        itemElement.style.height = "260px"
        itemElement.style.display = "grid"
        itemElement.style.padding = "20px"
      


        itemElement.appendChild(imageElement)
        itemElement.appendChild(titleElement)
        itemElement.appendChild(descriptionElement)
        itemElement.appendChild(priceElement)
        itemElement.appendChild(buttonElements)

        


        productsContainer.appendChild(itemElement)
    });

    sectionDiv2.appendChild(productsContainer);


}




const root = document.getElementById("root")
root.appendChild(products)
sectionDiv2.appendChild(btn)


root.appendChild(sectionDiv2)
root.appendChild(productsContainer)





    
