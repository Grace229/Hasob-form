const form = document.querySelector("form");
const gender = document.querySelector("input[name='gender']");

function submitForm(e) {
e.preventDefault();
console.log(gender);
}

form.addEventListener('submit', submitForm)

