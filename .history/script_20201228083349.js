const form = document.querySelector("form");
const gender = document.getElementsByName("gender");

function submitForm(e) {
e.preventDefault();
gender.forEach((item) => {
    if (item.checked) {
        console.log(item.value)
    }
})
}

form.addEventListener('submit', submitForm)

