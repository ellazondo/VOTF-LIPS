const lipstickList = document.getElementById("lipstick-list")

const detailImage = document.querySelector('#detail-image');
const lipstickTitle = document.querySelector('#title');
const lipstickPrice = document.querySelector('#price');
const lipstickDescription = document.querySelector('#description');
const likedButton = document.querySelector('#like-btn');

//function fetchAllLipstick () {
fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick") 
    .then(res => res.json())
    .then(lipsticks => 
        forEachLoop(lipsticks)
)

function forEachLoop(lipstick) {
    lipstick.forEach(lipstick => {
        if(lipstick.price > 10 && lipstick.price < 15) {
        const lipstickImages = document.createElement("img")
        lipstickImages.src = lipstick.image_link
        lipstickList.appendChild(lipstickImages)
        
        lipstickImages.addEventListener('click', () => {
            lipstickDetails(lipstick)
        })}      
    })
}

// populate detailed descriptions for product
function lipstickDetails(lipstick) {
    detailImage.src = lipstick.image_link
    lipstickTitle.textContent = lipstick.name
    lipstickPrice.textContent = `$${lipstick.price}`
    lipstickDescription.textContent = lipstick.description
}

// SUBMIT email alert
const lipstickForm = document.querySelector(".lipstick-form")
lipstickForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValue = document.getElementById('email')
    alert(`${emailValue.value} has been added to the email list!`);
})
