function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        producePrompt('Name is required', 'name-error', 'red');
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        producePrompt('First and last name', 'name-error', 'red');
        return false;
    }

    producePrompt('Valid', 'name-error', 'green');
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        producePrompt('Phone Number is required', 'phone-error', 'red');
        return false;
    }

    if (phone.length != 12) {
        producePrompt('Include area code', 'phone-error', 'red');
        return false;
    }

    if (!phone.match(/^[0-9]{12}$/)) {
        producePrompt('Digits only no space', 'phone-error', 'red');
        return false;
    }

    producePrompt('Valid', 'phone-error', 'green');
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        producePrompt('Email is required', 'email-error', 'red');
        return false;
    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        producePrompt('Invalid email', 'email-error', 'red');
        return false;
    }

    producePrompt('Valid', 'email-error', 'green');
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 50;
    var left = required - message.length;

    if (left > 0) {
        producePrompt(left + "more characters required", 'message-error', 'red');
        return false;
    }

    producePrompt('Valid', 'message-error', 'green');
    return true;
}

function validateLocation() {
    var province = document.getElementById('province').value;
    var city = document.getElementById('city').value;
    var barangay = document.getElementById('barangay').value;

    if (province === "") {
        producePrompt('Province is required', 'province-error', 'red');
        return false;
    }

    if (city === "") {
        producePrompt('City is required', 'city-error', 'red');
        return false;
    }

    if (barangay === "") {
        producePrompt('Barangay is required', 'barangay-error', 'red');
        return false;
    }

    producePrompt('Valid', 'province-error', 'green');
    producePrompt('Valid', 'city-error', 'green');
    producePrompt('Valid', 'barangay-error', 'green');
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage() || !validateLocation()) {
        jsShow('submit-error');
        producePrompt('Fix error to submit', 'submit-error', 'red');
        setTimeout(function () {jsHide('submit-error');}, 2000);
    }

    else {
        
    }
}

function jsShow(id) {
    document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
    document.getElementById(id).style.display = 'none';
}

function producePrompt(message, location, color) {
    document.getElementById(location).innerHTML = message;
    document.getElementById(location).style.color = color;
}

var provinceLists = {
    "NCR": ["Manila", "Pasay", "Marikina"],
    "RIZAL": ["Taytay", "Angono", "Tanay", "Antipolo"]
};

var barangayLists = {
    "Manila": ["Barangay A", "Barangay B", "Barangay C"],
    "Pasay": ["Barangay AA", "Barangay BB", "Barangay CC"],
    "Marikina": ["Barangay D", "Barangay E", "Barangay F"],
    "Taytay": ["Barangay DD", "Barangay EE", "Barangay FF"],
    "Angono": ["Barangay G", "Barangay H", "Barangay I"],
    "Tanay": ["Barangay GG", "Barangay HH", "Barangay II"],
    "Antipolo": ["Barangay J", "Barangay K", "Barangay L"]
};

function provinceChange(selectObj) {
    var selectedProvince = selectObj.value;
    var cityList = provinceLists[selectedProvince];
    var citySelect = document.getElementById('city');

    while (citySelect.options.length > 0) {
        citySelect.remove(0);
    }

    if (cityList) {
        cityList.forEach(function (city) {
            var newOption = document.createElement("option");
            newOption.value = city;
            newOption.text = city;
            citySelect.add(newOption);
        });

        citySelect.selectedIndex = 0;
        cityChange(citySelect);
    }
}

function cityChange(selectObj) {
    var selectedCity = selectObj.value;
    var barangayList = barangayLists[selectedCity];
    var barangaySelect = document.getElementById('barangay');

    while (barangaySelect.options.length > 0) {
        barangaySelect.remove(0);
    }

    if (barangayList) {
        barangayList.forEach(function (barangay) {
            var newOption = document.createElement("option");
            newOption.value = barangay;
            newOption.text = barangay;
            barangaySelect.add(newOption); 
        });
    }
}