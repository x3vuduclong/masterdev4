function Validator(options){


    function validate(inputElement, rule){
       
        var errorElement = inputElement.parentElement.querySelector('.error-mess');
        var errorMessage = rule.test(inputElement.value);


        if (errorMessage) {
            errorElement.innerText = errorMessage;
            errorElement.style.color = 'red';
            inputElement.style.border = '1px solid red';
        
        } else {
            errorElement.innerText = '';
            inputElement.style.border = '1px solid black';
        }



    }

   var formElement = document.querySelector(options.form);
   
    if( formElement ){

        formElement.onsubmit = function (e) {
            e.preventDefault();

        }

        // formElement.onsubmit = function (e){
        //     options.rule.forEach(function (rule) {
        //         var inputElement = formElement.querySelector(rule.selector);
        //         validate(inputElement, rule);
        //     });
        // }
       

        options.rule.forEach(function (rule) {


            var inputElement = formElement.querySelector(rule.selector);
            
            if (inputElement) {
                inputElement.onblur = function () {
                 
                    validate(inputElement, rule);
                 
                }
            }
        })
       
    }
}


Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập đầy đủ';
        }
    };
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';

        }
    };
}

Validator.isNumber = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var reg = /^\d+$/;
            return reg.test(value) ? undefined : 'Trường này phải là số';
        }
    }
}


function isChecked () {
    var checkElement = document.querySelector("#my-checkbox");

    if(checkElement.checked) {
        document.querySelector('#checkbox-mess').style.display = "none";
    }else{
        document.querySelector('#checkbox-mess').style.display = "block";

    }

}

function takeValue (){
    var fname = document.getElementById("fname");
    var btn = document.getElementById('btn');
    var show = document.getElementById('showValue');
    function show1() {
        show.innerHTML = fname.value;
    }

    btn.addEventListener('click', show1);
}






