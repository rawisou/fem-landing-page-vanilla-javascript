const menuToggle = document.querySelector("#menu-toggle");
const activeElements = document.querySelectorAll(".active-element");
const toggleMenu = menuToggle.addEventListener("click", function() {
    activeElements.forEach(function(e) {
        e.classList.toggle("active"); 
    }); 
});