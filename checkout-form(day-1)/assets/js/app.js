const btnSubmit = document.querySelector("#submit");

const txtFullName = document.querySelector("#name");
const txtEmail = document.querySelector("#email");
const txtAddress = document.querySelector("#address");
const txtCity = document.querySelector("#city");
const txtState = document.querySelector("#state");
const txtZip = document.querySelector("#zip");
const txtCardName = document.querySelector("#card-name");
const txtCardNumber = document.querySelector("#card-number");
const expMonth = document.querySelector("#exp-month");
const expMonths = document.querySelectorAll("#exp-month option");
const txtExpYear = document.querySelector("#exp-year");
const txtCVV = document.querySelector("#cvv");
const chkConfirm = document.querySelector("#confirm");



btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const fullNameValue = txtFullName.value.trim();
  const emailValue = txtEmail.value.trim();
  const addressValue = txtAddress.value.trim();
  const cityValue = txtCity.value.trim();
  const stateValue = txtState.value.trim();
  const zipValue = txtZip.value.trim();
  const cardNameValue = txtCardName.value.trim();
  const cardNumberValue = txtCardNumber.value.trim();
  const expYearValue = txtExpYear.value.trim();
  const cvvValue = txtCVV.value.trim();

  isCheck(txtFullName, fullNameValue);
  isCheck(txtEmail, emailValue);
  isCheck(txtAddress, addressValue);
  isCheck(txtCity, cityValue);
  isCheck(txtState, stateValue);
  isCheck(txtZip, zipValue);
  isCheck(txtCardName, cardNameValue);
  isCheck(txtCardNumber, cardNumberValue);
  isMonth(expMonth, expMonths);
  isCheck(txtExpYear, expYearValue);
  isCheck(txtCVV, cvvValue);
  isConfirm(chkConfirm);

  if (isCheck(txtFullName, fullNameValue) && isCheck(txtEmail, emailValue) && isCheck(txtAddress, addressValue) &&
    isCheck(txtCity, cityValue) &&
    isCheck(txtState, stateValue) &&
    isCheck(txtZip, zipValue) &&
    isCheck(txtCardName, cardNameValue) &&
    isCheck(txtCardNumber, cardNumberValue) &&
    isMonth(expMonth, expMonths) &&
    isCheck(txtExpYear, expYearValue) &&
    isCheck(txtCVV, cvvValue) && isConfirm(chkConfirm)) {
    let dataPayment = {
      name: fullNameValue,
      email: emailValue,
      address: addressValue,
      city: cityValue,
      state: stateValue.toUpperCase(),
      zip: zipValue,
      cardName: cardNameValue,
      cardNumber: cardNumberValue,
      expMonth: isMonth(expMonth, expMonths),
      expYear: expYearValue,
      cvv: cvvValue,
    }
    renderInfoPayment(dataPayment);
  }
  else return;
})
function isCheck(ele, value) {
  if (ele.id === "email") {
    if (!isEmpty(value)) {
      ele.parentNode.classList.add("error");
      return false;
    }
    else if (!isEmail(value)) {
      ele.parentNode.classList.add("error");
      return false;
    }
    else {
      ele.parentNode.classList.remove("error");
      return true;
    }
  }

  else if (ele.id === "zip") {
    if (!isEmpty(value)) {
      ele.parentNode.classList.add("error");
      return false;
    }
    else if (!isZip(value)) {
      ele.parentNode.classList.add("error");
      return false;
    }
    else {
      ele.parentNode.classList.remove("error");
      return true;
    }
  }
  else if (ele.id === "card-number") {
    if (!isEmpty(value)) {
      ele.parentNode.classList.add("error");
      return false;
    }
    else if (!isCardNumber(value)) {
      ele.parentNode.classList.add("error");
      return false;
    }
    else {
      ele.parentNode.classList.remove("error");
      return true;
    }
  }

  else if (ele.id === "exp-year") {
    if (!isEmpty(value)) {
      ele.parentNode.classList.add("error");
      return false;
    }
    else if (!isYear(value)) {
      ele.parentNode.classList.add("error");
      return false;
    }
    else {
      ele.parentNode.classList.remove("error");
      return true;
    }
  }
  else if (ele.id === "cvv") {
    if (!isEmpty(value)) {
      ele.parentNode.classList.add("error");
      return false;
    }
    else if (!isCVV(value)) {
      ele.parentNode.classList.add("error");
      return false;
    }
    else {
      ele.parentNode.classList.remove("error");
      return true;
    }
  }
  else {
    if (!isEmpty(value)) {
      ele.parentNode.classList.add("error");
      return false;
    }
    else {
      ele.parentNode.classList.remove("error");
      return true;
    }
  }
}
function isMonth(selectMonth, months) {

  let value;
  months.forEach(item => {
    if (item.selected) {
      if (item.value === "") {
        selectMonth.parentNode.classList.add("error");
        value = item.value;
      }
      else {
        selectMonth.parentNode.classList.remove("error");
        value = item.value;
      }
    }
  });
  return value;
}
function isConfirm(ele) {
  if (ele.checked) {
    ele.parentNode.classList.remove("error");
    return true;
  }
  else {
    ele.parentNode.classList.add("error");
    return false;
  }
}
function isEmpty(value) {
  if (value) return true;
  return false;
}
function isEmail(value) {
  return value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}
function isZip(value) {
  return value.match(
    /(^\d{5}$)|(^\d{5}-\d{4}$)/
  );
}
function isCardNumber(value) {
  return value.match(
    /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/
  )
}
function isYear(value) {
  return value.match(
    /^\d{4}$/
  );
}
function isCVV(value) {
  return value.match(
    /^[0-9]{3,4}$/
  );
}
function renderInfoPayment(data) {
  let html =
    `<tr>
        <td>Full Name</td>
        <td>${data.name}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>${data.email}</td>
      </tr>
      <tr>
        <td>Address</td>
        <td>${data.address}</td>
      </tr>
      <tr>
        <td>City</td>
        <td>${data.city}</td>
      </tr>
      <tr>
        <td>State</td>
        <td>${data.state}</td>
      </tr>
      <tr>
        <td>Zip</td>
        <td>${data.zip}</td>
      </tr>
      <tr>
        <td>Card Name</td>
        <td>${data.cardName}</td>
      </tr>
      <tr>
        <td>Card Number</td>
        <td>${data.cardNumber}</td>
      </tr>
      <tr>
        <td>Exp Month</td>
        <td>${data.expMonth}</td>
      </tr>
      <tr>
        <td>Exp Year</td>
        <td>${data.expYear}</td>
      </tr>
      <tr>
        <td>CVV</td>
        <td>${data.cvv}</td>
      </tr>`;
  const infoPayment = document.querySelector(".info-payment");
  const table = infoPayment.querySelector("table");
  table.innerHTML = html;
  infoPayment.style.display = "block";
}
