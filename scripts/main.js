window.addEventListener("load", function ()
{
    document.getElementById("waftButton").addEventListener("click", function () { openPage("main-tab-waft", "waftButton", "waftBackground"); })
    document.getElementById("realmButton").addEventListener("click", function () { openPage("main-tab-realm", "realmButton", "realmBackground"); })
    document.getElementById("fragmentsButton").addEventListener("click", function () { openPage("main-tab-fragments", "fragmentsButton", "fragmentsBackground"); })
    document.getElementById("aboutButton").addEventListener("click", function () { openPage("main-tab-about", "aboutButton", "aboutBackground"); })
    document.getElementById("nav-menu-button").addEventListener("click", function () { menuShow(); })
    document.getElementById("nav-closeMenu-button").addEventListener("click", function () { menuHide(); })
    document.getElementById("main-tab-realm").addEventListener("wheel", HorizontalScroll, false)
    document.getElementById("main-tab-realm").addEventListener("touchstart", TouchStart, false)
    document.getElementById("main-tab-realm").addEventListener("touchmove", TouchMove, false)

})


function HorizontalScroll(event)
{
    const item = document.getElementById("main-tab-realm");
    const button = document.getElementById("nav-closeMenu-button");
    const style = getComputedStyle(button);

    if (event.deltaY > 0 && style.visibility === "hidden")
    {
        item.scrollLeft += 100;
    }
    else
    {
        item.scrollLeft -= 100;
    }
}


let start = { x: 0, y: 0 };
function TouchStart(event)
{
    start.x = event.touches[0].pageX;
    start.y = event.touches[0].pageY;
}

function TouchMove(event)
{
    const item = document.getElementById("main-tab-realm");
    offset = {}
    offset.x = start.x - event.touches[0].pageX;
    offset.y = start.y - event.touches[0].pageY;

    if (offset.x < 0)
    {
        item.scrollLeft += 100;
    }
    else
    {
        item.scrollLeft -= 100;
    }
}




//切换页面
function openPage(tabName, activeButton, back)
{
    const tabPages = document.getElementsByClassName("main-tab");
    const tabButtons = document.getElementsByClassName("nav-option-button");
    const background = document.getElementsByClassName("pageBackground");

    let i
    for (i = 0; i < tabPages.length; i++)
    {
        if (tabPages[i].id === tabName)
        {
            tabPages[i].style.visibility = "visible";
        }
        else
        {
            tabPages[i].style.visibility = "hidden";
        }
    }

    for (i = 0; i < tabButtons.length; i++)
    {
        if (tabButtons[i].id === activeButton)
        {
            tabButtons[i].className.replace(" active", "");
            tabButtons[i].className += " active"
            tabButtons[i].classList.remove('selected');
            tabButtons[i].classList.add('selected');

        }
        else
        {
            tabButtons[i].className = tabButtons[i].className.replace(" active", "");
            tabButtons[i].classList.remove('selected');
        }
    }

    for (i = 0; i < background.length; i++)
    {
        if (background[i].id === back)
        {
            background[i].style.visibility = "visible";
        }
        else
        {
            background[i].style.visibility = "hidden";
        }
    }


    //on media width < 768px
    const button = document.getElementById("nav-closeMenu-button");
    const style = getComputedStyle(button);
    if (style.visibility === "visible")
    {
        menuHide()
    }

    // backgroundFadeIn.restart();
}

// let backgroundFadeIn = TweenMax.from(".pageBackground",
//     {
//         opacity: 0,
//         y: -60,
//         duration: 2,
//     });





// 打开导航栏
function menuShow()
{
    const head = document.getElementById("head");
    const title = document.getElementById("title");
    const navbar = document.getElementById("nav-bar");
    const button = document.getElementById("nav-menu-button");
    const closeButton = document.getElementById("nav-closeMenu-button");

    head.style.backgroundColor = "rgba(0,0,0,0.9)";
    title.style.visibility = "hidden";
    button.style.visibility = "hidden";
    closeButton.style.visibility = "visible";
    navbar.style.visibility = "visible";

}

// 关闭导航栏
function menuHide()
{
    const head = document.getElementById("head");
    const navbar = document.getElementById("nav-bar");
    const button = document.getElementById("nav-menu-button");
    const closeButton = document.getElementById("nav-closeMenu-button");

    head.style.backgroundColor = "rgba(0,0,0,0)";
    title.style.visibility = "visible";
    button.style.visibility = "visible";
    closeButton.style.visibility = "hidden";
    navbar.style.visibility = "hidden";
}



