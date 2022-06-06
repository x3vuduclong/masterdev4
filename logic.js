const fullName = document.getElementById("fname");
const email = document.getElementById("email");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");
const nameOfCard = document.getElementById("nameOfCard");
const creditCardNum = document.getElementById("creditCardNum");
const expMonth = document.getElementById("expMonth");
const expYear = document.getElementById("expYear");
const cvv = document.getElementById("cvv");

const btnSubmit = document.getElementById("btn-submit");

const inputEle = document.querySelectorAll(".input-row");

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('output').appendChild(table);
// Adding the entire table to the body tag
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Full name";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Email";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Address";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "City";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "State";
let heading_6 = document.createElement('th');
heading_6.innerHTML = "Zip";
let heading_7 = document.createElement('th');
heading_7.innerHTML = "Name on Card";
let heading_8 = document.createElement('th');
heading_8.innerHTML = "Credit card number";
let heading_9 = document.createElement('th');
heading_9.innerHTML = "Exp Month";
let heading_10 = document.createElement('th');
heading_10.innerHTML = "Exp Year";
let heading_11 = document.createElement('th');
heading_11.innerHTML = "CVV";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
row_1.appendChild(heading_7);
row_1.appendChild(heading_8);
row_1.appendChild(heading_9);
row_1.appendChild(heading_10);
row_1.appendChild(heading_11);
thead.appendChild(row_1);

btnSubmit.addEventListener("click", function () {
    Array.from(inputEle).map((ele) =>
        ele.classList.remove("success", "error")
    );
    let isValid = checkValidate();

    if (isValid == true) {
        let fullNameValue = fullName.value;
        let emailValue = email.value;
        let addressValue = address.value;
        let cityValue = city.value;
        let stateValue = state.value;
        let zipValue = zip.value;
        let nameOfCardValue = nameOfCard.value;
        let creditCardNumValue = creditCardNum.value;
        let expMonthValue = expMonth.value;
        let expYearValue = expYear.value;
        let cvvValue = cvv.value;
        let value = [fullNameValue, emailValue, addressValue, cityValue, stateValue, zipValue, nameOfCardValue, creditCardNumValue,
            expMonthValue, expYearValue, cvvValue
        ];
        let row_2 = document.createElement('tr');
        for (let i = 0; i < value.length; i++) {
            let row_2_data_1 = document.createElement('td');
            row_2_data_1.innerHTML = value[i];
            row_2.appendChild(row_2_data_1);
        }
        tbody.append(row_2);
    }
})  ;


function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add("error");
    parentEle.querySelector("small").innerText = message;
}

function setSuccess(ele) {
    ele.parentNode.classList.add("success");
}

function checkValidate() {
    let fullNameValue = fullName.value;
    let emailValue = email.value;
    let addressValue = address.value;
    let cityValue = city.value;
    let stateValue = state.value;
    let zipValue = zip.value;
    let nameOfCardValue = nameOfCard.value;
    let creditCardNumValue = creditCardNum.value;
    let expMonthValue = expMonth.value;
    let expYearValue = expYear.value;
    let cvvValue = cvv.value;

    let isCheck = true;
    //check fullName
    if (fullNameValue == "") {
        setError(fullName, "fullName is empty");
        isCheck = false;
    } else {
        setSuccess(fullName);
    }

    //check email
    if (emailValue == "") {
        setError(email, "Email is empty");
        isCheck = false;
    } else {
        setSuccess(email);
    }

    if (addressValue == "") {
        setError(address, "Address is empty");
        isCheck = false;
    } else {
        setSuccess(address);
    }

    if (cityValue == "") {
        setError(city, "City is empty");
        isCheck = false;
    } else {
        setSuccess(city);
    }

    if (stateValue == "") {
        setError(state, "State is empty");
        isCheck = false;
    } else {
        setSuccess(state);
    }

    if (zipValue == "") {
        setError(zip, "Zip is empty");
        isCheck = false;
    } else {
        setSuccess(zip);
    }

    if (nameOfCardValue == "") {
        setError(nameOfCard, "nameOfCard is empty");
        isCheck = false;
    } else {
        setSuccess(nameOfCard);
    }

    if (creditCardNumValue == "") {
        setError(creditCardNum, "creditCardNumber is empty");
        isCheck = false;
    } else {
        setSuccess(creditCardNum);
    }

    if (expMonthValue == "") {
        setError(expMonth, "expMonth is empty");
        isCheck = false;
    } else {
        setSuccess(expMonth);
    }

    if (expYearValue == "") {
        setError(expYear, "ExpYear is empty");
        isCheck = false;
    } else {
        setSuccess(expYear);
    }

    if (cvvValue == "") {
        setError(cvv, "CVV is empty");
        isCheck = false;
    } else {
        setSuccess(cvv);
    }
    return isCheck;
}


