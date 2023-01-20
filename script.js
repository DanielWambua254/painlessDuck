const menuBtn  = document.querySelector(".top_menu_bars");
const navMenu  = document.querySelector(".menu-ribbon");

// click listeners for small screen size menu. The virtical one 
document.querySelectorAll(".menu-ribbon").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("active");
}))

// works for three bars on top right when using small display screen
function clickFunction() {
    navMenu.classList.toggle("active");
}