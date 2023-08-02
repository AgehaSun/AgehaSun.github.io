//加载动画
gsap.from(".nav", {
    opacity: 0,
    duration: 0.4,
    stagger: 0.2
});

gsap.from(".main", {
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
});

// 钟进入动画
gsap.from("#clock_1", {
    opacity: 0,
    y: -60,
    duration: 0.6,
})

gsap.from("#clock_2", {
    opacity: 0,
    y: 40,
    duration: 0.6,
})

//钟旋转动画
gsap.to("#clock_1", {
    rotation: 360,
    duration: 24,
    ease: "none",
    repeat: -1,
})
gsap.to("#clock_2", {
    rotation: -360,
    duration: 36,
    ease: "none",
    repeat: -1,
})
gsap.to("#clock_3", {
    rotation: 360,
    duration: 40,
    ease: "none",
    repeat: -1,
})
gsap.to("#clock_4", {
    rotation: 360,
    duration: 360,
    ease: "none",
    repeat: -1,
})
gsap.to("#clock_5", {
    rotation: -360,
    duration: 30,
    ease: "none",
    repeat: -1,
})


//钟透明度动画
gsap.to("#clock_1", {
    opacity: 0.2,
    duration: 3,
    yoyo: "true",
    repeat: -1,
})
gsap.to("#clock_2", {
    opacity: 0.3,
    duration: 6,
    yoyo: "true",
    repeat: -1,
})
gsap.to("#clock_3", {
    opacity: 0.4,
    duration: 2,
    yoyo: "true",
    repeat: -1,
})
gsap.to("#clock_4", {
    opacity: 0.3,
    duration: 4,
    yoyo: "true",
    repeat: -1,
})
gsap.to("#clock_5", {
    opacity: 0.4,
    duration: 5,
    yoyo: "true",
    repeat: -1,
})
gsap.to("#clock_p", {
    opacity: 0.3,
    duration: 3,
    yoyo: "true",
    repeat: -1,
})




// 飞机动画
let airplane = TweenMax.from(".about-animation-actor",
    { yPercent: 30, duration: 40 }
)

let about = document.getElementById("aboutButton");
about.onclick = function ()
{
    airplane.restart();
}