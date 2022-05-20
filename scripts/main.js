//加载
window.addEventListener("load", function () {
    document.getElementById("homeButton").addEventListener("click", function () { openPage("homeArea", homeButton, "homeBackground"); })
    document.getElementById("projectButton").addEventListener("click", function () { openPage("projectsArea", projectButton, "projectsBackground"); })
    document.getElementById("noteButton").addEventListener("click", function () { openPage("notesArea", noteButton, "notesBackground"); })
    document.getElementById("othersButton").addEventListener("click", function () { openPage("othersArea", othersButton, "othersBackground"); })
    document.getElementById("aboutButton").addEventListener("click", function () { openPage("aboutArea", aboutButton, "aboutBackground"); })

    //横向滚动
    var item = document.getElementById("projectsArea");
    item.addEventListener("wheel", function (e) { if (e.deltaY > 0) item.scrollLeft += 100; else item.scrollLeft -= 100; })

    //导航栏折叠
    document.getElementById("nav-menu").addEventListener("click", function () { menuShow(); })
})

//切换栏目
function openPage(tabName, activeButton, back) {
    let i, tabcontent, tablinks, gback;

    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    gback = document.getElementsByClassName("gback")
    for (i = 0; i < gback.length; i++) {
        gback[i].style.display = "none";
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
