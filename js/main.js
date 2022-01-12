// const
var navMenu = document.getElementById("nav_menu"),
     navToggle = document.getElementById("nav_toggle"),
     navClose = document.getElementById("nav_close");

if(navToggle){
        nav_toggle.addEventListener("click",()=>{
        navMenu.classList.add("show_menu");
        navToggle.classList.remove("nav_toggle");
        });
     }

if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show_menu");
    });
}


//  menu actice and Remove menu
var navLink = document.querySelectorAll(".nav__link");

function linkAction(){
    //Active link
    navLink.forEach(n => n.classList.remove("active"));
    this.classList.add("active");
    //Remove menu mobile
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show_menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));


// skills open and close
var skillsContent = document.getElementsByClassName("skills_content"),
    skillsHeader = document.querySelectorAll(".skills_header");

    function toggleSkills(){
        let itemClass = this.parentNode.className;

        for(i=0; i < skillsContent.length;i++){
            skillsContent[i].className = "skills_content skills_close";
        }
        if(itemClass==="skills_content skills_close"){
            this.parentNode.className = "skills_content skills_open";
        }
    }
skillsHeader.forEach((el) =>{
el.addEventListener("click",toggleSkills);
});


// scrollUp

function scrollUp(){
    var scrollUp = document.getElementById("scroll-up");
    if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll",scrollUp);