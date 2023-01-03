function fetchAllLipstick () {
fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick") 
.then(res => res.json())
.then(lipsticks => 
    lipsticks.forEach(lipstick => {
        const lipstickList = document.getElementById("lipstick-list")
        const lipstickImages = document.createElement("img")
        lipstickImages.src = lipstick.image_link
        lipstickList.appendChild(lipstickImages)
        
              
}),



)}

fetchAllLipstick()

// fetch("http://localhost:3000/drinks/1") 
// .then(res => res.json())
// .then(drinkOne => {
// const detailImage = document.getElementById("detail-image")
// detailImage.src = drinkOne.image 
// })






