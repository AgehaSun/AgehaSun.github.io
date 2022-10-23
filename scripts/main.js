//加载
window.addEventListener("load", function () {
    document.getElementById("homeButton").addEventListener("click", function () { openPage("homeArea", "homeButton", "homeBackground"); })
    document.getElementById("projectButton").addEventListener("click", function () { openPage("projectsArea", "projectButton", "projectsBackground"); })
    document.getElementById("noteButton").addEventListener("click", function () { openPage("notesArea", "noteButton", "notesBackground"); })
    document.getElementById("aboutButton").addEventListener("click", function () { openPage("aboutArea", "aboutButton", "aboutBackground"); })
    document.getElementById("nav-menu-button").addEventListener("click", function () { menuShow(); })


    //横向滚动
    let item = document.getElementById("projectsArea");
    item.addEventListener("wheel", function (e) { if (e.deltaY > 0) item.scrollLeft += 100; else item.scrollLeft -= 100; })
    item.addEventListener("touchmove",function (e){ if (e.deltaX > 0) item.scrollLeft += 100; else item.scrollLeft -= 100; })

})


//切换页面
function openPage(tabName, activeButton, back) {
    const tabPages = document.getElementsByClassName("tabContent");
    const tabButtons = document.getElementsByClassName("nav-option-button");
    const background = document.getElementsByClassName("gback");

    let i
    for (i = 0; i < tabPages.length; i++) {
        if(tabPages[i].id === tabName)
        {
            tabPages[i].style.visibility = "visible";
        }
        else {
            tabPages[i].style.visibility = "hidden";
        }
    }

    for (i = 0; i < tabButtons.length; i++) {
        if(tabButtons[i].id === activeButton)
        {
            tabButtons[i].className.replace(" active", "");
            tabButtons[i].className += " active"
            tabButtons[i].classList.remove('selected');
            tabButtons[i].classList.add('selected');

        }
        else
        {
            tabButtons[i].className =tabButtons[i].className.replace(" active", "");
            tabButtons[i].classList.remove('selected');
        }
    }

    for (i = 0; i < background.length; i++) {
        if(background[i].id === back)
        {
            background[i].style.visibility = "visible";
        }
        else
        {
            background[i].style.visibility = "hidden";
        }
    }


    //on media width < 768px
    const button = document.getElementById("nav-menu-button");
    const navbar = document.getElementById("nav-bar");
    const style = getComputedStyle(button);
    if (style.visibility === "visible") {
        navbar.style.visibility = "hidden";
        button.style.opacity = "0.5";
    }
}


// 打开或关闭导航栏
function menuShow() {
    const navbar = document.getElementById("nav-bar");
    const button = document.getElementById("nav-menu-button");
    const style = getComputedStyle(navbar);

    if (style.visibility === "hidden") {
        button.style.opacity = "1";
        navbar.style.visibility = "visible";
    }
    else {
        button.style.opacity = "0.5";
        navbar.style.visibility = "hidden";
    }
}



