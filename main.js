var typed =new Typed(".text",{
    strings: ['Frontend Developer.', 'UI/UX Designer.','Web Developer.'],
    typeSpeed: 100,
    backSpeed:  100,
    backDelay: 1000,
    loop: true



 });
//  const hamburger = document.querySelector(".hamburger");
//  const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click",()=>{
// hamburger.classList.toggle("active");
// navMenu.classList.toggle("active");
// })
//  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click" ,() =>{
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");

//  }))
window.addEventListener('load',()=>{
    let allTab = document.querySelectorAll('.tab');
    let allproject = document.querySelectorAll('.project');

    const removeActive=() => allTab.forEach(tab =>{
        tab.classList.remove('tab-active')
    })
    allTab.forEach(tab=>{
        tab.addEventListener('click',(event) => {
            removeActive();
            tab.classList.add('tab-active');
            let fliterName = event.target.getAttribute('data-name');
            allproject.forEach(project=>{
                let projectName = project.getAttribute('data-name');
                if((projectName == fliterName) || fliterName == 'All'){
                    project.style.display = 'block';
                } else{
                        project.style.display = 'none';
                }
    
            })
        });
       
    })
})



window.addEventListener('scroll',() =>{
    let nav= document.querySelector('nav');
    nav.classList.toggle('nav-scroll', window.scrollY>0);
})

//nav bar
let menuBar = document.querySelector('.menu-bar');
let menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click',() =>{
    menuBar.classList.toggle('menu-none')
})