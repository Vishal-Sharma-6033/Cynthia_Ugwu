var timeout;

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function AnimationFirstpage(){
    var tl=gsap.timeline();
    tl.from("#nav" , {
        y:'-10',
        opacity:0,
        duration:2,
        case:Expo.easeInout

    })

        .to(".boundingelem" , {
        y:'0',
        case:Expo.easeInout,
        duration:2,
        delay:-1,
        stagger:.1
    })

    .from("#herofooter",{
        y:'-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        case:Expo.easeInout
    })
    
}
AnimationFirstpage();



function circleSkew(){
    let xscale=1;
    let yscale=1;

    let xprev=0;
    let yprev=0;

    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout);
        // var xdiff=dets.clientX - xprev;
        // var ydiff=dets.clientY - yprev;

        // xscale= gsap.utils.clamp(.8,1.2,xdiff);
        // yscale= gsap.utils.clamp(.8,1.2,ydiff);

        xscale= gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
        yscale= gsap.utils.clamp(.8,1.2,dets.clientY - yprev);

        xprev=dets.clientX;
        yprev=dets.clientY;

        mousecircleFolower(xscale, yscale);

       timeout = setTimeout(function(){
        this.document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px)scale(1,1)`;
        },100);

    })
}


function mousecircleFolower(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
        // console.log(dets.clientX , dets.clientY);
        this.document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}
circleSkew();
mousecircleFolower();



document.querySelectorAll(".elem").forEach(function (elem) {

  var rotate = 0;
  var diffrot = 0;
  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});
