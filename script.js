
var obj_fullname = document.getElementById('fullNameId');
var obj_email = document.getElementById('emailId');
var obj_nameCard = document.getElementById('nameCardId');
var obj_numberCard = document.getElementById('numberCardId');
var obj_expYear = document.getElementById('expYearId');
var obj_cvv = document.getElementById('cvvId');
var obj_address = document.getElementById('addressId');
var obj_city = document.getElementById('cityId');
var obj_state = document.getElementById('stateId');
var obj_zip = document.getElementById('zipId');
var obj_expMonth = document.getElementById('expMonthId');

function validateForm(){
   var objs = document.getElementsByClassName('form-control');
    for (var i = 0; i < objs.length; i++) {
      var obj = objs[i];
        validateElement(obj);
    }

   // var obj1 = document.getElementById('content');
   // var visibility1 = obj1.innerHTML;
   // obj1.style.visibility = 'visible';

   //

   var fullname = obj_fullname.value;
   console.log(typeof fullname);
   var obj_error_fullname = document.getElementById('fullName_error');
   var nameformat = /^[A-Za-z .]{3,15}$/;
   var numberformat = /^[0-9]+$/;

   if(fullname == ''){
      obj_error_fullname.innerHTML = 'Vui lòng nhập họ tên!';
      obj_fullname.style.borderColor = 'red';
      
   }else if (!fullname.match(nameformat)){
         obj_error_fullname.innerHTML = 'Vui lòng nhập đúng họ tên!';
         obj_fullname.style.borderColor = 'red';
         
   
      }else {
         obj_error_fullname.innerHTML = '';
         obj_fullname.style.borderColor = 'green';
         
         

      var email = obj_email.value;
      console.log(obj_email.value);
      var obj_error_email= document.getElementById('email_error');

      var atposition=email.indexOf("@");  
      var dotposition=email.lastIndexOf(".");  
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if(!email.match(mailformat)){
   //   if (atposition < 1 || dotposition < 1){  
         obj_error_email.innerHTML = 'Địa chỉ email sai cú pháp';
         obj_email.style.borderColor = 'red';
         
      }else{
         obj_error_email.innerHTML = '';
         obj_email.style.borderColor = 'green';
         
      var zip = obj_zip.value;
      console.log(zip);
      var obj_error_zip = document.getElementById('zip_error');

      if(zip.length != 4 || !zip.match(numberformat)){
         obj_error_zip.innerHTML = 'Vui lòng nhập lại zip!';
         obj_zip.style.borderColor = 'red';
         
       }else {
         obj_error_zip.innerHTML = '';
         obj_zip.style.borderColor = 'green';


      var nameCard = obj_nameCard.value;
      console.log(nameCard);
      var obj_error_nameCard = document.getElementById('nameCard_error');

      if(nameCard == ''){
         obj_error_nameCard.innerHTML = 'Vui lòng nhập chủ thẻ!';
         obj_nameCard.style.borderColor = 'red';
         
      }else if (!nameCard.match(nameformat)){
            obj_error_nameCard.innerHTML = 'Vui lòng nhập đúng tên chủ thẻ!';
            obj_nameCard.style.borderColor = 'red';
            

         }else {
            obj_error_nameCard.innerHTML = '';
            obj_nameCard.style.borderColor = 'green';
            obj_error_nameCard.style.marginBottom = '0px';


         var numberCard = obj_numberCard.value;
         console.log(numberCard);
         var obj_error_numberCard = document.getElementById('numberCard_error');
         var numbercformat = /^\(?(\d{4})\)?[- ]?(\d{4})[- ]?(\d{4})[- ]?(\d{4})$/;

            if(!numberCard.match(numbercformat)){
               obj_error_numberCard.innerHTML = 'Vui lòng nhập lại số thẻ!';
               obj_numberCard.style.borderColor = 'red';
               
            }else {
               obj_error_numberCard.innerHTML = '';
               obj_numberCard.style.borderColor = 'green';
               


               var expYear = obj_expYear.value;
               console.log(expYear);
               var obj_error_expYear = document.getElementById('expYear_error');

               if(expYear.length != 4 || !expYear.match(numberformat) || expYear < 2022){
                  obj_error_expYear.innerHTML = 'Vui lòng nhập lại năm!';
                  obj_expYear.style.borderColor = 'red';
                  
               }else {
               obj_error_expYear.innerHTML = '';
               obj_expYear.style.borderColor = 'green';
               


               var cvv = obj_cvv.value;
               console.log(cvv);
               var obj_error_cvv = document.getElementById('cvv_error');

                   if(cvv.length != 3 || !cvv.match(numberformat)){
                     obj_error_cvv.innerHTML = 'Vui lòng nhập lại cvv!';
                     obj_cvv.style.borderColor = 'red';
                     
                   }else {
                     obj_error_cvv.innerHTML = '';
                     obj_cvv.style.borderColor = 'green';
                     

                     // var tables = document.getElementsByClassName('table');
                     // for (var i = 0; i < tables.length; i++) {
                     //   var table = tables[i]
                     // }
                     document.getElementById('fullNameIdd').innerHTML = fullname;
                     document.getElementById('emailIdd').innerHTML = email;
                     document.getElementById('addressIdd').innerHTML = obj_address.value;
                     document.getElementById('cityIdd').innerHTML = obj_city.value;
                     document.getElementById('stateIdd').innerHTML = obj_state.value;
                     document.getElementById('zipIdd').innerHTML = obj_zip.value;
                     document.getElementById('nameCardIdd').innerHTML = nameCard;
                     document.getElementById('numberCardIdd').innerHTML = numberCard;
                     document.getElementById('expMonthIdd').innerHTML = obj_expMonth.value;
                     document.getElementById('expYearIdd').innerHTML = expYear;
                     document.getElementById('cvvIdd').innerHTML = cvv;

                  }
               }
            }
         }

      }
     }
   }
}
function validateElement(obj){
   var obj_value = obj.value;
   var attrName = obj.getAttribute('name');
   var obj_error = document.getElementById(attrName + 'Id');

   if (obj_value == ""){
      obj_error.style.borderColor = 'red';
   }else{
      obj_error.style.borderColor = 'green';

   }


}

// function thayDoi(){
//    var obj2 = document.getElementById('content');
//    var visibility2 = obj2.innerHTML;
//    obj2.style.visibility = 'hidden';
// }