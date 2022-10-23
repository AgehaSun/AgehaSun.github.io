
gsap.from(".nav",{
    opacity: 0,
    duration: 0.8,
    y: -40,
    stagger: 0.2
});

gsap.from("#homeArea", {
    opacity: 0,
    duration: 0.8,
    y: 40,
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


const additionalX = { val: 0 };
let containerWidth = document.body.clientWidth * 0.35;
let offset = 0;

gsap.to(".repeatText", {
    x: -containerWidth,
    duration: 10,
    repeat: -1,
    ease: 'none',
    modifiers: {
        x: gsap.utils.unitize(x => {
            offset += additionalX.val;
            x = (parseFloat(x) + offset) % -containerWidth
            return x;
        })
    }
});

let airplane = TweenMax.from(".anim",
    { yPercent: 30, duration: 40 }
)

let about = document.getElementById("aboutButton");
about.onclick = function () {
    airplane.restart();
    alert("fly")
}