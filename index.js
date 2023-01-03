function fetchAllScotch () {
fetch("http://localhost:3000/drinks") 
.then(res => res.json())
.then(drinkData => 
    drinkData.forEach(drink => {
        const cocktailList = document.getElementById("cocktail-list")
        const cocktailImages = document.createElement("img")
        cocktailImages.src = drink.image 
        cocktailList.appendChild(cocktailImages)
        
              
}),



)}

fetchAllScotch()

fetch("http://localhost:3000/drinks/1") 
.then(res => res.json())
.then(drinkOne => {
const detailImage = document.getElementById("detail-image")
detailImage.src = drinkOne.image 
})






