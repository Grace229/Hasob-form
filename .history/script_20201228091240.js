const form = document.querySelector("form");
const gender = document.getElementsByName("gender");
const social = document.getElementsByName("social");
const age = document.querySelector("#ageselect");
const email = document.querySelector("#email");
const result = document.querySelector(".result");
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
  const form = {
    gender: genderSelected,
    age: age.value,
    social: socialMediaSelected,
    email: email.value,
  };
  let formatForm = JSON.stringify(form)
  result.innerHTML = `
  <p>Form submitted!!</p>
  <br/>
  <br/>
  <br/>
  <br/>
  'Gender Selected': ${{ formatForm }}
  <br/>
  'Gender Selected': ${{ formatForm }}
  <br/>
  'Gender Selected': ${{ formatForm }}
  `
  console.log(formatForm);
}

form.addEventListener("submit", submitForm);
