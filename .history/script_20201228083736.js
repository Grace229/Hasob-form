const form = document.querySelector("form");
const gender = document.getElementsByName("gender");
const gender = document.getElementsByName("gender");

function submitForm(e) {
e.preventDefault();
// get gender selected
gender.forEach((item) => {
    if (item.checked) {
        console.log(item.value)
    }
})
}

form.addEventListener('submit', submitForm)

