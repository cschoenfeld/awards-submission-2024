var banner = document.getElementById('banner');
var clicktag = document.getElementById('clicktag');
var ctaAnimation = false;

var mtl = new TimelineMax({paused:true, repeat:1, repeatDelay:4});
  
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
mtl.set(banner, {visibility: "visible"})
   .set(".cta", {background: "#00baf2"}) 
   .set(".hover", {alpha: 0}) 
   .add(function(){ctaAnimation = false;})

   .addLabel("f1")
   .from(".logo", .5, {alpha:0, y:10, ease: Sine.easeOut}, "f1")
   .from(".bg, .bg2", 10, {scale:.8, ease: Sine.easeOut}, "f1")
   .to(".top-path, .middle-path, .bottom-path", 3, {stagger:0.2, clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: Linear.easeNone}, "f1+=.5")
   .fromTo(".plane", 3.5, {x:-270}, {x:80, ease: Linear.easeNone}, "f1+=.1")
   .from(".cta", .5, {x:20, ease: Sine.easeOut}, "f1+=.5")
   .from(".arrow", .5, {alpha:0, ease: Sine.easeOut}, "f1+=1")
   .to(".top-path, .middle-path, .bottom-path", 2, {alpha:0,  ease: Sine.easeOut}, "f1+=4")
   .add(function(){hoverInOut()}, "f1+=1.15")

   .addLabel("f2", "f1+=4.5")
   .from(".txt1", .75, {alpha:0, y:20, ease: Sine.easeOut, stagger:0.2}, "f2")
   .from(".cta-txt", .5, {alpha:0, ease: Sine.easeOut}, "f2+=1.25")
   .from(".txt2a", .75, {alpha:0, ease: Sine.easeOut}, "f2+=1.25")
   .from(".txt2b", .5, {alpha:0, y:10, ease: Sine.easeOut}, "f2+=1.5")
   .from(".bg2", 1.5, {alpha:0, ease: Sine.easeOut}, "f2+=1.25")   
   .to(".txt2", .5, {alpha:0, ease: Sine.easeOut}, "f2+=4")
   .from(".txt3a", .75, {alpha:0, ease: Sine.easeOut}, "f2+=4.5")
   .from(".txt3b, .txt3c", .5, {alpha:0, y:10, ease: Sine.easeOut, stagger:0.2}, "f2+=5")
    
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
   TweenMax.to(".cta", .5, {background: "#ffffff", rotation:0.02, ease: Sine.easeIn})
   TweenMax.to(".arrow", .5, {borderColor:"#00baf2 transparent transparent transparent", ease: Sine.easeIn})
   TweenMax.to(".arrow", .25, {y:2, repeat:5, yoyo:true, rotation:0.02, ease: Sine.easeIn})
   TweenMax.to(".hover", .25, {alpha:1, ease: Sine.easeIn})
  }
})

clicktag.addEventListener("mouseout", function(){
  if(ctaAnimation){ 
   TweenMax.to(".cta", .5, {background: "#00baf2", rotation:0.02, ease: Sine.easeIn})
   TweenMax.to(".arrow", .5, {borderColor:"#ffffff transparent transparent transparent", ease: Sine.easeIn})   
   TweenMax.to(".arrow", .25, {y:0, rotation:0.02, ease: Sine.easeOut}) 
   TweenMax.to(".hover", .25, {alpha:0, ease: Sine.easeIn})
  }
})