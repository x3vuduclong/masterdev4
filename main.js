function getEL(id) {
    return document.querySelector(`#${id}`)
}
let btn = getEL('btn')
let form = getEL('form-input')


const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener("focusout", (e) => validate(e.target))
})

form.addEventListener("submit", handleSubmit)


function validate(target) {
    const { name, value, type } = target
    let check = true
    if (type === 'checkbox') {
        return check
    }
    
    if (value.trim() === '') {
        checkError(name, `Field is required!`, false)
        return !check
    } else {
        checkError(name, '', true)
    }

    if (type === 'email') {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(value)) {
            checkError(name, `Email is invalid!`, false)
            return !check
        } else {
            checkError(name, '', true)
        }
    }

    if (name === 'nameOnCard' || name === 'city') {
        const re = /^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/;
        if (!re.test(value)) {
            checkError(name, `Field contains letters only!`, false)
            return !check
        } else {
            checkError(name, '', true)
        }
    }

    if (name === "zip") {
        const re = /(^\d{5}$)|(^\d{5}-\d{4}$)/
        if (!re.test(value)) {
            checkError(name, `Zip code is invalid!`, false)
            return !check
        } else {
            checkError(name, '', true)
        }
    }

    if (name === 'cardNum' || name === 'year' || name === 'CVV') {
        const re = /^[0-9]+$/;
        if (!re.test(value)) {
            checkError(name, `Field contains numbers only!`, false)
            return !check
        } else if (name === "year" && value.length != 4) {
            checkError(name, `Year is invalid!`, false)
            return !check
        } else if (name === 'CVV' && value.length != 3) {
            checkError(name, `CVV is invalid!`, false)
            return !check
        } else {
            checkError(name, '', true)
        }
    }

    return check
}

function checkError(name, mess, check) {
    if (!check) {
        getEL(`${name}`).style.borderColor = "red"
    } else {
        getEL(`${name}`).style.borderColor = "green"
        btn.classList.remove('disabled')
    }
    getEL(`${name}_error`).innerHTML = mess
}


function handleSubmit(e) {
    e.preventDefault()
    for (let i = 0; i <= 11; i++) {
        if (!validate(e.target[i])) {
            btn.classList.add('disabled')
            return
        } else {
            btn.classList.remove('disabled')
        }
    }

    for (let i = 0; i <= 11; i++) {
        const { name, value, type } = e.target[i]
        if (type === 'checkbox') {
            if (e.target[i].checked) {
                getEL('ship_check').innerHTML = `<i style="color: green;" class="fa fa-check" aria-hidden="true"></i>`
            } else {
                getEL('ship_check').innerHTML = `<i style="color: red;" class="fa fa-times" aria-hidden="true"></i>`
            }
            continue
        }
        getEL(`${name}_text`).innerHTML = `${value}`
    }
}
