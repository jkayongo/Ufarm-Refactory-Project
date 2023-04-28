 <!-- <div class="container  aoregister">
        <div class="card">
            <div class="card-header">
                Please Register Farmer Ones From Here!
            </div>
            <div class="card-body">
                <form id="aoRegistrationForm" action="#" name="aoRegistration" onsubmit="return Validate(event)"
                    method="POST">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="fn" placeholder="Farmer's name">
                        <label for="fn">Enter F.O name</label>
                        <small id="fnError"></small>
                    </div>
                    <div class="form-floating mb-3">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                SELECT WARD THEY REPRESENT
                            </button>
                            <ul class="dropdown-menu" id="ward">
                                <li><button class="dropdown-item" type="button">Urban ward 1</button>
                                </li>
                                <li><button class="dropdown-item" type="button">Urban ward 2</button></li>
                                <li><button class="dropdown-item" type="button">Urban ward 3</button></li>
                                <li><button class="dropdown-item" type="button">Urban ward 4</button></li>
                            </ul>
                            <small id="wardError"></small>
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="initialUnumber" placeholder="Unique F.0 number">
                        <label for="uniqueNumber1">Create Unique F.0 number</label>
                        <small id="unError1"></small>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="uniqueNumber2"
                            placeholder="Confirm Unique F.0 number">
                        <label for="uniqueNumber2">Confirm Unique F.O number</label>
                        <small id="unError2"></small>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="date" class="form-control" id="dor" placeholder="date of registration">
                        <label for="dor">Enter Date Of Registration</label>
                        <small id="dorError"></small>
                    </div>
                    <div class="form-group mb-3">
                        <label for="g">Gender</label>
                        <div>
                            <label for="male" class="radio-inline"><input type="radio" name="gender"
                                    id="male">Male</label>
                            <label for="female" class="radio-inline"><input type="radio" name="gender"
                                    id="female">Female</label>
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="date" class="form-control" id="dob" placeholder="date of birth">
                        <label for="dob">Enter Date Of Birth</label>
                        <small id="dobError"></small>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="activities"
                            placeholder="activities he or she is involved in">
                        <label for="activities">Activities he or she is involved in</label>
                        <small id="activitiesError"></small>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="nin" placeholder="NIN Number">
                        <label for="nin">Enter his or her NIN Number</label>
                        <small id="ninError"></small>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="tel" class="form-control" id="telephoneNo" placeholder="Telephone Number">
                        <label for="telephoneNo">Enter his or her Telephone Number</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="directions"
                            placeholder="Direction to his or her home">
                        <label for="directions">Enter directions to his or her home</label>
                    </div>
                    <div class="form-group mb-3">
                        <label for="rt">Residence Type</label>
                        <div>
                            <label for="byBirth" class="radio-inline"><input type="radio" name="residence type"
                                    id="byBirth">By Birth</label>
                            <label for="byRegistration" class="radio-inline"><input type="radio" name="residence type"
                                    id="byRegistration">By registration</label>
                            <label for="others" class="radio-inline"><input type="radio" name="residence type"
                                    id="others">Others</label>
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="period of stay">Period of stay in the ward in years</label>
                        <div>
                            <label for="ten" class="radio-inline"><input type="radio" name="years" id="ten">Below 10
                            </label>
                            <label for="aboveTen" class="radio-inline"><input type="radio" name="years"
                                    id="aboveTen">Above
                                ten</label>
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <button type="submit"  class="btn btn-success">Confirm Registration</button>
                        <!-- <a href="/Ufarmrecords/aorecords.html" class="btn btn-success" >Confirm Registration</a> -->
                    </div>
                </form>

            </div>
        </div>
    </div> -->




    <!-- const Validate = (event) => {
    let error = 0
    //picking inputs
    let foName = document.getElementById("fn")
    let foNin = document.getElementById("nin")
    let fodateofBirth = document.getElementById("dob")
    let foPhoneNo = document.getElementById ("telephoneNo")
    let foDirections = document.getElementById("directions")
    let founiqueNumber = document.getElementById("initialUnumber")
    let confirmedFoun = document.getElementById("uniqueNumber2")
    let fodateofRegistration = document.getElementById("dor")
    let foDuty = document.getElementById("activity")
    // picking errors
    let foNameError = document.getElementById("fnError")
    let foNinError = document.getElementById("ninerror")
    let fodateofBirthError = document.getElementById("dobError")
    let foPhoneNoError = document.getElementById("telephoneNoError")
    let foDirectionsError = document.getElementById("directionsError")
    let founiqueNumberError = document.getElementById("unError1")
    let confirmedFounError = document.getElementById("unError2")
    let fodateofRegistrationError = document.getElementById("dorError")
    let foDutyError = document.getElementById("activityError")
    // regular expresssions
    const foNinRegex = /^[0-9a-zA-Z]+$/;
    const fodateofBirthRegex = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    const foPhoneNoRegex = /^\d{10}$/;
    const founiqueNumberRegex = /^FO-([0-9]{4})+$/;
    const confirmedFounRegex = /^FO-([0-9]{4})+$/;
    const fodateofRegistrationRegex = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    
    
    // validations
    if (foName.value == "") {
        foName.style.border = "2px solid red"
        foNameError.textContent = "Farmer's name is required"
        foNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (foName.value.length < 5) {
        foName.style.border = "2px solid red"
        foNameError.textContent = "Please name must be atleast 5 letters!"
        foNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (foName.value.length > 50) {
        foName.style.border = "2px solid red"
        foNameError.textContent = "Please name must not exceed 50 letters!"
        foNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        foName.style.border = "2px solid green"
        foNameError.textContent = ""
    }
    if (foNin.value ==""){
        foNin.style.border = "2px solid red"
        foNinError.textContent = "Please F.O NIN number must be alphanumeric"
        foNinError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!(foNin.value.match(foNinRegex))){
        foNin.style.border = "2px solid red"
        foNinError.textContent = "Please enter the correct NIN Number"
        foNinError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (foNin.value.length !== 13){
        foNin.style.border = "2px solid red"
        foNinError.textContent = "Please F.O NIN Number should be 13 alphanumeric characters!"
        foNinError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        foNin.style.border = "2px solid green"
        foNinError.textContent = ""
    }
    if (fodateofBirth.value == "") {
        fodateofBirth.style.border = "2px solid red"
        fodateofBirthError.textContent = "Please enter the date of birth"
        fodateofBirthError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
        return false
    }
    else if (!(fodateofBirth.value.match(fodateofBirthRegex))){
        fodateofBirth.style.border = "2px solid red"
        fodateofBirthError.textContent = "Please enter the correct date of birth"
        fodateofBirthError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        fodateofBirth.style.border = "2px solid green"
        fodateofBirthError.textContent = ""
    }
    if (foPhoneNo.value == ""){
        foPhoneNo.style.border = "2px solid red"
        foPhoneNoError.textContent = "Please his/her telephone number"
        foPhoneNoError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    if (error > 0) {
        event.preventDefault()
    }
}
if (foPhoneNo.value == ""){
        foPhoneNo.style.border = "2px solid red"
        foPhoneNoError.textContent = "Please enter F.O telephone number!"
        foPhoneNoError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!(foPhoneNo.value.match(foPhoneNoRegex))){
        foPhoneNo.style.border = "2px solid red"
        foPhoneNoError.textContent = "Please telephone number must be 10 digits"
        foPhoneNoError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        foPhoneNo.style.border = "2px solid green"
        foPhoneNoError.textContent = ""
    }
    if (foDirections.value == ""){
        foDirections.style.border = "2px solid red"
        foDirectionsError.textContent = "Please enter directions to his/her home"
        foDirectionsError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        foDirections.style.border = "2px solid green"
        foDirectionsError.textContent = ""
    }
    if (founiqueNumber.value == "") {
        founiqueNumber.style.border = "2px solid red"
        founiqueNumberError.textContent = "Please create a unique F.O number"
        founiqueNumberError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!(founiqueNumber.value.match(founiqueNumberRegex))) {
        founiqueNumber.style.border = "2px solid red"
        founiqueNumberError.textContent = "Please create a correct unique F.O number"
        founiqueNumberError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        founiqueNumber.style.border = "2px solid green"
        founiqueNumberError.textContent = ""
    }
    if (confirmedFoun.value == "") {
        confirmedFoun.style.border = "2px solid red"
        confirmedFounError.textContent = "Please confirm unique F.O number"
        confirmedFounError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!(confirmedFoun.value.match(confirmedFounRegex))) {
        confirmedFoun.style.border = "2px solid red"
        confirmedFounError.textContent = "Please confirm with the correct unique F.O number"
        confirmedFounError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        confirmedFoun.style.border = "2px solid green"
        confirmedFounError.textContent = ""
    }
    if (fodateofRegistration.value == "") {
        fodateofRegistration.style.border = "2px solid red"
        fodateofRegistrationError.textContent = "Please enter date of registration"
        fodateofRegistrationError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else if (!(fodateofRegistration.value.match(fodateofRegistrationRegex))) {
        fodateofRegistration.style.border = "2px solid red"
        fodateofRegistrationError.textContent = "Please enter the write date format"
        fodateofRegistrationError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else {
        fodateofRegistration.style.border = "2px solid green"
        fodateofRegistrationError.textContent = ""
    }
    if (foDuty.value == ""){
        foDuty.style.border = "2px solid red"
        foDutyError.textContent = "Please enter activities he or she is involved in"
        foDutyError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    else{
        foDuty.style.border = "2px solid red"
        foDutyError.textContent = ""
    } -->