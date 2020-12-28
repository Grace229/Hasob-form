const form = document.querySelector("form");
const gender = document.getElementsByName("gender");
const social = document.getElementsByName("social");
const age = document.querySelector("#ageselect");
const email = document.querySelector("#email");
let socialMediaSelected = []

function submitForm(e) {
e.preventDefault();
// get gender selected
// console.log(social)
console.log(email.value)
console.log(age.value)
social.forEach((item) => {
    if (item.checked) {
        socialMediaSelected.push(item.value)
        console.log(socialMediaSelected)
    }
})
gender.forEach((item) => {
    if (item.checked) {
        console.log(item.value)
    }
})
const form = {
    
}
}

form.addEventListener('submit', submitForm)

