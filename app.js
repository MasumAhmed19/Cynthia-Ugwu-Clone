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



function circleMouseFollow(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) `
    })
}

circleMouseFollow()
