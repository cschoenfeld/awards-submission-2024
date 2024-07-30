var banner = document.getElementById('banner');
var clicktag = document.getElementById('clicktag');
var ctaAnimation = false;

var mtl = new TimelineMax({paused:true, repeat:1, repeatDelay:4});

  
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
mtl.set(banner, {visibility: "visible"})
   .set(".cta", {backgroundColor: "#c7483d"})  
   .add(function(){ctaAnimation = false;})

   .from(".txt1", .4, {alpha:0, ease: Sine.easeOut}, "f1")
   .to(".txt1", .35, {alpha:0, ease: Sine.easeIn}, "f1+=2")
   
   .from(".txt2", .5, {alpha:0, ease: Sine.easeOut}, "f2")
   .from(".face", .1, {alpha:0, ease: Sine.easeIn}, "f2+=0.1")
   .from(".mouth", 1, {height:"1", ease: Expo.easeInOut}, "f2")
   .to(".txt2", .35, {alpha:0, ease: Sine.easeIn}, "f2+=2")

   .from(".txt3", .5, {alpha:0, ease: Sine.easeOut}, "f3")
   .to(".right_eye", 0.25, {width:"12", height:"6", x:-3, y:3, ease: Sine.easeInOut}, "f3")
   .from(".nose", 0.4, {scale:0, ease: Back.easeOut}, "f3+=0.3")
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
   TweenMax.to(".cta", .5, {backgroundColor: "#eb5d51", ease: Expo.easeOut})
  }
})

clicktag.addEventListener("mouseout", function(){
  if(ctaAnimation){    
   TweenMax.to(".cta", .5, {backgroundColor: "#c7483d", ease: Expo.easeOut}) 
  }
})