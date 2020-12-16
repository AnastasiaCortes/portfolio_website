let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const mQuery = window.matchMedia('(max-width: 37.5em)')
  let slides = document.getElementsByClassName("carousel__slide");
  let i;
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    if (mQuery.matches){
      slides[i].style.display = "contents";
    } else{
      slides[i].style.display = "none";}
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
const query = window.matchMedia('(max-width: 37.5em)');
function resize(e) {
  let slides = document.getElementsByClassName("carousel__slide");
  if (e.matches){
      slides[0].style.display = "contents";
    } else{
      slides[0].style.display = "none";}
}
// Set up a listener
query.addListener(resize)

//Get the button:
mybutton = document.getElementById("btn__top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




let pop1 = document.getElementById("popup-1");
let btn1 = document.getElementById("btn-1");
let span1 = document.getElementById("close-1");

btn1.onclick = function () {
  pop1.style.display = "block";
}
span1.onclick = function () {
  pop1.style.display = "none";
}

let pop2 = document.getElementById("popup-2");
let btn2 = document.getElementById("btn-2");
let span2 = document.getElementById("close-2");

btn2.onclick = function () {
  pop2.style.display = "block";
}
span2.onclick = function () {
  pop2.style.display = "none";
}
let pop3= document.getElementById("popup-3");
let btn3 = document.getElementById("btn-3");
let span3 = document.getElementById("close-3");

btn3.onclick = function () {
  pop3.style.display = "block";
}
span3.onclick = function () {
  pop3.style.display = "none";
}
let pop4 = document.getElementById("popup-4");
let btn4 = document.getElementById("btn-4");
let span4 = document.getElementById("close-4");

btn4.onclick = function () {
  pop4.style.display = "block";
}
span4.onclick = function () {
  pop4.style.display = "none";
}
let pop5 = document.getElementById("popup-5");
let btn5 = document.getElementById("btn-5");
let span5 = document.getElementById("close-5");

btn5.onclick = function () {
  pop5.style.display = "block";
}
span5.onclick = function () {
  pop5.style.display = "none";
}
let pop6 = document.getElementById("popup-6");
let btn6 = document.getElementById("btn-6");
let span6 = document.getElementById("close-6");

btn6.onclick = function () {
  pop6.style.display = "block";
}
span6.onclick = function () {
  pop6.style.display = "none";
}

window.onclick = function (event) {
  if (event.target === pop1) {
    pop1.style.display = "none";
  } else if(event.target === pop2){
    pop2.style.display = "none";
  }else if(event.target === pop3){
    pop3.style.display = "none";
  }else if(event.target === pop4){
    pop4.style.display = "none";
  }else if(event.target === pop5){
    pop5.style.display = "none";
  }else if(event.target === pop6){
    pop6.style.display = "none";
  }
}
