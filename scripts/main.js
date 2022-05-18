//横向滚动
const item = document.getElementById("projectsArea");

item.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) item.scrollLeft += 100;
    else item.scrollLeft -= 100;
});

//导航栏折叠
const menuButton = document.getElementById("nav-menu");

menuButton.addEventListener("click", function () {
    menuShow();
});

function menuShow() {
    const navbar = document.getElementById("nav-bar");
    const y = document.getElementById("nav-menu");
    
    if (navbar.style.display === "flex") {
        y.style.opacity = "0.5";
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
        y.style.opacity = "1";
    }
}

//导航栏链接
const homeButton = document.getElementById("homeButton");
const projectButton = document.getElementById("projectButton");
const noteButton = document.getElementById("noteButton");
const othersButton = document.getElementById("othersButton");
const aboutButton = document.getElementById("aboutButton");



homeButton.addEventListener("click", function () {
    openPage("homeArea", homeButton,"homeBackground");
});

projectButton.addEventListener("click", function () {
    openPage("projectsArea", projectButton,"projectsBackground");
});

noteButton.addEventListener("click", function () {
    openPage("notesArea", noteButton,"notesBackground");
});

othersButton.addEventListener("click", function () {
    openPage("othersArea", othersButton,"othersBackground");
});

aboutButton.addEventListener("click", function () {
    openPage("aboutArea", aboutButton,"aboutBackground");
});

function openPage(tabName, activeButton,back) {
    let i, tabcontent, tablinks,background;

    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    background = document.getElementsByClassName("background")
    for (i = 0; i < background.length; i++) {
        background[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("nav-option-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");

        tablinks[i].classList.remove('selected');
    }

    document.getElementById(tabName).style.display = "block";
    document.getElementById(back).style.display = "block";
    activeButton.className += " active";
    activeButton.classList.add('selected');
}


