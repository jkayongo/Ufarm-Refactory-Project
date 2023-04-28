const Validate = (event) => {
    let error = 0
    // picking inputs
    let userName = document.getElementById("yourname")
    let initialSignUpEmail = document.getElementById("initialemail")
    let initialSignUpPassword = document.getElementById("initialpassword")
    let initialConfirmPassword = document.getElementById("initialpassword2")
    let initialUserRole = document.getElementById("userRole")
    // picking errors
    let userNameError = document.getElementById("nameSignUpError")
    let initialSignUpEmailError = document.getElementById("emailError")
    let initialSignUpPasswordError = document.getElementById("passworderror")
    let initialConfirmPasswordError = document.getElementById(id = "confirmPasswordError")
    let initialUserRoleError = document.getElementById("userRoleError")
    // regular expressions
    // const userNameRegex = /^[0-9a-zA-Z]+$/;
    const initialSignUpEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const initialSignUpPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    const initialConfirmPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    // validating
    // if (!(userName.value.match(userNameRegex))) {
    //     userName.style.border = "2px solid red"
    //     userNameError.textContent = "Please your name must be alphanumeric"
    //     userNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    // }
    if (userName.value == "") {
        userName.style.border = "2px solid red"
        userNameError.textContent = "Please enter your name"
        userNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (userName.value.length < 5) {
        userName.style.border = "2px solid red"
        userNameError.textContent = "Please your name must atleast be of 5 letters"
        userNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (userName.value.length > 50) {
        userName.style.border = "2px solid red"
        userNameError.textContent = "Please your name must not exceed 50 letters"
        userNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        userName.style.border = "2px solid green"
        userNameError.textContent = "";
    }
    if (initialSignUpEmail.value == "") {
        initialSignUpEmail.style.border = "2px solid red"
        initialSignUpEmailError.textContent = "Please enter your email address"
        initialSignUpEmailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!initialSignUpEmail.value.match(initialSignUpEmailRegex)) {
        initialSignUpEmail.style.border = "2px solid red"
        initialSignUpEmailError.textContent = "Please type in a correct email address"
        initialSignUpEmailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {

    }
    if (initialSignUpPassword.value == "") {
        initialSignUpPassword.style.border = "2px solid red"
        initialSignUpPasswordError.textContent = "Please enter your password"
        initialSignUpPasswordError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (initialSignUpPassword.value.length < 8) {
        initialSignUpPassword = "2px solid red"
        initialSignUpPasswordError.textContent = "Password word must atleast be 8 characters!"
        initialSignUpPasswordError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (initialSignUpPassword.value.length > 15) {
        initialSignUpPassword = "2px solid red"
        initialSignUpPasswordError.textContent = "Password must not exceed 15 characters"
        initialSignUpPassword.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!(initialSignUpPassword.value.match(initialSignUpPasswordRegex))) {
        initialSignUpPassword.style.border = "2px solid red"
        initialSignUpPasswordError.textContent = "Password must contain atleast one uppercase letter, one lowercase letter, one numeric digit and one special character!"
        initialSignUpPasswordError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        initialSignUpPassword = "2px solid green"
        initialSignUpPasswordError.textContent = "";
    }
    if (initialConfirmPassword.value == "") {
        initialConfirmPassword.style.border = "2px solid red"
        initialConfirmPasswordError.textContent = "Please confirm your password!"
        initialConfirmPasswordError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (initialConfirmPassword.value.length < 8) {
        initialConfirmPassword.style.border = "2px solid red"
        initialConfirmPasswordError.textContent = "Password must atleast be 8 characters!"
        initialConfirmPasswordError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (initialConfirmPassword.value.length > 15) {
        initialConfirmPassword.style.border = "2px solid red"
        initialConfirmPasswordError.textContent = "Password must not exceed 15 characters!"
        initialConfirmPasswordError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!(initialConfirmPassword.value.match(initialConfirmPasswordRegex))) {
        initialConfirmPassword.style.border = "2px solid red"
        initialConfirmPasswordError.textContent = "Password must contain atleast one uppercase letter, one lowercase letter, one numeric digit and one special character!"
        initialConfirmPasswordError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        initialConfirmPassword.style.border = "2px solid green"
        initialConfirmPasswordError.textContent = "";
    }
    if (initialUserRole.value == "") {
        initialUserRole.style.border = "2px solid red"
        initialUserRoleError.textContent = "You are required to select a role"
        initialUserRoleError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    
    if (error > 0) {
        event.preventDefault()
    }
}

// const Users = () =>{
//     let user = document.ufInitialSignUp.userName;
//     let usser = "/^[a-zA-Z0-9]+$/";
//     if(user.value.length < 2 || !user.value.match(usser)){
//         user.style.border = "2px solid red"
//         return false;
//     }
//     else{
//         user.style.border = "2px solid white"
//     }
// }
