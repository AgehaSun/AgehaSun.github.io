
var item = document.querySelector('.wrapper')

window.addEventListener('wheel', function(e) {

  if (e.deltaY > 0) item.scrollLeft += 100;
  else item.scrollLeft -= 100;
});

function myFunction() {
  var navbar = document.getElementById("nav-bar");
  var y = document.getElementById("nav-menu")
  if (navbar.style.display === "flex") {
    y.style.opacity= 0.5;
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
    y.style.opacity = 1;
  }
}