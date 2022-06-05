var arrKH = [];
var formSubmit = document.getElementById("form-submit");


function in_dsKH(item) {
  //table
  var table = document.getElementById("table");
  // duyet qua ds KH trong arrKH
  console.log("arrKh", arrKH[0]);
  for (var i = 0; i < arrKH.length; i++) {
    var item = arrKH[i];
  }

  // tao ra row moi
  var row = table.insertRow();

  // tao ra cell moi cho row
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  //dua du lieu vao cac row
  console.log(item);
  cell1.innerHTML = i; // STT
  cell2.innerHTML = item.fullname;
  cell3.innerHTML = item.email;
  cell4.innerHTML = item.namecard;
  cell5.innerHTML = item.cardnumber;

 
}

function checkFullname() {
  var x = document.getElementById("fullname").value;
  if (isNaN(x)) {
    document.getElementById("fullname").style.borderColor = "green";
  } else {
    document.getElementById("fullname").style.borderColor = "red";
  }
}

function send(e) {
  e.preventDefault();
  var arr = document.getElementsByTagName("input");
  var fullname = arr[0].value;
  var email = arr[1].value;
  var namecard = arr[7].value;
  var cardnumber = arr[8].value;

  var expmonth = arr[9].value;
  var zip = arr[5].value;
  var expyear = arr[10].value;
  var cvv = arr[11].value;
  if (
    fullname == "" ||
    email == "" ||
    namecard == "" ||
    cardnumber == "" ||
    expmonth == "" ||
    zip == "" ||
    expyear == "" ||
    cvv == ""
  ) {
    alert("Please fill in all important informations");
    return;
  }
   confirm('Confirm Billing Address\n' +fullname+"\n"+email+"\n"+namecard+"\n"+cardnumber+"\n"+expmonth+"\n"+zip+"\n"+expyear+"\n"+cvv+"\n")

  // lay cac gia tri trong form
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var namecard = document.getElementById("namecard").value;
  var cardnumber = document.getElementById("cardnumber").value;

  var item = {
    fullname: fullname,
    email: email,
    namecard: namecard,
    cardnumber: cardnumber,
  };

  console.log(item);

  // dua vao ds
  arrKH.push(item);
  console.log("arrKh log: ", arrKH);

  //in ds
  in_dsKH(item);
}

formSubmit.addEventListener("submit", send);
