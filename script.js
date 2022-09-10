const menuToggle = document.querySelector("#menu-toggle");
const activeElements = document.querySelectorAll(".active-element");

// Option1 : Declare function inside addEventListener
// const toggleMenu = menuToggle.addEventListener("click", function() {
//     activeElements.forEach(function(e) {
//         e.classList.toggle("active"); 
//     }); 
// });

// Option 2 : use arrow function and invoke it in the event listener
const addClass = () => {
    activeElements.forEach(element => {
        element.classList.toggle("active"); 
    }); 
}

const toggleMenu = menuToggle.addEventListener("click", addClass);