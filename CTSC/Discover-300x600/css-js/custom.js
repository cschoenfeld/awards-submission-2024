var banner = document.getElementById('banner');
var clicktag = document.getElementById('clicktag');
var ctaAnimation = false;

var mtl = gsap.timeline({paused:true, repeat:1, repeatDelay:4});

  
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
mtl.set(banner, {visibility: "visible"})
   .add(function(){ctaAnimation = false;})
   .set(".cta", {backgroundColor:"#2f67e2"})
   .set(".cta-txt", {filter:"brightness(10)"})
   
   .add("f1")
   .from(".bg1", 3, {scale:1.15, rotation:0.2, ease: Power0.easeNone}, "f1")
   .from(".logo, .ctaBox", 0.5, {xPercent: gsap.utils.wrap([-100, 100]), ease:Expo.easeOut, onComplete:hoverInOut}, "f1+=0.25")
   .from(".explore", 0.75, {alpha:0, ease: Sine.easeOut}, "f1+=0.25")
   .to(".explore img", 3, {y:-4230, ease: "steps(47)"}, "f1+=0.25")

   .add("f2", "f1+=3")
   .to(".bg1Box, .explore", 1, {xPercent:-100, rotation:0.1, ease:Expo.easeInOut}, "f2")
   .from(".bg2", 3, {scale:1.15, rotation:0.2, ease: Power0.easeNone}, ">-=0.5")
   .from(".bg2Box", 1, {xPercent:100, rotation:0.1, ease:Expo.easeInOut}, "f2")
   .from(".imagine", 0.75, {alpha:0, ease: Sine.easeOut}, "f2+=.75")
   .to(".imagine img", 3, {y:-4230, ease: "steps(47)"}, "f2+=.75")

   .add("f3", "f2+=3")
   .to(".bg2Box, .imagine", 1, {xPercent:-100, rotation:0.1, ease:Expo.easeInOut}, "f3")
   .from(".bg3", 5, {scale:1.15, rotation:0.2, ease: Power0.easeNone}, ">-=0.5")
   .from(".bg3Box", 1, {xPercent:100, rotation:0.1, ease:Expo.easeInOut}, "f3")
   .from(".marvel", 0.75, {alpha:0, ease: Sine.easeOut}, "f3+=.75")
   .to(".marvel img", 3, {y:-4230, ease: "steps(47)"}, "f3+=.75")

   .add("f4", "f3+=3")
   .to(".marvel", 1, {xPercent:-100, ease:Expo.easeInOut}, "f4")
   .from(".overlay", 0.75, {alpha:0, ease: Sine.easeOut}, "f4+=.75")
   .from(".txt4", 3, {alpha:0, scale:0.9, ease: Sine.easeOut}, "f4+=.75")
   
;


/*-------------------------------------
  Window Onload...
---------------------------------------*/
window.onload = function() {
  mtl.play();
}

// var currentDuration = mtl.totalDuration();
// console.log(currentDuration);

/*-------------------------------------
  Hover effect...
---------------------------------------*/
function hoverInOut(){
  ctaAnimation = true;
}

clicktag.addEventListener("mouseenter", function(){
  if(ctaAnimation){    
   gsap.to(".cta-txt", .15, {filter:"brightness(1)", ease: Sine.easeInOut});
   gsap.to(".cta", .25, {backgroundColor:"#fff", ease: Sine.easeInOut});
  }
})

clicktag.addEventListener("mouseleave", function(){
  if(ctaAnimation){    
   gsap.to(".cta-txt", .15, {filter:"brightness(10)", ease: Sine.easeInOut});
   gsap.to(".cta", .25, {backgroundColor:"#2f67e2", ease: Sine.easeInOut});
  }
})