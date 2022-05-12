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
    const record = document.getElementById("recordinfo");
    const y = document.getElementById("nav-menu");

    if (navbar.style.display === "flex") {
        y.style.opacity = "0.5";
        navbar.style.display = "none";
        record.style.display = "none";
    } else {
        navbar.style.display = "flex";
        record.style.display = "flex";
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
    openPage("homeArea", homeButton);
});

projectButton.addEventListener("click", function () {
    openPage("projectsArea", projectButton);
});

noteButton.addEventListener("click", function () {
    openPage("notesArea", noteButton);
});

othersButton.addEventListener("click", function () {
    openPage("othersArea", othersButton);
});

aboutButton.addEventListener("click", function () {
    openPage("aboutArea", aboutButton);
});

function openPage(tabName, activeButton) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("nav-option-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].classList.remove('selected');
    }

    document.getElementById(tabName).style.display = "block";
    activeButton.className += " active";
    activeButton.classList.add('selected');
}

// 鼠标
const cursor = document.getElementById('cursor');
const onMouseMove = (e) =>{ 
  cursor.style.left = e.pageX + 'px'; 
  cursor.style.top = e.pageY + 'px'; 
}
document.addEventListener('mousemove', onMouseMove);


