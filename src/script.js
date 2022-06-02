var email = document.getElementById('email')
var zip = document.getElementById('zip')
var cardNumber = document.getElementById('cardnumber')
var submit = document.getElementById('submit')
var table = document.getElementById('table')
var inputs = document.getElementsByClassName('input');
var tds = document.querySelectorAll('td');

// var error = document.getElementsByClassName('log-error');

/*  Function Validate require input and Flag true/false show Table */
function validateRequire(inputs) {
    var flag
    for (var i = 0; i < inputs.length; i++) {
        if (document.getElementById(inputs[i].getAttribute('id')).value.trim() == '') {
            document.getElementById(inputs[i].getAttribute('id')).classList.add('error')
            flag = true
        }
        else {
            document.getElementById(inputs[i].getAttribute('id')).classList.remove('error')
            flag = false
        }
    }
    return flag
}

/* Output data Table */
function outputTable(inputs, tds) {
    for (var i = 0; i < inputs.length; i++) {
        tds[i].innerHTML = document.getElementById(inputs[i].getAttribute('id')).value.trim()
    }
}

/*  Function Validate Type Email */
function validateEmail(selector) {
    var regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!selector.value.match(regexEmail)) {
        selector.classList.add('error')
    }
    else {
        selector.classList.remove('error')
    }
}

/* Function Validate Card Number */
function validateCardNumber(selector) {
    var cardNumber = selector.value.trim().length

}

/* Button Submit */
submit.addEventListener('click', () => {
    if (!validateRequire(inputs)) {
        table.style.display = "block"
    }
    else {
        table.style.display = "none"
    }
    validateEmail(email)
    validateCardNumber(cardNumber)
    outputTable(inputs, tds)

})