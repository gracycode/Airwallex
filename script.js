document.addEventListener("DOMContentLoaded", function(){
    const menuIcon = document.querySelector(".fa-bars");
    const navMenu = document.querySelector("nav ul");
    menuIcon.addEventListener("click", function(){
        navMenu.classList.toggle("active");
    })
})