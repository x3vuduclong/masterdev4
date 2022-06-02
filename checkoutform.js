const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zip = document.getElementById('zip');
const nameoncard = document.getElementById('nameoncard');
const creditcard = document.getElementById('creditcard');
const expmonth = document.getElementById('expmonth');
const expyear = document.getElementById('expyear');
const cvv = document.getElementById('cvv');

document.getElementById('checkoutForm').addEventListener('submit', (e) => {
  e.preventDefault();
  window.alert(
    'fullname: ' +
      fullname.value +
      '\n' +
      'email: ' +
      email.value +
      '\n' +
      'address: ' +
      address.value +
      '\n' +
      'city: ' +
      city.value +
      '\n' +
      'state: ' +
      state.value +
      '\n' +
      'zip: ' +
      zip.value +
      '\n' +
      'nameoncard: ' +
      nameoncard.value +
      '\n' +
      'creditcard: ' +
      creditcard.value +
      '\n' +
      'expmonth: ' +
      expmonth.value +
      '\n' +
      'expyear: ' +
      expyear.value +
      '\n' +
      'cvv: ' +
      cvv.value
  );
});
