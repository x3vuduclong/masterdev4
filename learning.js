const form = document.getElementById("form");
const fullname = document.getElementById("fname");
const email = document.getElementById("email");
const zip = document.getElementById("zip");
const cname = document.getElementById("cname");
const ccnum = document.getElementById("ccnum");
const expmonth = document.getElementById("expmonth");
const expyear = document.getElementById("expyear");
const cvv = document.getElementById("cvv");
const obj = document.getElementsByClassName("form-control");

const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
const nameRegex = /^[a-z ,.'-]+$/i;
const cardnoAEX =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
const monthRegex = /^(0?[1-9]|1[012])$/;
const yearRegex = /^(19|20)\d{2}$/;
const cvvRegex = /^[0-9]{3,4}$/;

var checkOut = true;

function setError(ele) {
  var customMessage = "";
  switch (ele) {
    case fullname:
      customMessage = "Please enter a valid name";
      break;
    case email:
      customMessage = "Email did not match format - test@example.com";
      break;
    case zip:
      customMessage = "Please enter a valid zip";
      break;
    case cname:
      customMessage = "Please enter a valid name";
      break;
    case ccnum:
      customMessage = "Please enter a valid card number";
      break;

    case expmonth:
      customMessage = "Please enter a valid month";
      break;
    case expyear:
      customMessage = "Please enter a valid year";
      break;
    case cvv:
      customMessage = "Please enter a valid cvv";
      break;
  }
  ele.setCustomValidity(customMessage);
  ele.reportValidity();
  ele.style.borderColor = "red";
}
function setSuccess(ele) {
  ele.style.borderColor = "green";
  ele.setCustomValidity("");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = [...e.currentTarget.elements]
    .filter((ele) => ele.type !== "submit" && ele.type !== "checkbox")
    .map((ele) => {
      return {
        [ele.getAttribute("id")]: ele.value,
      };
    });
  toTable(data);
});
// On Blur
cvv.addEventListener("blur", (e) => {
  if (cvvRegex.test(cvv.value)) {
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});

fullname.addEventListener("blur", (e) => {
  if (nameRegex.test(e.currentTarget.value) && e.currentTarget.value.trim()) {
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});
email.addEventListener("blur", (e) => {
  if (validRegex.test(e.currentTarget.value) && e.currentTarget.value.trim()) {
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});
ccnum.addEventListener("blur", (e) => {
  if (cardnoAEX.test(e.currentTarget.value) && e.currentTarget.value.trim()) {
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});

cname.addEventListener("blur", (e) => {
  if (nameRegex.test(e.currentTarget.value) && e.currentTarget.value.trim()) {
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});
zip.addEventListener("blur", (e) => {
  if (zipRegex.test(e.currentTarget.value) && e.currentTarget.value.trim()) {
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});
expmonth.addEventListener("blur", (e) => {
  if (monthRegex.test(e.currentTarget.value) && e.currentTarget.value.trim()) {
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});
expyear.addEventListener("blur", (e) => {
  const d = new Date();
  let expmonthBool =
    yearRegex.test(e.currentTarget.value) &&
    e.currentTarget.value.trim() &&
    e.currentTarget.value >= d.getFullYear();
  if (expmonthBool) {
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});
cvv.addEventListener("blur", (e) => {
  if (cvvRegex.test(e.currentTarget.value) && e.currentTarget.value.trim()) {
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});

// On input
cvv.addEventListener("input", (e) => {
  if (cvvRegex.test(cvv.value)) {
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});

fullname.addEventListener("input", (e) => {
  if (nameRegex.test(e.currentTarget.value) && e.currentTarget.value.trim()) {
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});
email.addEventListener("input", (e) => {
  if (validRegex.test(e.currentTarget.value) && e.currentTarget.value.trim()) {
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});
ccnum.addEventListener("input", (e) => {
  if (cardnoAEX.test(e.currentTarget.value) && e.currentTarget.value.trim()) {
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});

cname.addEventListener("input", (e) => {
  if (nameRegex.test(e.currentTarget.value) && e.currentTarget.value.trim()) {
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});
zip.addEventListener("input", (e) => {
  if (zipRegex.test(e.currentTarget.value) && e.currentTarget.value.trim()) {
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});
expmonth.addEventListener("input", (e) => {
  if (monthRegex.test(e.currentTarget.value) && e.currentTarget.value.trim()) {
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});
expyear.addEventListener("input", (e) => {
  const d = new Date();
  let expmonthBool =
    yearRegex.test(e.currentTarget.value) &&
    e.currentTarget.value.trim() &&
    e.currentTarget.value >= d.getFullYear();
  if (expmonthBool) {
    //   e.currentTarget.style.cssText = `
    //   borderColor = "green";
    // `;
    //   e.currentTarget.setCustomValidity("");
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});
cvv.addEventListener("input", (e) => {
  if (cvvRegex.test(e.currentTarget.value) && e.currentTarget.value.trim()) {
    setSuccess(e.currentTarget);
  } else {
    setError(e.currentTarget);
  }
});

function toTable(data) {
  const tableElement = document.getElementById("table-body");
  data.forEach((ele, index) => {
    var objValue = Object.values(ele);
    var objName = Object.keys(ele);
    if (objValue == "") {
      objValue = "None";
    }
    //console.log(`${index}: ${Object.keys(ele)}: ${Object.values(ele)}`);
    tableElement.innerHTML += `<tr><td class="stt">${index}</td><td>${objName}</td><td>${objValue}</td></tr>`;
  });
}
