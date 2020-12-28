const form = document.querySelector("form");
const formBody = document.querySelector(".formBody");
const gender = document.getElementsByName("gender");
const social = document.getElementsByName("social");
const age = document.querySelector("#ageselect");
const email = document.querySelector("#email");
const result = document.querySelector(".result");
const notify = document.querySelector(".notify");
let socialMediaSelected = [];
let genderSelected = null;

function submitForm(e) {
  e.preventDefault();
  // get social media selected
  social.forEach((item) => {
    if (item.checked) {
      socialMediaSelected.push(item.value);
    }
    
  });
  // get gender selected
  gender.forEach((item) => {
    if (item.checked) {
      genderSelected = item.value;
    }
  });
  if (s)
  const form = {
    gender: genderSelected,
    age: age.value,
    social: socialMediaSelected,
    email: email.value,
  };
  formBody.style.display = 'none';
  let formatForm = JSON.stringify(form)
  notify.innerHTML = `Form Submitted successfully 
  <br/>
  <br/>
  <br/>
  <br/>
  `
  result.innerHTML = formatForm
}

form.addEventListener("submit", submitForm);
