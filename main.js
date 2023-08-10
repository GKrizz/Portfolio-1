var typed =new Typed(".text",{
    strings: ['Fontend Developer.', 'UI/UX Designer.','Web Developer.'],
    typeSpeed: 100,
    backSpeed:  100,
    backDelay: 1000,
    loop: true



 });
 const hamburger = document.querySelector(".hamburger");
 const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
})
 document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click" ,() =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

 }))