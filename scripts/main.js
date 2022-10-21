//加载
window.addEventListener("load", function () {
    document.getElementById("homeButton").addEventListener("click", function () { openPage("homeArea", "homeButton", "homeBackground"); })
    document.getElementById("projectButton").addEventListener("click", function () { openPage("projectsArea", "projectButton", "projectsBackground"); })
    document.getElementById("noteButton").addEventListener("click", function () { openPage("notesArea", "noteButton", "notesBackground"); })
    document.getElementById("othersButton").addEventListener("click", function () { openPage("othersArea", "othersButton", "othersBackground"); })
    document.getElementById("aboutButton").addEventListener("click", function () { openPage("aboutArea", "aboutButton", "aboutBackground"); })

    //横向滚动
    let item = document.getElementById("projectsArea");
    item.addEventListener("wheel", function (e) { if (e.deltaY > 0) item.scrollLeft += 100; else item.scrollLeft -= 100; })

    //导航栏折叠
    document.getElementById("nav-menu-button").addEventListener("click", function () { menuShow(); })
})

//切换栏目
function openPage(tabName, activeButton, back) {
    let i, tabcontent, tablinks, gback;

    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.visibility = "hidden";
    }

    gback = document.getElementsByClassName("gback")
    for (i = 0; i < gback.length; i++) {
        gback[i].style.visibility = "hidden";
    }

    tablinks = document.getElementsByClassName("nav-option-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");

        tablinks[i].classList.remove('selected');
    }

    document.getElementById(tabName).style.visibility = "visible";
    document.getElementById(back).style.visibility = "visible";
    document.getElementById(activeButton).className += " active"
    document.getElementById(activeButton).classList.add('selected');


    //on media width < 768px
    const button = document.getElementById("nav-menu-button");
    const navbar = document.getElementById("nav-bar");
    var style = getComputedStyle(button);
    if (style.visibility == "visible") {
        navbar.style.visibility = "hidden";
        button.style.opacity = "0.5";
    }
}


function menuShow() {
    const navbar = document.getElementById("nav-bar");
    const button = document.getElementById("nav-menu-button");


    if (navbar.style.visibility == "hidden") {
        button.style.opacity = "1";
        navbar.style.visibility = "visible";
    }
    else {
        button.style.opacity = "0.5";
        navbar.style.visibility = "hidden";
    }
}



