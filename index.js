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

/*Deliverable #2: submit event */
const lipstickForm = document.querySelector(".lipstick-form")
lipstickForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValue = document.getElementById('email')
    alert(`${emailValue.value} has been added to the email list!`);
})








