const form = document.querySelector("form");
const formBody = document.querySelector(".formBody");
const gender = document.getElementsByName("gender");
const social = document.getElementsByName("social");
const age = document.querySelector("#ageselect");
const email = document.querySelector("#email");
const result = document.querySelector(".result");
const notify = document.querySelector(".notify");
const button = document.querySelector(".submit");
var regExp= /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z])./;
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
  formBody.style.display = 'none';
  let formatForm = JSON.stringify(form)
  notify.innerHTML = `Form Submitted successfully 
  <br/>
  <br/>
  `
  result.innerHTML = formatForm
}
function check(){
  if(age.value < 0 && email.value == "" &&  !regExp.test(email.value)){
    alert('Please select an age range')
    button.style.backgroundColor = '#583759';
    button.disabled = false;
  }else{

  }
}

form.addEventListener("submit", submitForm);
