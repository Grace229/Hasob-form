const form = document.querySelector("form");
const gender = document.getElementsByName("gender");
const social = document.getElementsByName("social");
const age = document.querySelector("#ageselect");
const email = document.querySelector("#email");

function submitForm(e) {
e.preventDefault();
// get gender selected
console.log(social)
console.log(email.value)
console.log(age.value)
social.for((item) => {
    if (item.checked) {
        return item.value
    }
})
gender.forEach((item) => {
    if (item.checked) {
        console.log(item.value)
    }
})
}

form.addEventListener('submit', submitForm)

