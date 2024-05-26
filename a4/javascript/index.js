function ValidateForm() {
  var validFirstName = false;
  var validLastName = false;
  var validEmail = false;
  var validPhone = false;
  var validUsername = false;
  var validUserPassword = false;
  var validAddress = false;
  var validCity = false;
  var validStates = false;
  var validCountry = false;
  var validZipcode = false;
  var letters = /^[A-Za-z ,.'-]+$/;
  var numbers = /^[0-9]+$/
  var errorMessages = "";
  
  //validates firstname
  var errorFirstname = document.getElementById("errorFirstname");
  if (myContact.firstname.value.length > 20 || myContact.firstname.value===null || myContact.firstname.value==="" || !myContact.firstname.value.match(letters)) {
     errorFirstname.innerHTML = "<p>The firstname must be less than 20 characters and is required. Only letters are accepted.</p>";
  }
  else {
    errorFirstname.innerHTML = "";
    validFirstName = true;
  }
  
  //validates lastname
  var errorLastname = document.getElementById("errorLastname");
  if (myContact.lastname.value.length > 50 || myContact.lastname.value===null || myContact.firstname.value==="" || !myContact.lastname.value.match(letters)) {
    errorLastname.innerHTML = "<p>The lastname must be less than 50 characters and is required. Only letters are accepted.</p>";
  }
  else {
    validLastName = true;
  }
  
  //validates email
  var errorEmail = document.getElementById("errorEmail");
  if (myContact.email.value===null || myContact.email.value==="") {
    errorEmail.innerHTML = "<p>The email is required.</p>";
  }
  else {
    validEmail = true;
  }
  
  //validates phone number
  var errorPhone = document.getElementById("errorPhone");
  if (myContact.phone.value.length > 15 || myContact.phone.value===null || myContact.phone.value==="" || !myContact.phone.value.match(numbers)) {
    errorPhone.innerHTML = "<p>The phone number must be less than 15 digits and is required. Only numbers are accepted.</p>";
  }
  else {
    validPhone = true;
  }
  
  //validates username
  var errorUsername = document.getElementById("errorUsername");
  if (myContact.username.value.length > 12 || myContact.username.value===null || myContact.username.value==="") {
    errorUsername.innerHTML = "<p>The username must be less than 12 characters and is required.</p>";
  }
  else {
    validUsername = true;
  }
  
  //validates password
  var errorPassword = document.getElementById("errorPassword");
  if (myContact.password.value.length > 7 || myContact.password.value===null || myContact.password.value==="") {
    errorPassword.innerHTML = "<p>The password must be less than 7 characters and is required.</p>";
  }
  else {
    validUserPassword = true;
  }
  
  //validates address
  var errorAddress = document.getElementById("errorAddress");
  if (myContact.address.value===null || myContact.address.value==="") {
    errorAddress.innerHTML = "<p>The address is required.</p>";
  }
  else {
    validAddress = true;
  }
  
  //validates city
  var errorCity = document.getElementById("errorCity");
  if (myContact.city.value===null || myContact.city.value==="") {
    errorCity.innerHTML = "<p>The city is required.</p>";
  }
  else {
    validCity = true;
  }
  
  //validates state
  var errorState = document.getElementById("errorState");
  if (myContact.states.value===null || myContact.states.value==="") {
    errorState.innerHTML = "<p>The state is required.</p>";
  }
  else {
    validStates = true;
  }
  
  //validates country
  var errorCountry = document.getElementById("errorCountry");
  if (myContact.countries.value===null || myContact.countries.value==="") {
    errorCountry.innerHTML = "<p>The country is required.</p>";
  }
  else {
    validCountry = true;
  }
  
  //validates zipcode
  var errorZipcode = document.getElementById("errorZipcode");
  if ((myContact.zipcode.value.length > 5 || myContact.zipcode.value===null || myContact.zipcode.value==="") && myContact.countries.value==="US") {
    errorZipcode.innerHTML = "<p>The zipcode must be less than 5 and is required since country is United States.</p>";
  }
  else {
    validZipcode = true;
  }
  
  if (validFirstName && validLastName && validEmail && validPhone && validUsername && validUserPassword && validAddress && validCity && validStates && validCountry && validZipcode) {
        return true; // Form submission allowed
    } 
  else {
        return false; // Form submission prevented
    }
}
