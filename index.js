const lipstickList = document.getElementById("lipstick-list")

const detailImage = document.querySelector('#detail-image');
const lipstickTitle = document.querySelector('#title');
const lipstickPrice = document.querySelector('#price');
const lipstickDescription = document.querySelector('#description');
const likedButton = document.querySelector('#like-btn');


fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick")
    .then(res => res.json())
    .then(lipsticks =>
        lipsticks.forEach(lipstick => {
            renderProduct(lipstick);
        })
    );

function renderProduct(lipstick) {
        if(lipstick.price > 11 && lipstick.price < 12) {
        const lipstickImages = document.createElement("img")
        lipstickImages.src = lipstick.image_link
        lipstickList.appendChild(lipstickImages)

        lipstickImages.addEventListener('click', () => {
            lipstickDetails(lipstick)
        })
    }
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

// loads first product
fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick")
.then(res => res.json())
.then(lipsticks => {
    lipstickDetails(lipsticks[1]);
})
