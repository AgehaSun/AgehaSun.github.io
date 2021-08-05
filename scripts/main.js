
var item = document.getElementById('homeArea')

window.addEventListener('wheel', function(e) {

  if (e.deltaY > 0) item.scrollLeft += 100;
  else item.scrollLeft -= 100;
});

function myFunction() {
  var navbar = document.getElementById("nav-bar");
  var record = document.getElementById("recordinfo");
  var y = document.getElementById("nav-menu")

  if (navbar.style.display === "flex") {
    y.style.opacity= 0.5;
    navbar.style.display = "none";
    record.style.display = "none"
  } else {
    navbar.style.display = "flex";
    record.style.display = "flex";
    y.style.opacity = 1;
  }
}

function openPage(evt,tabName){

  var i,tabcontent,tablinks;

  tabcontent = document.getElementsByClassName("tabContent")
  for (i=0;i<tabcontent.length;i++){
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("nav-option-button")
  for(i = 0;i<tablinks.length;i++){
    tablinks[i].className = tablinks[i].className.replace(" active","");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

}