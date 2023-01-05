const lipstickList = document.getElementById("lipstick-list")

const detailImage = document.querySelector('#detail-image');
const lipstickTitle = document.querySelector('#title');
const lipstickPrice = document.querySelector('#price');
const lipstickDescription = document.querySelector('#description');
const likedButton = document.querySelector('#like-btn');


fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick")
    .then(res => res.json())
    .then(lipsticks =>
        forEachLoop(lipsticks)
)

function forEachLoop(lipstick) {
    lipstick.forEach(lipstick => {
        if(lipstick.price > 10 && lipstick.price < 12) {
        const lipstickImages = document.createElement("img")
        lipstickImages.src = lipstick.image_link
        lipstickList.appendChild(lipstickImages)

        lipstickImages.addEventListener('click', () => {
            lipstickDetails(lipstick)
            })
        }
    })
}

// populate detailed descriptions for product
function lipstickDetails(lipstick) {
    detailImage.src = lipstick.image_link
    lipstickTitle.textContent = lipstick.name
    lipstickPrice.textContent = `$${lipstick.price}`
    lipstickDescription.textContent = lipstick.description

            // CLICK liked button to open new tab
            likedButton.addEventListener('click', () => {
                window.open(lipstick.product_link)
                console.log(lipstick.product_link)
                })
}

// SUBMIT email alert
const lipstickForm = document.querySelector(".lipstick-form")
lipstickForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValue = document.getElementById('email')
    alert(`${emailValue.value} has been added to the email list!`);
})

function uponLoad () {
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick")
    .then(res => res.json())
    .then(lipsticks => {
        detailImage.src = lipsticks[1].image_link
        lipstickTitle.textContent = lipsticks[1].name
        lipstickPrice.textContent = lipsticks[1].price
        lipstickDescription.textContent = lipsticks[1].description
    })
    
}

uponLoad()

const addLiptick = document.querySelector(".add-lip-form")
addLiptick.addEventListener('submit', (event) => {
    event.preventDefault();
    const addedLipName = document.querySelector("#add-lip-name")
    const addedLipPrice = document.querySelector("#add-price")
    const addImageUrl = document.getElementById('add-image-url')
    const addDescription = document.getElementById('add-description')
    const lipstickImages = document.createElement("img")
    lipstickImages.src = addImageUrl.value
    lipstickList.appendChild(lipstickImages)
    detailImage.src = addImageUrl.value
    lipstickTitle.textContent = addedLipName.value
    lipstickPrice.textContent = addedLipPrice.value
    lipstickDescription.textContent = addDescription.value
})
