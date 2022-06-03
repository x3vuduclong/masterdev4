const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zip = document.getElementById('zip');
const card_name = document.getElementById('card_name');
const card_number = document.getElementById('card_number');
const exp_month = document.getElementById('exp_month');
const exp_year = document.getElementById('exp_year');
const cvv = document.getElementById('cvv');

const btn = document.getElementById('submitt');
const inputEles = document.querySelectorAll('text_error');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );

    let isValid = checkValidate();

    if (isValid) {
        document.getElementById('fullname_text').innerText = fullname.value;
        document.getElementById('email_text').innerText = email.value;
        document.getElementById('address_text').innerText = address.value;
        document.getElementById('city_text').innerText = city.value;
        document.getElementById('state_text').innerText = state.value;
        document.getElementById('zip_text').innerText = zip.value;
        document.getElementById('card_name_text').innerText = card_name.value;
        document.getElementById('card_number_text').innerText = card_number.value;
        document.getElementById('exp_month_text').innerText = exp_month.value;
        document.getElementById('exp_year_text').innerText = exp_year.value;
        document.getElementById('cvv_text').innerText = cvv.value;
    }

});

function checkValidate() {
    let fullnameValue = document.getElementById('fullname');
    let emailValue = document.getElementById('email');
    let addressValue = document.getElementById('address');
    let cityValue = document.getElementById('city');
    let stateValue = document.getElementById('state');
    let zip = document.getElementById('zip');
    let card_nameValue = document.getElementById('card_name');
    let card_numberValue = document.getElementById('card_number');
    let exp_monthvalue = document.getElementById('exp_month');
    let exp_yearvalue = document.getElementById('exp_year');
    let cvvvalue = document.getElementById('cvv');


    if (fullnameValue.value == '') {

        setError(fullnameValue, 'Dont be empty');
        fullnameValue.style.borderColor = "red"
        isCheck = false;
    } else {
        setSuccess(fullnameValue);
    }

    if (emailValue.value == '') {
        setError(email, 'Dont be empty');
        emailValue.style.borderColor = "red"
        isCheck = false;
    } else if (!isEmail(emailValue.value)) {
        setError(email, 'Invalidate');
        emailValue.style.borderColor = "red"
        isCheck = false;
    } else {
        setSuccess(email);
    }

    if (addressValue.value == '') {
        setError(addressValue, 'Dont be empty');
        addressValue.style.borderColor = "red"
        isCheck = false;
    } else {
        setSuccess(addressValue);
    }

    if (cityValue.value == '') {
        setError(cityValue, 'Dont be empty');
        cityValue.style.borderColor = "red"
        isCheck = false;
    } else {
        setSuccess(cityValue);
    }

    if (stateValue.value == '') {
        setError(stateValue, 'Dont be empty');
        stateValue.style.borderColor = "red"
        isCheck = false;
    } else {
        setSuccess(stateValue);
    }

    if (zip.value == '') {
        setError(zip, 'Dont be empty');
        zip.style.borderColor = "red"
        isCheck = false;
    } else {
        setSuccess(zip);
    }

    if (card_nameValue.value == '') {
        setError(card_nameValue, 'Dont be empty');
        card_nameValue.style.borderColor = "red"
        isCheck = false;
    } else {
        setSuccess(card_nameValue);
    }

    if (card_numberValue.value == '') {
        setError(card_numberValue, 'Dont be empty');
        card_numberValue.style.borderColor = "red"
        isCheck = false;
    } else if (!isCardNumber(card_numberValue.value)) {
        setError(card_numberValue, 'Invalidate');
        card_numberValue.style.borderColor = "red"
        isCheck = false;
    } else {
        setSuccess(card_numberValue);
    }

    if (exp_monthvalue.value == '') {
        setError(exp_monthvalue, 'Dont be empty');
        exp_monthvalue.style.borderColor = "red"
        isCheck = false;
    } else if (!isMonth(exp_monthvalue.value)) {
        console.log(exp_monthvalue.value);
        setError(exp_monthvalue, 'Invalidate');
        exp_monthvalue.style.borderColor = "red"
        isCheck = false;
    } else {
        setSuccess(exp_monthvalue);
    }

    if (exp_yearvalue.value == '') {
        setError(exp_yearvalue, 'Dont be empty');
        exp_yearvalue.style.borderColor = "red"
        isCheck = false;
    } else if (!isYear(exp_yearvalue.value)) {
        setError(exp_yearvalue, 'Invalidate');
        exp_yearvalue.style.borderColor = "red"
        isCheck = false;
    } else {
        setSuccess(exp_yearvalue);
    }

    if (cvvvalue.value == '') {
        setError(cvvvalue, 'Dont be empty');
        cvvvalue.style.borderColor = "red"
        isCheck = false;
    } else {
        setSuccess(cvvvalue);
    }
    return true;
}

function setSuccess(ele) {
    ele.parentNode.classList.add('success');
    ele.parentNode.querySelector('.text_error').innerText = "";
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('.text_error').innerText = message;
}

function isEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

function isYear(number) {
    console.log(number)
    return /^(19[5-9]\d|20[0-4]\d|2050)$/.test(number);
}

function isMonth(number) {
    return /^(0[1-9]|1[0-2])$/.test(number);
}

function isCardNumber(number) {
    return /[^0-9]/.test(number);
}