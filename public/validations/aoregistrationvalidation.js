const Validate = (event) => {
    let error = 0
    // picking inputs
    let foName = document.getElementById("fn")
    let foNin = document.getElementById("nin")
    let fodob = document.getElementById("dob")
    // let foMale = document.getElementById("male")
    // let foFemale = document.getElementById("female")
    let foTel = document.getElementById("telephoneNo")
    let foWard = document.getElementById("ward")
    // let foResidence1 = document.getElementById("birth")
    // let foResidence2 = document.getElementById("registration")
    // let foResidence3 = document.getElementById("others")
    // let foPeriod1 = document.getElementById("downten")
    // let foPeriod2 = document.getElementById("tenUp")
    let foDirections = document.getElementById("directions")
    let foDuty = document.getElementById("activity")
    let foUniqueNumber = document.getElementById("initialUnumber")
    let foRegDate = document.getElementById("dor")
    // picking errors
    let foNameError = document.getElementById("fnError")
    let foNinError = document.getElementById("ninerror")
    let fodobError = document.getElementById("dobError")
    // let foGenderError = document.getElementById("genderError")
    let foTelError = document.getElementById("telephoneNoError")
    let foWardError = document.getElementById("wardError")
    // let foResidenceError = document.getElementById("residenceError")
    // let foPeriodError = document.getElementById("periodError")
    let foDirectionsError = document.getElementById("directionsError")
    let foDutyError = document.getElementById("activityError")
    let foUniqueNumberError = document.getElementById("unError1")
    let foRegDateError = document.getElementById("dorError")
    // regular expressions
    const foNameRegex = /^[A-Za-z\s-]+$/;
    const foNinRegex = /^[0-9a-zA-Z]+$/;
    const foTelRegex = /^\d{10}$/;
    const foUniqueNumberRegex = /^FO-([0-9]{4})+$/;
    // const foRegDateRegex = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    // validating
    if (foName.value == "") {
        foName.style.border = "2px solid red"
        foNameError.textContent = "Please enter F.O name"
        foNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!(foName.value.match(foNameRegex))) {
        foName.style.border = "2px solid red"
        foNameError.textContent = "Please name must be a string/word"
        foNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (foName.value.length < 5) {
        foName.style.border = "2px solid red"
        foNameError.textContent = "Please name must atleast be 5 letters"
        foNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (foName.value.length > 50) {
        foName.style.border = "2px solid red"
        foNameError.textContent = "Please name must not exceed 50 letters"
        foNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        foName.style.border = "2px solid green"
        foNameError.textContent = ""
    }
    if (foNin.value == "") {
        foNin.style.border = "2px solid red"
        foNinError.textContent = "Please enter F.O Nin"
        foNinError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!(foNin.value.match(foNinRegex))) {
        foNin.style.border = "2px solid red"
        foNinError.textContent = "Please F.O Nin must be alphanumeric"
        foNinError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (foNin.value.length !== 13) {
        foNin.style.border = "2px solid red"
        foNinError.textContent = "F.O Nin should be 13 alphanumeric characters!"
        foNinError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        foNin.style.border = "2px solid green"
        foNinError.textContent = ""
    }
    if (fodob.value == "") {
        fodob.style.border = "2px solid red"
        fodobError.textContent = "Please enter F.O date of birth!"
        fodobError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        fodob.style.border = "2px solid green"
        fodobError.textContent = ""
    }
    // if (!(foMale.checked && foFemale.checked)) {
    //     foGenderError.textContent = "Please select F.O gender!"
    //     foGenderError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    //     error++
    // }
    // else {
    //     foGenderError.textContent = ""
    // }
    if (foTel.value == "") {
        foTel.style.border = "2px solid red"
        foTelError.textContent = "Please enter F.O telephone number"
        foTelError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!(foTel.value.match(foTelRegex))) {
        foTel.style.border = "2px solid red"
        foTelError.textContent = "Please F.O telephone number must be 10 digits"
        foTelError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        foTel.style.border = "2px solid green"
        foTelError.textContent = ""
    }
    if (foWard.value == "") {
        foWard.style.border = "2px solid red"
        foWardError.textContent = "Please select ward they represent"
        foWardError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        foWard.style.border = "2px solid green"
        foWardError.textContent = ""
    }
    // if (!(foResidence1.checked && foResidence2.checked && foResidence3.checked)) {
    //     foResidenceError.textContent = "Please select F.O residence type"
    //     foResidenceError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    //     error++
    // }
    // else {
    //     foResidenceError.textContent = ""
    // }
    // if (!(foPeriod1.checked & foPeriod2.checked)) {
    //     foPeriodError.textContent = "Please select F.O period of stay in the ward"
    //     foPeriodError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    //     error++
    // }
    // else {
    //     foPeriodError.textContent = ""
    // }
    if (foDirections.value == "") {
        foDirections.style.border = "2px solid red"
        foDirectionsError.textContent = "Please enter directions to his or her home"
        foDirectionsError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        foDirections.style.border = "2px solid green"
        foDirectionsError.textContent = ""
    }
    if (foDuty.value == "") {
        foDuty.style.border = "2px solid red"
        foDutyError.textContent = "Please enter activities he or she is involved in"
        foDutyError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        foDuty.style.border = "2px solid green"
        foDutyError.textContent = ""
    }
    if (foUniqueNumber.value == "") {
        foUniqueNumber.style.border = "2px solid red"
        foUniqueNumberError.textContent = "Please create F.O unique number"
        foUniqueNumberError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!(foUniqueNumber.value.match(foUniqueNumberRegex))) {
        foUniqueNumber.style.border = "2px solid red"
        foUniqueNumberError.textContent = "Please enter the correct format of a unique id"
        foUniqueNumberError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        foUniqueNumber.style.border = "2px solid green"
        foUniqueNumberError.textContent = ""
    }
    if (foRegDate.value == "") {
        foRegDate.style.border = "2px solid red"
        foRegDateError.textContent = "Please enter date of registration"
        foRegDateError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    // else if (!(foRegDate.value.match(foRegDateRegex))){
    //     foRegDate.style.border = "2px solid red"
    //     foRegDateError.textContent = "Please enter a valid date"
    //     foRegDateError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    //     error++
    // }
    else {
        foRegDate.style.border = "2px solid green"
        foRegDateError.textContent = ""
    }
    if (error > 0) {
        event.preventDefault()
    }
}