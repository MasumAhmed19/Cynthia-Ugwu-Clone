/**
 * Smooth Scrolling 
 *      Attach loco scroll css
 *      Attach locomotive scroll min css
 *      Some code from loco github for js
 * 
 * gsap
 *      Attach gsao cdn
 *      
 * 
 */

const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

var timer


function mouseChapta(){
    clearTimeout(timer)
    // define default scale value
    var xScale=1
    var yScale=1
    
    var xPrev = 0
    var yPrev = 0

    window.addEventListener("mousemove", function(dets){
        var xdiff= dets.clientX - xPrev ;
        var ydiff= dets.clientY - xPrev ;
        xPrev = dets.clientX
        yPrev = dets.clientY
        
        xScale= gsap.utils.clamp(0.8, 1, xdiff);
        yScale= gsap.utils.clamp(0.8, 1, ydiff);

        circleMouseFollow(xScale, yScale)

        timer = setTimeout(function(){
            document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`
        }, 100)

    })
}

mouseChapta()

function circleMouseFollow(xScale, yScale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xScale}, ${yScale})`
    })
}

circleMouseFollow()



function firstAnim(){
    var tl = gsap.timeline();
    tl.from("#nav",{
        y:20,
        opacity: 0,
        duration: 1,
        ease:Expo.easeInOut

    })

        .to(".boundingElem",{
            y: 0,
            ease: Expo.easeInOut,
            duration: 1.5,
            stagger: 0.2,
            delay: -0.5
        })

        .from("#heroFooterHeading", {
            y:-10,
            opacity:0,
            duration:1.5,
            ease:Expo.easeInOut,
            delay: -1

        })
}

firstAnim()