var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("lcwSlider");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000);
}

function btnFirst(){

  var first = document.getElementById("btn-first");
  var second = document.getElementById("btn-second");

  if(first.style.display === "none"){

    second.style.display ="none"
    first.style.display = "block";
    document.getElementById("btn1").style.backgroundColor = "blue";
    document.getElementById("btn2").style.backgroundColor = "grey";

    
  }
  else{
    second.style.display ="block"
    first.style.display = "none";
    document.getElementById("btn1").style.backgroundColor = "grey";
    document.getElementById("btn2").style.backgroundColor = "blue";
  }

  console.log("mamama")

}
function btnSecond(){


  var first = document.getElementById("btn-first");
  var second = document.getElementById("btn-second");

   
  if(second.style.display === "none"){

    
    first.style.display ="none"
    second.style.display = "block";
    document.getElementById("btn1").style.backgroundColor = "grey";
    document.getElementById("btn2").style.backgroundColor = "blue";
    
  }
  else if(second.style.display === "block"){
    first.style.display ="block"
    second.style.display = "none";
    document.getElementById("btn1").style.backgroundColor = "blue";
    document.getElementById("btn2").style.backgroundColor = "grey";

  }
  else{
    first.style.display ="none"
    second.style.display = "block";
    document.getElementById("btn1").style.backgroundColor = "grey";
    document.getElementById("btn2").style.backgroundColor = "blue";

  }

  console.log("ajajaja")
  
}