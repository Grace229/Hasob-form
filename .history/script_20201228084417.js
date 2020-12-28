const form = document.querySelector("form");
const gender = document.getElementsByName("gender");
const age = document.querySelector("#ageselect");
const email = document.querySelector("#ageselect");

function submitForm(e) {
e.preventDefault();
// get gender selected
console.log(age.value)
gender.forEach((item) => {
    if (item.checked) {
        console.log(item.value)
    }
})
}

form.addEventListener('submit', submitForm)

