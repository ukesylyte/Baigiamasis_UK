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

// third - tabs 

const tabs = document.getElementsByClassName("tab")

const buttons = document.getElementsByTagName("button")

tabs[0].style.display = "block"
document.querySelector(".tabs").classList.add("tabsAnimation")
buttons[0].classList.add("selected")

function showTab(evt, id) {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none"
     buttons[i].classList.remove("selected")
    }
    document.getElementById(id).style.display = "block"
    document.querySelector(".tabs").classList.remove("tabsAnimation")
    setTimeout(function(){
    document.querySelector(".tabs").classList.add("tabsAnimation")
    }, 100)
    evt.currentTarget.classList.add("selected")
    console.log(evt.currentTarget)
}

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

// header burger

const burger = document.getElementsByClassName("burger")
const links = document.querySelector(".links")

burger.addEventListener("click", function(){
      this.classList.toggle("rotate")
      links.classList.toggle("absolute")
})
