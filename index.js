window.addEventListener('scroll', function() {
    const header = document.getElementById("check");
    // const header2 = document.getElementById("Change2");
   if(window.scrollY > 0){
    header.setAttribute("id", "hide");
    // header.classList.remove("hide");
    // header2.classList.remove("opacity");
    // header.classList.add("hide");
   }
   let check = document.getElementById("hide");
   if(window.scrollY <= 1){
    check.setAttribute("id", "check");
   }
   
})

var swiper = new Swiper(".mySwiper", {

  effect: "coverflow",
  grabCursor: true,
  loop: true,
  autoplay: true, 
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper2 = new Swiper(".content4", {
  slidesPerView: 4,
  spaceBetween: 15,
  slidesPerGroup: 2,
  loop: true,
  autoplay: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function nextPage(){
  document.location.assign("./form/form.html")
}
function nextPage2(){
  document.location.assign("./form/form2.html")
}
function study(){
  document.location.assign("./study/study.html")
}



var swiper5 = new Swiper(".container4", {
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


window.addEventListener('scroll', function() {
  let x = document.getElementById("first");
   let y = document.getElementById("two");
   let a = document.getElementById("three");
   let b = document.getElementById("four");
   let c = document.getElementById("last");
  if(window.scrollY > 0 && window.scrollY < 500 || window.scrollY > 5000) {
    
    x.setAttribute("class", "list hover")
    y.setAttribute("class", "list")
    a.setAttribute("class", "list")
    b.setAttribute("class", "list")
    c.setAttribute("class", "list")
 }

 if(window.scrollY > 1000 && window.scrollY < 1700) {
   
    b.setAttribute("class", "list hover")
    x.setAttribute("class", "list")
    y.setAttribute("class", "list")
  a.setAttribute("class", "list")
 
  c.setAttribute("class", "list")
 }
 if(window.scrollY > 1910 && window.scrollY < 2600) {
    
  y.setAttribute("class", "list hover")
  x.setAttribute("class", "list")
  a.setAttribute("class", "list")
  b.setAttribute("class", "list")
  c.setAttribute("class", "list")
}
if(window.scrollY > 2600 && window.scrollY < 5000) {
    
 a.setAttribute("class", "list hover")
  x.setAttribute("class", "list")
  y.setAttribute("class", "list")
  b.setAttribute("class", "list")
  c.setAttribute("class", "list")
}
 
 
})

