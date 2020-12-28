const form = document.querySelector("form");
const gender = document.querySelector("gender");

function submitForm(e) {
e.preventDefault();
console.log(gender);
}

form.addEventListener('submit', submitForm)

