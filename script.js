
//first section - contacts 

var inputName = document.getElementById("input1")
var inputSurname = document.getElementById("input2")
var inputNumber = document.getElementById("input3")
var getStarted = document.getElementById("getstarted")

getStarted.addEventListener("click", function () {
    var textName = inputName.value
    var textSurname = inputSurname.value
    var textNumber = inputNumber.value
    if (isNaN(textName) == false || isNaN(textSurname) == false || !textName || !textSurname || !textNumber) return alert("Įveskite visus duomenis")

    inputName.value = ""
    inputSurname.value = ""
    inputNumber.value = ""
})

//eighth section - contacts 

var contactName = document.getElementById("contact1")
var contactSurname = document.getElementById("contact2")
var contactNumber = document.getElementById("contact3")
var sendIt = document.getElementById("sendit")

sendIt.addEventListener("click", function () {
    var myName = contactName.value
    var mySurname = contactSurname.value
    var myNumber = contactNumber.value
    if (isNaN(myName) == false || isNaN(mySurname) == false || !myName || !mySurname || !myNumber) return alert("Įveskite visus duomenis")

    contactName.value = ""
    contactSurname.value = ""
    contactNumber.value = ""
})

//SWIPER
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  speed: 1000,

  breakpoints: {
    890: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    650: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

