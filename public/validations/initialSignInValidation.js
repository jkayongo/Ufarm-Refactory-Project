const Validate = (event) =>{
    let error = 0
// picking inputs
    let signInEmail  = document.getElementById("userEmail")
    let signinPassword = document.getElementById("userPassword")
// picking errors
    let signInEmailError = document.getElementById("userEmailError")
    let signinPasswordError = document.getElementById("userPasswordError") 
// regular expressions
    const signInEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const signinPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
// validating
if (signInEmail.value == ""){
    signInEmail.style.border = "2px solid red"
    signInEmailError.textContent = "Please enter your email"
    signInEmailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
}
else if (!(signInEmail.value.match(signInEmailRegex))){
    signInEmail.style.border = "2px solid red"
    signInEmailError.textContent = "Please enter a valid email address"
    signInEmailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
}
else {
    signInEmail.style.border = "2px solid green"
    signInEmailError.textContent = ""
}
if (signinPassword.value == ""){
    signinPassword.style.border = "2px solid red"
    signinPasswordError.textContent = "Please enter your password"
    signinPasswordError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
}
else if (signinPassword.value.length < 8){
    signinPassword.style.border = "2px solid red"
    signinPasswordError.textContent = "Password must atleast be 8 characters!"
    signinPasswordError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
}
else if (signinPassword.value.length > 15){
    signinPassword.style.border = "2px solid red"
    signinPasswordError.textContent = "Password must not exceed 15 characters"
    signinPasswordError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
}
else if (!(signinPassword.value.match(signinPasswordRegex))){
    signinPassword.style.border = "2px solid red"
    signinPasswordError.textContent = "Password must contain atleast one uppercase letter, one lowercase letter, one numeric digit and one special character!"
    signinPasswordError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
}
else {
    signinPassword.style.border = "2px solid green"
    signinPasswordError.textContent = ""
}
if (error > 0){
    event.preventDefault()
}
}