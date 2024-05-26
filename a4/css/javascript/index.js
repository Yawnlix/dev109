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
  if (myContact.firstname.value.length > 20 || myContact.firstname.value===null || myContact.firstname.value==="" || !myContact.firstname.value.match(letters)) {
    errorMessages += "<p>The firstname must be less than 20 characters and is required. Only letters are accepted.</p>";
  }
  else {
    validFirstName = true;
  }
  
  //validates lastname
  if (myContact.lastname.value.length > 50 || myContact.lastname.value===null || myContact.firstname.value==="" || !myContact.lastname.value.match(letters)) {
    errorMessages += "<p>The lastname must be less than 50 characters and is required. Only letters are accepted.</p>";
  }
  else {
    validLastName = true;
  }
  
  //validates email
  if (myContact.email.value===null || myContact.email.value==="") {
    errorMessages += "<p>The email is required.</p>";
  }
  else {
    validEmail = true;
  }
  
  //validates phone number
  if (myContact.phone.value.length > 15 || myContact.phone.value===null || myContact.phone.value==="" || !myContact.phone.value.match(numbers)) {
    errorMessages += "<p>The phone number must be less than 15 digits and is required. Only numbers are accepted.</p>";
  }
  else {
    validPhone = true;
  }
  
  //validates username
  if (myContact.username.value.length > 12 || myContact.username.value===null || myContact.username.value==="") {
    errorMessages += "<p>The username must be less than 12 characters and is required.</p>";
  }
  else {
    validUsername = true;
  }
  
  //validates password
  if (myContact.password.value.length > 7 || myContact.password.value===null || myContact.password.value==="") {
    errorMessages += "<p>The password must be less than 7 characters and is required.</p>";
  }
  else {
    validUserPassword = true;
  }
  
  //validates address
  if (myContact.address.value===null || myContact.address.value==="") {
    errorMessages += "<p>The address is required.</p>";
  }
  else {
    validAddress = true;
  }
  
  //validates city
  if (myContact.city.value===null || myContact.city.value==="") {
    errorMessages += "<p>The city is required.</p>";
  }
  else {
    validCity = true;
  }
  
  //validates state
  if (myContact.states.value===null || myContact.states.value==="") {
    errorMessages += "<p>The state is required.</p>";
  }
  else {
    validStates = true;
  }
  
  //validates country
  if (myContact.countries.value===null || myContact.countries.value==="") {
    errorMessages += "<p>The country is required.</p>";
  }
  else {
    validCountry = true;
  }
  
  //validates zipcode
  if ((myContact.zipcode.value===null || myContact.zipcode.value==="") && myContact.countries.value==="US") {
    errorMessages += "<p>The zipcode is required since country is United States.</p>";
  }
  else {
    validZipcode = true;
  }
  
  document.getElementById("errorMessages").innerHTML = errorMessages;
  return (validFirstName && validUsername && validEmail && validPhone && validUserPassword && validAddress && validCity && validStates && validCountry && validZipcode);
}

