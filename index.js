const lipstickList = document.getElementById("lipstick-list")

const detailImage = document.querySelector('#detail-image');
const lipstickTitle = document.querySelector('#title');
const lipstickPrice = document.querySelector('#price');
const lipstickDescription = document.querySelector('#description');
const likedButton = document.querySelector('#like-btn');
const addShadeForm = document.querySelector(".add-shade-form")


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
            //CALL RENDERSHADECLICK FUNCTION 
            renderShadeClick(lipstick)
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

//TOGGLE THE UGLY FORM
const toggleFormBtn = document.querySelector('#toggleForm');
// hide and show the form when toggle buton is clicked
toggleFormBtn.addEventListener('click', (e) => {
  const formHidden = addShadeForm.classList.toggle('collapsed')
  toggleFormBtn.textContent = formHidden ?  "New Shade" : "Hide Form";
});


addShadeForm.classList.toggle('collapsed')

//HIDE FORM WHEN IT'S VISIBLE
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!addShadeForm.classList.contains('collapsed')) {
      addShadeForm.classList.add('collapsed')
      toggleFormBtn.textContent = "New Shade";
    };
  }
})


//FETCHING FOR SHADES
fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lipstick&product_type=lipstick")
    .then(res => res.json())
    .then(lipsticks => {
        lipsticks[1].product_colors.forEach(shade => {
        const swatchArea = document.createElement('li')
        swatchArea.textContent = shade.colour_name
        swatchArea.style = `color: ${shade.hex_value}`
        const productSingleColors = document.querySelector(".product_single_colors") 
        productSingleColors.appendChild(swatchArea)
    })     
    })
    
//RENDER SHADES WHEN CLICKED ABOVE
        function renderShadeClick(lipstick) {
            const productSingleColors = document.querySelector(".product_single_colors") 
            productSingleColors.innerHTML= ""; 
            lipstick.product_colors.forEach(shade => {
            const swatchArea = document.createElement('li')
            swatchArea.textContent = shade.colour_name
            swatchArea.style = `color: ${shade.hex_value}`
            const productSingleColors = document.querySelector(".product_single_colors") 
            productSingleColors.appendChild(swatchArea);
    })  
    }

    //SHADE FORM EVENT LISTENER - USER ADDS OWN SHADE
    
    addShadeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const addedShadeName = document.querySelector("#add-shade-name")
        const addedShadeColor = document.querySelector("#add-color")
        const swatchArea = document.createElement('li')
        swatchArea.textContent = addedShadeName.value
        swatchArea.style = `color: ${addedShadeColor.value}`
        const productSingleColors = document.querySelector(".product_single_colors") 
        productSingleColors.appendChild(swatchArea)


    })