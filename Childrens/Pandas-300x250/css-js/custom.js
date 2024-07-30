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

   .from(".map", .4, {alpha:0, ease: Sine.easeOut}, "f1")
   .from(".txt1", .4, {alpha:0, ease: Sine.easeOut}, "f1")
   .to(".right_eye", .15, {scaleY:0, ease: Sine.easeInOut}, "f1+=0.75")
   .to(".txt1", .35, {alpha:0, ease: Sine.easeIn}, "f1+=2.5")
   
   .from(".txt2", .4, {alpha:0, ease: Sine.easeOut}, "f2")
   .to(".map", .5, {alpha:0, ease: Expo.easeOut}, "f2")
   .fromTo(".car", .5, {alpha:0, rotation:0.5}, {alpha:1, rotation:0.5, ease: Sine.easeIn}, "f2")
   .to(".car", .75, {scale:1.15, x:-10, rotation:0, ease: Sine.easeOut}, "f2+=1.5")
   .to(".right-head", .5, {rotate:-5, x:2, ease: Sine.easeOut}, "f2+=1.5")
   .to(".left-head, .left-nose, .tounge", .5, {rotate:15, x:-6, y:7, ease: Sine.easeOut}, "f2+=1.5")
   .to(".right-hand", .5, {rotate:12, x:4, y:-3, ease: Sine.easeOut}, "f2+=1.5")
   .to(".tounge, .line1", .5, {alpha:0, ease: Sine.easeOut}, "f2+=1.75")
   .from(".line2, .eyebrow", .5, {alpha:0, ease: Sine.easeOut}, "f2+=1.75")
   .to(".txt2", .35, {alpha:0, ease: Sine.easeOut}, "f2+=2.5")

   .from(".txt3", .4, {alpha:0, ease: Sine.easeIn}, "f3")
   .to(".left-head, .left-nose", .5, {rotate:0, x:0, y:0, repeat:1, yoyo:true, ease: Sine.easeInOut}, "f3-=0.75")
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