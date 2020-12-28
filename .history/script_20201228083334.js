const form = document.querySelector("form");
const gender = document.getElementsByName("gender");

function submitForm(e) {
e.preventDefault();
gender.forEach((item) => {
    if (item.checked)
})
}

form.addEventListener('submit', submitForm)

