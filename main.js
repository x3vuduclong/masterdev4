const fullnameElement = document.querySelector("#fullname")
const emailElement = document.querySelector("#email")
const addressElement = document.querySelector("#address")
const cityElement = document.querySelector("#city")
const stateElement = document.querySelector("#state")
const zipElement = document.querySelector("#zip")
const cardNameElement = document.querySelector("#card-name")
const cardNumberElement = document.querySelector("#card-number")
const monthElement = document.querySelector("#month")
const yearElement = document.querySelector("#year")
const cvvElement = document.querySelector("#cvv")

const visaElement = document.querySelector("#visa")
const americanElement = document.querySelector("#american-card")
const masterElement = document.querySelector("#master-card")
const discoverElement = document.querySelector("#discover-card")

const inputElements = document.querySelectorAll('input')

const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const validCardNumberRegex = /^[0-9]{13,19}$/;

const submitBtnElement = document.querySelector(".submit-btn")

submitBtnElement.addEventListener('click', () => {

    for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i].value.trim() == '' && inputElements[i].required) {
            inputElements[i].classList.add('error')

        } else if (!emailElement.value.match(validEmailRegex)) {
            emailElement.classList.add('error')

        } else if (!cardNumberElement.value.match(validCardNumberRegex)) {
            cardNumberElement.classList.add('error')

        } else if (cvvElement.value.trim().length < 3 && cvvElement.value.trim().length > 4) {
            cvvElement.classList.add('error')

        } else {
            document.querySelector('#fullname-data').innerHTML = fullnameElement.value
            document.querySelector('#email-data').innerHTML = emailElement.value
            document.querySelector('#address-data').innerHTML = addressElement.value
            document.querySelector('#city-data').innerHTML = cityElement.value
            document.querySelector('#state-data').innerHTML = stateElement.value
            document.querySelector('#zip-data').innerHTML = zipElement.value
            document.querySelector('#type-card-data').innerHTML = cityElement.value
            document.querySelector('#card-name-data').innerHTML = cardNameElement.value
            document.querySelector('#card-number-data').innerHTML = cardNumberElement.value
            document.querySelector('#month-data').innerHTML = monthElement.value
            document.querySelector('#year-data').innerHTML = yearElement.value
            document.querySelector('#cvv-data').innerHTML = cvvElement.value

            if (visaElement.checked) {
                document.querySelector('#type-card-data').innerHTML = visaElement.value
            }
            if (americanElement.checked) {
                document.querySelector('#type-card-data').innerHTML = americanElement.value
            }
            if (masterElement.checked) {
                document.querySelector('#type-card-data').innerHTML = masterElement.value
            }
            if (discoverElement.checked) {
                document.querySelector('#type-card-data').innerHTML = discoverElement.value
            }
        }
    }
    console.log(cvvElement.value.trim().length);
})

for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].addEventListener('keypress', () => {
        inputElements[i].classList.remove("error")
    })
}