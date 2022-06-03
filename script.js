const HEADER = ['Id', 'Title', 'Value'];
const object = {
    'Full name': null,
    'Email': null,
    'Address': null,
    'City': null,
    'State': null,
    'Zip': null,

    'Name on Card': null,
    'Credit Card Number': null,
    'Exp Month': null,
    'Exp Year': null,
    'CVV': null,
}

const form = document.getElementById("fcheckout");
const inputName = document.getElementById("fname");
const inputEmail = document.getElementById("femail");
const inputAddress = document.getElementById("faddr");
const inputCity = document.getElementById("fcity");
const inputState = document.getElementById("fstate");
const inputZip = document.getElementById("fzip");

const inputNameCard = document.getElementById("fcname");
const inputCredit = document.getElementById("fccnum");
const inputExpMonth = document.getElementById("fexpmonth");
const inputExpYear = document.getElementById("fexpyear");
const inputCVV = document.getElementById("fcvv");
const table = document.getElementById("ftable");

const regexName = /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/m;
const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexCredit = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
const regexZip = /^[0-9]{5}(?:-[0-9]{4})?$/;
const regexCVV = /^[0-9]{3,4}$/;

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function setErrContent(input, errMes, visibility, color) {
    var el = input.previousElementSibling.lastElementChild;
    el.textContent = errMes;
    el.style.visibility = visibility;
    input.style.borderColor = color;
}

function setErr(input, regex, customMes) {
    var value = input.value.trim();
    if (input === inputCredit) value = value.replace(/-/g, '');
    var errMes = value === '' ? 'Required' : customMes;
    if (value === '' || !regex.test(value)) setErrContent(input, errMes, 'visible', 'red');
    else setErrContent(input, '', 'hidden', '#ccc');
}

function setCusErr(input, customMes, checkCondition) {
    const value = input.value.trim();
    var color = '#ccc';
    var content = '';
    var visibility = 'hidden';
    if (value === '') {
        content = 'Required';
        visibility = 'visible';
        color = 'red';
    } else if (checkCondition) {
        content = customMes;
        visibility = 'visible';
        color = 'red';
    }
    setErrContent(input, content, visibility, color);
}

inputName.addEventListener('blur', (e) => {
    setErr(inputName, regexName, 'Not a full name');
});

inputEmail.addEventListener('blur', (e) => {
    setErr(inputEmail, regexEmail, 'Not an email');
});

inputAddress.addEventListener('blur', (e) => {
    var input = inputAddress;
    if (input.value.trim() === '') setErrContent(input, 'Required', 'visible', 'red');
    else setErrContent(input, '', 'hidden', '#ccc');
});

inputCity.addEventListener('blur', (e) => {
    var input = inputCity;
    if (input.value.trim() === '') setErrContent(input, 'Required', 'visible', 'red');
    else setErrContent(input, '', 'hidden', '#ccc');
});

inputState.addEventListener('blur', (e) => {
    var input = inputState;
    if (input.value.trim() === '') setErrContent(input, 'Required', 'visible', 'red');
    else setErrContent(input, '', 'hidden', '#ccc');
});

inputNameCard.addEventListener('blur', (e) => {
    setErr(inputNameCard, regexName, 'Not a Name on Card');
});

inputCredit.addEventListener('blur', (e) => {
    setErr(inputCredit, regexCredit, 'Not a credit');
});

inputExpMonth.addEventListener('blur', (e) => {
    setCusErr(inputExpMonth, 'Not a month', months.indexOf(e.target.value.trim()) === -1);
});

inputExpYear.addEventListener('blur', (e) => {
    const year = new Date().getFullYear();
    setCusErr(inputExpYear, 'Expired year or Not a year', (isNaN(e.target.value) || parseInt(e.target.value) < year));
});

inputZip.addEventListener('blur', (e) => {
    setErr(inputZip, regexZip, 'Not a zip');
});

inputCVV.addEventListener('blur', (e) => {
    setErr(inputCVV, regexCVV, 'Not a CVV');
});

form.addEventListener('submit', (e) => {
    var check = true;
    e.preventDefault();
    let data = [...e.currentTarget.elements].filter((ele) => ele.type !== "submit" && ele.type !== "checkbox");
    data.map(ele => {
        var el = ele.previousElementSibling.lastElementChild;
        if (el.style.visibility === 'visible') check = false;
        else if (ele.value.trim() === '') {
            setErrContent(ele, 'Required', 'visible', 'red');
            check = false;
        }
    })

    if (check) {
        if (table.childElementCount <= 0) {
            var header = document.createElement("tr");
            HEADER.map(e => {
                var th = document.createElement("th");
                th.innerHTML = e;
                header.appendChild(th);
            })
            table.appendChild(header);

            data.map((e, i) => {
                object[Object.keys(object)[i]] = e.value.trim();

                var tr = document.createElement("tr");
                var id = document.createElement("td");
                var title = document.createElement("td");
                var value = document.createElement("td");

                id.innerHTML = i;
                title.innerHTML = Object.keys(object)[i];
                value.innerHTML = object[Object.keys(object)[i]];

                tr.appendChild(id);
                tr.appendChild(title);
                tr.appendChild(value);
                table.appendChild(tr);
            })

        } else {
            data.map((e, i) => {
                object[Object.keys(object)[i]] = e.value.trim();

                var tr = table.getElementsByTagName("tr")[i + 1];
                var td = tr.getElementsByTagName("td");
                var value = td[2];
                value.innerHTML = object[Object.keys(object)[i]];
            })
        }
    } else if (table.childElementCount > 0) table.innerHTML = '';
})
