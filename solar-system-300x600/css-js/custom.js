var banner = document.getElementById('banner');
var clicktag = document.getElementById('clicktag');
var ctabAnimation = false;

var mt = new TimelineMax({paused:true, repeat:0, repeatDelay:0}),
    tl1 = new TimelineMax();

  
// ---- Animation Timelines ------  
tl1.set(banner, {visibility: "visible"})
    .addLabel("label")
	.add(function(){ctaAnimation = false;})
    .set(".hover_cta", {autoAlpha:0})
	.fromTo(".alpha_bg", 2, {autoAlpha:0.5, ease: Linear.easeNone}, {autoAlpha:0, ease: Linear.easeNone}, "label")
    .fromTo(".kid", 1.5, {scale:0.82,transformOrigin:"bottom center"},{scale :1, x:-5, transformOrigin:"bottom center", rotation:0.02, ease: Linear.easeInOut}, "label+=1")
    .from(".copy1,.copy1_ov", 0.5, {autoAlpha:0, y:15, ease: Sine.easeOut, rotation:0.02}, "label+=0.5")
    .from(".copy2,.copy2_ov", 0.5, {autoAlpha:0, y:15, ease: Sine.easeOut, rotation:0.02}, "label+=0.7")
    .from(".copy3,.copy3_ov", 0.5, {autoAlpha:0, y:15, ease: Sine.easeOut, rotation:0.02}, "label+=0.9")
    .from(".copy4,.copy4_ov", 0.5, {autoAlpha:0, y:15, ease: Sine.easeOut, rotation:0.02}, "label+=01.1")
    .to(".bg", 6, {scale :1.27, transformOrigin:"center", ease: Linear.easeNone, rotation:0.02}, "label+=1")
    .to("#frame_two", 0.8, {autoAlpha:0,  ease: Sine.easeOut}, "label+=4")
    .from(".logo", 0.8, {autoAlpha:0, y:15, ease: Sine.easeOut}, "label+=4.5")
    .from(".footer", 0.6, {y:72, ease: Sine.easeOut}, "label+=4.5")
    .from(".copy5", 0.3, {autoAlpha:0, y:9, ease: Sine.easeOut,rotation:0.02}, "label+=5")
    .from(".copy6", 0.3, {autoAlpha:0, y:10, ease: Sine.easeOut, rotation:0.02}, "label+=5.3")
    .from(".cta", 0.5, {autoAlpha:0, y:10, ease: Sine.easeOut, rotation:0.02}, "label+=5.3")
    .add(function(){hoverInOut()})
;


function stopAnimation(){
  mt.pause();
}

//----- Add timeline ------
mt.add([tl1]);


//----- Window Onload ------
window.onload = function() { 
  mt.play();
};


//var currentDuration = mt.totalDuration();
//console.log(currentDuration);

/*-------------------------------------
---------------------------------------*/
function hoverInOut(){
  ctaAnimation = true;
}
 clicktag.addEventListener("mouseover", function(){  
    if(ctaAnimation){  
        TweenMax.to(".cta", .5, {autoAlpha:0, rotation:0.02, ease: Sine.easeOut})
        TweenMax.to(".hover_cta", .5, {autoAlpha:1, rotation:0.02, ease: Sine.easeOut})
    }
 })

 clicktag.addEventListener("mouseout", function(){  
    if(ctaAnimation){  
        TweenMax.to(".cta", .5, {autoAlpha:1, rotation:0.02, ease: Sine.easeOut}) 
        TweenMax.to(".hover_cta", .5, {autoAlpha:0, rotation:0.02, ease: Sine.easeOut})
    }
 })