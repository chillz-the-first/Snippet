const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");

menu.addEventListener('click', function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
})

var wide = window.innerWidth;
console.log(wide);
var newImg = document.getElementById("snip");
if (wide <= 850) {
    newImg.src = "Assets/Tablet View.png";
}
else {
    newImg.src = "Assets/Snippet Image.png";
}