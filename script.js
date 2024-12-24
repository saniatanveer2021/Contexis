var cursor = document.querySelector(".cursor");
function customCursor(){
    const WrapperDiv = document.querySelector(".WrapperDiv");
    WrapperDiv.addEventListener("mousemove",details=>{
        gsap.to(cursor,{
            x:details.x-6+"px",
            y:details.y-6+"px",
            ease:Expo.easeOut
        })
    })
}
customCursor();

function cursorAnimation(){
    document.querySelectorAll(".rightDetails span").forEach((item)=>{
        item.addEventListener("mouseenter",(details)=>{
            cursor.style.height = "27px";
            cursor.style.width = "27px";
            cursor.style.opacity = 0.3;
        })
        item.addEventListener("mouseleave",()=>{
            cursor.style.height = "13px";
            cursor.style.width = "13px";
            cursor.style.opacity = 1;
        })
    })
}
cursorAnimation();
function buttonAnimation(){
    const button = document.querySelectorAll(".button").forEach(item=>{
        if(window.innerWidth<768){
            item.addEventListener("mouseenter",details=>{
                cursor.style.display = "none";
            })
            item.addEventListener("mouseleave",details=>{
                cursor.style.display = "none";
            })
        }
        else{
            item.addEventListener("mouseenter",details=>{
                cursor.style.display = "none";
            })
            item.addEventListener("mouseleave",details=>{
                cursor.style.display = "inline-block";
            })
        }
    })
}
buttonAnimation();

function pageAnimations(){
    gsap.to(".navigation",{
        height:"80px",
        padding:"9px 12.9vw",
        scrollTrigger:{
            trigger:".navigation",
            scroller:"body",
            start:"top -2%",
            end:"top -4%",
            scrub:1.1
        }
    })
    gsap.to(".upperDetails #img",{
        width:"80px",
        scrollTrigger:{
            trigger:".upperDetails img",
            scroller:"body",
            start:"top -2%",
            end:"top -4%",
            scrub:1.1
        }
    })
    gsap.from(".heroSectionDetails h1",{
        y:"135%",
        delay:1,
        duration:1.2,
        opacity:0
    })
    gsap.from(".rightSideDetails p",{
        y:"120%",
        delay:1,
        duration:1.2,
        opacity:0
    })
    gsap.from(".rightSideDetails #certified",{
        y:"135%",
        delay:1,
        duration:1.2,
        opacity:0
    })
    gsap.to(".backgroundIMG img",{
        width:"118.5vw",
        x:"-17%",
        duration:2,
        scrollTrigger:{
            trigger:".backgroundIMG img",
            scroller:"body",
            // markers:true,
            start:"top 44%",
            end:"top -110%",
            scrub:0.5
        }
    })
    gsap.from(".page2 .textContainer",{
        y:"50%",
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".page2 .textContainer",
            scroller:"body",
            // markers:true,
            start:"top 95%",
            end:"top 70%"
        }
    })
    gsap.from(".page2 .bottomIMGContainer",{
        y:"50%",
        delay:0.1,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".page2 .bottomIMGContainer",
            scroller:"body",
            // markers:true,
            start:"top 95%",
            end:"top 70%"
        }
    })
    gsap.from(".page3 .topTextContainer",{
        y:"50%",
        delay:0.1,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".page3 .topTextContainer",
            scroller:"body",
            // markers:true,
            start:"top 90%",
            end:"top 70%"
        }
    })
    gsap.from(".IMGContainer p",{
        delay:0.5,
        duration:1,
        opacity:0,
        scrollTrigger:{
            tirgger:".IMGContainer p",
            scroller:"body",
            // markers:true,
            start:"200%",
            end:"180%"
        }
    })
    if(window.innerWidth <= 1110){
        gsap.to(".page3 .rightIMGContainer",{
            backgroundPosition:"-120px 0vw",
            scrollTrigger:{
                trigger:".page3 .rightIMGContainer",
                scroller:"body",
                // markers:true,
                scrub:0.5
            }
        })
    }
    else{
        gsap.to(".page3 .rightIMGContainer",{
            backgroundPosition:"-126px 48.5vw",
            scrollTrigger:{
                trigger:".page3 .rightIMGContainer",
                scroller:"body",
                // markers:true,
                scrub:0.5
            }
        })
    }
    gsap.from(".page5 h5",{
        y:"110%",
        delay:1,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".page5 h5",
            scroller:"body",
            // markers:true
        }
    })
    gsap.from(".page5 .centeredTextContainer",{
        y:"60%",
        delay:0.5,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".page5 centeredTextContainer",
            scroller:"body",
            // markers:true,
            start:"2600vw",
            // end:"350vw"
        }
    })
    gsap.from(".rightDetails ul",{
        x:"86%",
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".rightDetails ul",
            scroller:"body",
            // markers:true,
            start:"top 70%",
            end:"top 50%"
        }
    })
    gsap.from(".rightDetails #getInTouch",{
        x:"86%",
        opacity:0,
        delay:0.2,
        duration:1,
        scrollTrigger:{
            trigger:".rightDetails #getInTouch",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 60%"
        }
    })
}
pageAnimations();
