// Landing Page Animations---------------------------------------------------

const tl = gsap.timeline({defaults:{ease: 'power1.out'}});
tl.to('.text',{y:"0%", duration: 1, stagger: 0.45});
tl.to(".slider", {y:"-100%", duration: 1.5,delay: 0.5});
tl.to('.intro',{y:"-100%",duration:1},"-=1");
tl.fromTo('.middle-text', {opacity:0}, {opacity: 1,duration:1});
arrowMove();
function arrowMove(){
    tl.to(".floating-arrow",{y: "-25%"})
    .to(".floating-arrow",{y:"25%", onComplete:arrowMove});
}

//---------------------------------------------------------------------------

// About us page modal image-------------------------------------------------


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


//---------------------------------------------------------------------------