const form = document.querySelector("form");
const gender = document.getElementsByName("gender");

function submitForm(e) {
e.preventDefault();
console.log(gender);
}

form.addEventListener('submit', submitForm)

