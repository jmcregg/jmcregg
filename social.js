function enlargeImg() {
   var element = document.getElementById("myImg");
   element.classList.toggle("imgTwo");
 
   var x = document.getElementById("captionOne");
  if (x.style.display === "none") {
    x.style.display = "inline";
  } else {
    x.style.display = "none";
  }
}

function enlargeImg2() {
   var element = document.getElementById("myImg2");
   element.classList.toggle("imgTwo");
 
   var x = document.getElementById("captionTwo");
  if (x.style.display === "none") {
    x.style.display = "inline";
  } else {
    x.style.display = "none";
  }
}
