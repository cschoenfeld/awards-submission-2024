var banner = document.getElementById('banner');
var clicktag = document.getElementById('clicktag');
var ctaAnimation = false;


var mtl = new TimelineMax({paused:true, repeat:0, repeatDelay:4});

  
/*---------------------------------------
  Timeline Animation
---------------------------------------*/
mtl.set(banner, {visibility: "visible"}) 

	.set(".hover", {alpha: 0}) 
	.add(function(){ctaAnimation = false;})

	// Frame1 animation
	.addLabel("f1")
	.fromTo(".bg", 8, {scale:1.15, x:-20}, {scale:1.5, x:-10, y:40, rotation:0.2, ease: Sine.easeOut}, "f1")
	.from(".txt1-bg", .75, {width: 0, ease: Sine.easeOut}, "f1")
	.from(".txt1b", .5, {alpha: 0, rotation:0.2, ease: Sine.easeOut}, "f1+=0.4")
	.to(".txt1a", .1, {alpha: 0, rotation:0.2, ease: Sine.easeOut})

	.to(".txt1-bg, .txt1b", .5, {alpha:0, rotation:0.2, ease: Sine.easeOut}, "f1+=1.75")
	.from(".txt2-bg", .75, {width: 0, ease: Sine.easeOut}, "f1+=2")
	.from(".txt2b", .5, {alpha: 0, rotation:0.2, ease: Sine.easeOut}, "f1+=2.4")
	.to(".txt2a", .1, {alpha: 0, rotation:0.2, ease: Sine.easeOut})

	.to(".txt2-bg, .txt2b", .5, {alpha:0, rotation:0.2, ease: Sine.easeOut}, "f1+=4.3")
	.from(".txt3-bg", .75, {width: 0, ease: Sine.easeOut}, "f1+=4.55")
	.from(".txt3b", .5, {alpha: 0, rotation:0.2, ease: Sine.easeOut}, "f1+=5")
	.to(".txt3a", .1, {alpha: 0, rotation:0.2, ease: Sine.easeOut})
	.to("#frame_one", .5, {x:-300, rotation:0.02, ease: Expo.easeOut}, "f1+=7")

	// Frame2 animation
	.addLabel("f2", "f1+=7")
	.from(".logo", .5, {x:300, rotation:0.2, ease: Expo.easeOut}, "f2")
	.from(".txt5", .5, {alpha:0, rotation:0.2, ease: Sine.easeOut}, "f2+=.5")
	.from(".line", .5, {width:0, rotation:0.2, ease: Expo.easeOut, onComplete:hoverInOut}, "f2+=1")
	.from(".txt5c", .5, {alpha:0, ease: Sine.easeInOut}, "f2+=.5")
	.to(".hover", .25, {alpha:1, repeat:1,repeatDelay:0.3, yoyo:true, ease: Sine.easeOut}, "f2+=1.5")
  
;


/*-------------------------------------
  Window Onload...
---------------------------------------*/
window.onload = function() { 
  mtl.play();
};


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
   TweenMax.to(".hover", .25, {alpha:1, rotation:0.02, ease: Sine.easeOut});
   TweenMax.to(".line", .25, {width:0, rotation:0.02, ease: Sine.easeOut});
  }
})

clicktag.addEventListener("mouseout", function(){
  if(ctaAnimation){    
   TweenMax.to(".hover", .25, {alpha:0, rotation:0.02, ease: Sine.easeOut});
   TweenMax.to(".line", .25, {width:42, rotation:0.02, ease: Sine.easeOut});
  }
})
