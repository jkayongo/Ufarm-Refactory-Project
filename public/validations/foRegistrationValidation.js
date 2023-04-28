const Validate = (event) => {
    let error = 0
    // picking inputs
    let urbanFarmerName = document.getElementById("ufName")
    let urbanFarmerNin = document.getElementById("ufnin")
    let urbanFarmerDob = document.getElementById("ufdob")
    // let urbanFarmerMale = document.getElementById("uFmale")
    // let urbanFarmerfemale = document.getElementById("UFfemale")
    let urbanFarmerTel = document.getElementById("uftelephone")
    let urbanFarmerEmail = document.getElementById("ufemail")
    let urbanFarmerWard = document.getElementById("ufward")
    let urbanFarmerActivities = document.getElementById("ufactivities")
    let urbanFarmerRegdate = document.getElementById("regDate")
    let urbanFarmerId = document.getElementById("ufuniqueid")
    // picking errors
    let urbanFarmerNameError = document.getElementById("ufNameError")
    let urbanFarmerNinError = document.getElementById("ufninError")
    let urbanFarmerDobError = document.getElementById("ufdobError")
    // let urbanFarmerGenderError = document.getElementById("ufGenderError")
    let urbanFarmerTelError = document.getElementById("uftelephoneError")
    let urbanFarmerEmailError = document.getElementById("ufemailError")
    let urbanFarmerWardError = document.getElementById("ufwardError")
    let urbanFarmerActivitiesErrors = document.getElementById("ufactivitiesError")
    let urbanFarmerRegdateError = document.getElementById("regDateError")
    let urbanFarmerIdError = document.getElementById("ufuniqueidError")
    // regular expressions
    const urbanFarmerNameRegex = /^[a-zA-Z-]+(?:\s[a-zA-Z-]+)*$/;
    const urbanFarmerNinRegex = /^[0-9a-zA-Z]+$/;
    const urbanFarmerTelRegex = /^\d{10}$/;
    const urbanFarmerEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const urbanFarmerIdRegex = /^UF-([0-9]{4})+$/;
    // validating
    if (urbanFarmerName.value == "") {
        urbanFarmerName.style.border = "2px solid red"
        urbanFarmerNameError.textContent = "Please enter the urban farmer name"
        urbanFarmerNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!(urbanFarmerName.value.match(urbanFarmerNameRegex))) {
        urbanFarmerName.style.border = "2px solid red"
        urbanFarmerNameError.textContent = "Please the urban farmer name must be a string/word"
        urbanFarmerNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (urbanFarmerName.value.length < 5) {
        urbanFarmerName.style.border = "2px solid red"
        urbanFarmerNameError.textContent = "Please the urban farmer name must atleast be 5 letters"
        urbanFarmerNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (urbanFarmerName.value.length > 50) {
        urbanFarmerName.style.border = "2px solid red"
        urbanFarmerNameError.textcontent = "Please the urban farmer name must not exceed 50 letters"
        urbanFarmerNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        urbanFarmerName.style.border = "2px solid green"
        urbanFarmerNameError.textContent = ""
    }
    if (urbanFarmerNin.value == "") {
        urbanFarmerNin.style.border = "2px solid red"
        urbanFarmerNinError.textContent = "Please enter the urban farm Nin"
        urbanFarmerNinError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!(urbanFarmerNin.value.match(urbanFarmerNinRegex))) {
        urbanFarmerNin.style.border = "2px solid red"
        urbanFarmerNinError.textContent = "Please enter a correct urban farmer Nin"
        urbanFarmerNinError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (urbanFarmerNin.value.length !== 13) {
        urbanFarmerNin.style.border = "2px solid red"
        urbanFarmerNinError.textContent = "Please the urban farmer Nin must be 13 alphanumeric characters"
        urbanFarmerNinError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        urbanFarmerNin.style.border = "2px solid green"
        urbanFarmerNinError.textContent = ""
    }
    if (urbanFarmerDob.value == "") {
        urbanFarmerDob.style.border = "2px solid red"
        urbanFarmerDobError.textContent = "Please enter the urban farmer date of birth"
        urbanFarmerDobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        urbanFarmerDob.style.border = "2px solid green"
        urbanFarmerDobError.textContent = ""
    }
    // if (!(urbanFarmerMale.checked && urbanFarmerfemale.checked)) {
    //     urbanFarmerGenderError.textContent = "Please select urban farmer gender"
    //     urbanFarmerGenderError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    //     error++
    // }
    // else {
    //     urbanFarmerGenderError.textContent = ""
    // }
    if (urbanFarmerTel.value == "") {
        urbanFarmerTel.style.border = "2px solid red"
        urbanFarmerTelError.textContent = "Please enter urban farmer telephone number"
        urbanFarmerTelError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!(urbanFarmerTel.value.match(urbanFarmerTelRegex))) {
        urbanFarmerTel.style.border = "2px solid red"
        urbanFarmerTelError.textContent = "Telephone number must be 10 digits"
        urbanFarmerTelError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        urbanFarmerTel.style.border = "2px solid green"
        urbanFarmerTelError.textContent = ""
    }
    if (urbanFarmerEmail.value == "") {
        urbanFarmerEmail.style.border = "2px solid red"
        urbanFarmerEmailError.textcontent = "Please enter urban farmer email"
        urbanFarmerEmailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!(urbanFarmerEmail.value.match(urbanFarmerEmailRegex))) {
        urbanFarmerEmail.style.border = "2px solid red"
        urbanFarmerEmailError.textContent = "Please enter the correct urban farmer email"
        urbanFarmerEmailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        urbanFarmerEmail.style.border = "2px solid green"
        urbanFarmerEmailError.textContent = ""
    }
    if (urbanFarmerWard.value == "") {
        urbanFarmerWard.style.border = "2px solid red"
        urbanFarmerWardError.textContent = "Please select urban farmer ward"
        urbanFarmerWardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        urbanFarmerWard.style.border = "2px solid green"
        urbanFarmerWardError.textContent = ""
    }
    if (urbanFarmerActivities.value == "") {
        urbanFarmerActivities.style.border = "2px solid red"
        urbanFarmerActivitiesErrors.textContent = "Please enter urban farmer activities"
        urbanFarmerActivitiesErrors.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        urbanFarmerActivities.style.border = "2px solid green"
        urbanFarmerActivitiesErrors.textContent = ""
    }
    if (urbanFarmerRegdate.value == "") {
        urbanFarmerRegdate.style.border = "2px solid red"
        urbanFarmerRegdateError.textContent = "Please enter urban farmer date of registration"
        urbanFarmerRegdateError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        urbanFarmerRegdate.style.border = "2px solid green"
        urbanFarmerRegdateError.textContent = ""
    }
    if (error > 0) {
        event.preventDefault()
    }
    if (urbanFarmerId.value == "") {
        urbanFarmerId.style.border = "2px solid red"
        urbanFarmerIdError.textContent = "Please create urban farmer unique id"
        urbanFarmerIdError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!(urbanFarmerId.value.match(urbanFarmerIdRegex))) {
        urbanFarmerId.style.border = "2px solid red"
        urbanFarmerIdError.textContent = "Please enter the correct format of the urbanfarmer unique id"
        urbanFarmerIdError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        urbanFarmerId.style.border = "2px solid green"
        urbanFarmerIdError.textContent = ""
    }
}