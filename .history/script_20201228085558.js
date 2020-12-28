const form = document.querySelector("form");
const gender = document.getElementsByName("gender");
const social = document.getElementsByName("social");
const age = document.querySelector("#ageselect");
const email = document.querySelector("#email");
let socialMediaSelected = []
let socialMediaSelected = []

function submitForm(e) {
e.preventDefault();
// console.log(social)
// console.log(email.value)
// console.log(age.value)
// get social media selected
social.forEach((item) => {
    if (item.checked) {
        socialMediaSelected.push(item.value)
        console.log(socialMediaSelected)
    }
})
// get gender selected
gender.forEach((item) => {
    if (item.checked) {
        ageSelected = item.value
    }
})
const form = {
    age: age.value,
    age: age.value,
    age: age.value,
    age: age.value,
}
}

form.addEventListener('submit', submitForm)

