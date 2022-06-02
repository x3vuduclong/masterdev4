let stt = 0;
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('result').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "STT";

let heading_2 = document.createElement('th');
heading_2.innerHTML = "Full name";

let heading_3 = document.createElement('th');
heading_3.innerHTML = "Email";

let heading_4 = document.createElement('th');
heading_4.innerHTML = "Address";

let heading_5 = document.createElement('th');
heading_5.innerHTML = "City";

let heading_6 = document.createElement('th');
heading_6.innerHTML = "State";

let heading_7 = document.createElement('th');
heading_7.innerHTML = "Zip";

let heading_8 = document.createElement('th');
heading_8.innerHTML = "Name card";

let heading_9 = document.createElement('th');
heading_9.innerHTML = "Credit card";

let heading_10 = document.createElement('th');
heading_10.innerHTML = "Exp month";

let heading_11 = document.createElement('th');
heading_11.innerHTML = "Exp year";

let heading_12 = document.createElement('th');
heading_12.innerHTML = "CVV";

function errForm() {
    document.getElementById
        ("name").style.border = "1px solid red";

    document.getElementById
        ("email").style.border = "1px solid red";

    document.getElementById
        ("zip").style.border = "1px solid red";

    document.getElementById
        ("name-card").style.border = "1px solid red";

    document.getElementById
        ("credit-card-num").style.border = "1px solid red";

    document.getElementById
        ("exp-month").style.border = "1px solid red";

    document.getElementById
        ("exp-year").style.border = "1px solid red";

    document.getElementById
        ("cvv").style.border = "1px solid red";
}

document.querySelector(".button").addEventListener("click", function (event) {
    event.preventDefault();
    stt++;
    let check = document.querySelector('#my-check');

    if (check.checked != true) {
        alert("must check");
    } else {
        let fullName = document.forms["my-form"]["full-name"].value;
        let email = document.forms["my-form"]["email"].value;
        let address = document.forms["my-form"]["address"].value;
        let city = document.forms["my-form"]["city"].value;
        let state = document.forms["my-form"]["state"].value;
        let zip = document.forms["my-form"]["zip"].value;
        let nameCard = document.forms["my-form"]["name-card"].value;
        let creditCardNum = document.forms["my-form"]["credit-card-num"].value;
        let expMonth = document.forms["my-form"]["exp-month"].value;
        let expYear = document.forms["my-form"]["exp-year"].value;
        let cvv = document.forms["my-form"]["CVV"].value;
        // let rs = fullName + " / " + email + " / " + address
        //     + " / " + city + " / " + state + " / " +
        //     zip + " / " + nameCard + " / " + creditCardNum
        //     + " / " + expMonth + " / " + expYear + " / " + cvv;
        if (fullName == "" || email == "" || zip == "" || nameCard == ""
            || creditCardNum == "" || expMonth == "" || expYear == ""
            || cvv == "") {
            errForm();
        }
        else {
            let arrOfValue = [fullName, email, address, city,
                state, zip, nameCard, creditCardNum, expMonth, expYear, cvv];



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
            row_1.appendChild(heading_12);
            thead.appendChild(row_1);


            // Creating and adding data to second row of the table
            let row_2 = document.createElement('tr');
            let row_2_col_1 = document.createElement('td');
            row_2_col_1.innerHTML = stt;
            row_2.appendChild(row_2_col_1);

            for (let i = 0; i < 11; i++) {
                let col = document.createElement('td');
                col.innerHTML = arrOfValue[i];
                row_2.appendChild(col);
            }
            tbody.appendChild(row_2);
        }

    }

});
