const form = document.querySelector("form");
const gender = document.getElementsByName("gender");
const age = document.getElementsByName("ageselect");

function submitForm(e) {
e.preventDefault();
// get gender selected
console.log(item.value)
gender.forEach((item) => {
    if (item.checked) {
        console.log(item.value)
    }
})
}

form.addEventListener('submit', submitForm)

