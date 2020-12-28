const form = document.querySelector("form");

function submitForm(e) {
e.preventDefault();
const gender = document.querySelector("input[name='gender']");
console.log(gender);
}

form.addEventListener('submit', submitForm)

