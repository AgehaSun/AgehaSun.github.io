//横向滚动
let item = document.getElementById('projectsArea');

item.addEventListener('wheel', function (e) {

    if (e.deltaY > 0) item.scrollLeft += 100;
    else item.scrollLeft -= 100;
});


//导航栏折叠
let menuButton = document.getElementById("nav-menu");

menuButton.addEventListener("click",function (){
    menuShow();
})

function menuShow() {
    let navbar = document.getElementById("nav-bar");
    let record = document.getElementById("recordinfo");
    let y = document.getElementById("nav-menu");

    if (navbar.style.display === "flex") {
        y.style.opacity = "0.5";
        navbar.style.display = "none";
        record.style.display = "none"
    } else {
        navbar.style.display = "flex";
        record.style.display = "flex";
        y.style.opacity = "1";
    }
}


//导航栏链接
let homeButton = document.getElementById("homeButton");
let projectButton = document.getElementById("projectButton");
let noteButton = document.getElementById("noteButton");
let othersButton = document.getElementById("othersButton");
let aboutButton = document.getElementById("aboutButton");


homeButton.addEventListener('click', function () {
    openPage("homeArea", homeButton);
})

projectButton.addEventListener('click', function () {
    openPage("projectsArea", projectButton);
})

noteButton.addEventListener('click', function () {
    openPage("notesArea", noteButton);
})

othersButton.addEventListener('click', function () {
    openPage("othersArea", othersButton);
})

aboutButton.addEventListener('click', function () {
    openPage("aboutArea", aboutButton);
})


function openPage(tabName, activeButton) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabContent")
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("nav-option-button")
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    activeButton.className += " active";
}