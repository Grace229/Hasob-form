const form = document.querySelector("form");
const gender = document.getElementsByName("gender");
const social = document.getElementsByName("social");
const age = document.querySelector("#ageselect");
const email = document.querySelector("#email");
let socialMediaSelected = []
let genderSelected = null

function submitForm(e) {
e.preventDefault();
// console.log(social)
// console.log(email.value)
// console.log(age.value)
// get social media selected
social.forEach((item) => {
    if (item.checked) {
        socialMediaSelected.push(item.value)
    }
})
// get gender selected
gender.forEach((item) => {
    if (item.checked) {
        genderSelected = item.value
    }
})
const form = {
    gender: genderSelected,
    age: age.value,
    social: socialMediaSelected,
    email: email.value,
}

console.log(form)
}

form.addEventListener('submit', submitForm)

