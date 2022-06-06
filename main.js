function getEL(id) {
    return document.querySelector(`#${id}`)
}
let btn = getEL('btn')
let form = getEL('myForm')
let myNofity = getEL('myNofity')
const successColor = '#0ba360'
const failColor = '#dc3545'
let errors = {}

form.addEventListener("submit", handleSubmit)

let inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener("keyup", (e) => handleValidate(e.target))
})

function showError(name, mess, check) {
    if (!check) {
        getEL(`${name}`).style.borderColor = failColor
    } else {
        getEL(`${name}`).style.borderColor = successColor
    }
    errors[name] = mess
    getEL(`${name}_error`).innerHTML = mess
}

function handleValidate(target) {
    const { name, value, type } = target
    let check = true
    let errorCount = 0

    if (type === 'checkbox') {
        return check
    }

    if (value.trim() === '') {
        showError(name, `This field is required!`, false)
        return !check
    } else {
        showError(name, '', true)
    }


    if (name === 'email') {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(value)) {
            showError(name, `Email is invalid!`, false)
            return !check
        } else {
            showError(name, '', true)
        }
    }

    if (name === 'nameOnCard') {
        const re = /^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/;
        if (!re.test(value)) {
            showError(name, `Field contains letters only!`, false)
            return !check
        } else {
            showError(name, '', true)
        }
    }

    if (name === "month") {
        const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        let index = months.findIndex((month) => month === value.trim().toLowerCase())
        if (index == -1) {
            showError(name, `Exp month is invalid!`, false)
            return !check
        } else {
            showError(name, '', true)
        }
    }

    if (name === "zip") {
        const re = /(^\d{5}$)|(^\d{5}-\d{4}$)/
        if (!re.test(value)) {
            showError(name, `Zip code is invalid!`, false)
            return !check
        } else {
            showError(name, '', true)
        }
    }

    if (name === 'cardNum' || name === 'year' || name === 'CVV') {
        const re = /^[0-9]+$/;
        if (!re.test(value)) {
            showError(name, `Field contains numbers only!`, false)
            return !check
        } else if (name === "year" && value.length != 4) {
            showError(name, `Exp year is invalid!`, false)
            return !check
        } else if (name === 'CVV' && value.length != 3) {
            showError(name, `CVV is invalid!`, false)
            return !check
        } else {
            showError(name, '', true)
        }
    }

    for (let err in errors) {
        if (errors[err] !== '') {
            errorCount++
        }
    }
    
    if (errorCount == 0) {
        btn.classList.remove('disabled')
        btn.classList.add('active')
    }
    return check
}

function createNotification(mess, check) {
    let noti = document.querySelector('.noti')
    let notiProgress = document.querySelector('.noti-progress')
    let notiText = document.querySelector('.noti-text')
    let notiCheck = document.querySelector('.noti-check')

    noti.classList.add('active')
    notiProgress.classList.add('active')
    notiText.innerHTML = mess

    if (!check) {
        notiCheck.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'
        noti.style.borderLeftColor = failColor
        notiCheck.style.backgroundColor = failColor
    } else {
        notiCheck.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
        noti.style.borderLeftColor = successColor
        notiCheck.style.backgroundColor = successColor
    }

    setTimeout(() => {
        notiProgress.classList.remove('active')
        noti.classList.remove('active')
    }, 4000)
}

function handleSubmit(e) {
    e.preventDefault()
    let errorCount = 0
    for (let i = 0; i <= 11; i++) {
        if (!handleValidate(e.target[i])) {
            errorCount++
        }
    }

    if (errorCount != 0) {
        btn.classList.add('disabled')
        createNotification("Check fields and try again!", false)
        return
    } else {
        btn.classList.remove('disabled')
        btn.classList.remove('active')
        createNotification("Submit successfully!", true)
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        });
        for (let i = 0; i <= 11; i++) {
            const { name, value, type } = e.target[i]
            if (type === 'checkbox') {
                if (e.target[i].checked) {
                    getEL('ship_check').innerHTML = `<i style="color: ${successColor};" class="fa fa-check" aria-hidden="true"></i>`
                } else {
                    getEL('ship_check').innerHTML = `<i style="color: ${failColor};" class="fa fa-times" aria-hidden="true"></i>`
                }
                continue
            }
            getEL(`${name}_text`).innerHTML = value
        }
    }
}
