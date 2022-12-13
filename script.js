const cardName = document.getElementById("name");
const number = document.getElementById("card-number");
const mm = document.getElementById("mm");
const yy = document.getElementById("yy");
const cvc = document.getElementById("cvc");
const button = document.getElementById("confirm-btn");
const inputs = document.getElementsByClassName("input");

const nameError = document.getElementById("nameError");
const numberError = document.getElementById("numberError");
const dateError = document.getElementById("dateError");
const cvcError = document.getElementById("cvcError");
 
const cardholderName = document.getElementById("cardholderName");
const cardNumber = document.getElementById("cardNumber");
const mmyy = document.getElementById("mmyy");
const cvcNumber = document.getElementById("cvcNumber");

cardName.addEventListener('keyup', () => {
    cardholderName.innerText = cardName.value;
})

number.addEventListener('keyup', () => {
    cardNumber.innerText = number.value;
})

mm.addEventListener('keyup', () => {
    mmyy.innerText = mm.value;
})

yy.addEventListener('keyup', () => {
    mmyy.innerText = `${mm.value}/${yy.value}`;
})

cvc.addEventListener('keyup', () => {
    cvcNumber.innerText = cvc.value;
})

button.addEventListener('click', () => {
    cardName.className= "submitted";
    number.className= "submitted";
    mm.className= "submitted";
    yy.className= "submitted";
    cvc.className= "submitted";
})

document.addEventListener('invalid', (function () {
    return function (e) {
      e.preventDefault();
    };
  })(), true);

button.addEventListener('click', () => {
    let letters = /^[A-Za-z]+$/;
    if(!cardName.value.match(letters)) {
        nameError.innerText = "Wrong format, letters only";
        nameError.style.display = "block";
    }
    let numbers =/^[0-9]*$/;
    if(!number.value.match(numbers)) {
        numberError.innerText = "Wrong format, numbers only";
        numberError.style.display = "block";
    }
    if((1 > mm.value || mm.value > 12) || (2022 > yy.value || yy.value > 2050)){
        dateError.innerText = "Enter a valid date";
        dateError.style.display = "block";
        dateError.style.visibility = "visible";
    }
    if(!(100 <= cvcNumber.value <= 999)) {
        cvcError.innerText ="Enter a valid CVC number";
        cvcError.style.display = "block";
    }
    if(cardName.value== "") {
        nameError.innerText = "Can't be blank";
        nameError.style.display = "block"
    } 
    if(number.value== "") {
        numberError.innerText="Can't be blank";
        numberError.style.display = "block"
    }
    if(mm.value=="" || yy.value=="") {
        dateError.innerText="Can't be blank";
        dateError.style.display = "block"
        dateError.style.visibility = "visible"
    }
    if(cvc.value=="") {
        cvcError.innerText="Can't be blank";
        cvcError.style.display = "block";
    }
})