var banner = document.getElementById('banner');
var clicktag = document.getElementById('clicktag');
var ctaAnimation = false;

var mtl = new TimelineMax({paused:true, repeat:1, repeatDelay:4});

  
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
mtl.set(banner, {visibility: "visible"})
   .set(".cta", {backgroundColor: "#ffc425"})  
   .add(function(){ctaAnimation = false;})

   .from(".map-pin", .4, {alpha:0, ease: Sine.easeOut}, "f1")
   .from(".txt1", .4, {alpha:0, ease: Sine.easeOut}, "f1")
   .to(".txt1", .35, {alpha:0, ease: Sine.easeIn}, "f1+=2")
   
   .from(".txt2", .4, {alpha:0, ease: Sine.easeOut}, "f2")
   .to(".map-pin", .75, {alpha:0, ease: Expo.easeOut}, "f2")
   .from(".teen", .75, {alpha:0, x:-100, ease: Expo.easeOut}, "f2")
   .from(".preemie", .75, {alpha:0, x:-100, ease: Expo.easeOut}, "f2+=.5")
   .to(".txt2", .35, {alpha:0, ease: Sine.easeIn}, "f2+=2")

   .from(".txt3", .4, {alpha:0, ease: Sine.easeOut}, "f3")
   .to(".preemie", .75, {x:-100, ease: Expo.easeOut}, "f3")
   .to(".teen", .75, {x:-56, ease: Expo.easeOut}, "f3+=.25")
   .to(".hand1, .sad-face", .25, {alpha:0, ease: Expo.easeOut}, "f3+=.25")
   .to(".hand2", .75, {rotation:-90, y:13, x:10, ease: Expo.easeOut}, "f3+=.25")
   .from(".happy-face", .5, {alpha:0, ease: Expo.easeInOut}, "f3+=.25")
   .from(".ball", .5, {alpha:0, y:-100, ease: Bounce.easeOut}, "f3+=.25")
   .from(".motion", .5, {scale:0, transformOrigin: "43% 22%", ease: Bounce.easeOut}, "f3+=.4")
   .to(".ball", .2, {scale:0.95, transformOrigin: "43% 22%", repeat:3, yoyo:true, ease: Sine.easeInOut}, "f3+=0.75")
   .to(".motion", .2, {scale:0.85, transformOrigin: "43% 22%", repeat:3, yoyo:true, ease: Sine.easeInOut}, "f3+=0.75")
   .from(".logo", .5, {y:18, ease: Expo.easeInOut}, "f3")
   .from(".cta", .25, {alpha:0}, "f3")
   .from(".cta", .4, {width:"17", transformOrigin:"bottom", ease: Expo.easeInOut}, "f3+=0.2")
   .from(".cta_txt", .5, {alpha:0, ease: Sine.easeOut, onComplete: hoverInOut}, "f3+=0.5")
;


/*-------------------------------------
  Window Onload...
---------------------------------------*/
window.onload = function() {
  mtl.play();
}

var currentDuration = mtl.totalDuration();
// console.log(currentDuration);

/*-------------------------------------
  Hover effect...
---------------------------------------*/
function hoverInOut(){
  ctaAnimation = true;
}

clicktag.addEventListener("mouseover", function(){
  if(ctaAnimation){    
   TweenMax.to(".cta", .5, {backgroundColor: "#fae27a", ease: Expo.easeOut})
  }
})

clicktag.addEventListener("mouseout", function(){
  if(ctaAnimation){    
   TweenMax.to(".cta", .5, {backgroundColor: "#ffc425", ease: Expo.easeOut}) 
  }
})