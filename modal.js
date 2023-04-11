// Modal 1
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}

// Modal 2
var modal = document.getElementById("myModal2");
var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption2");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[1];
span.onclick = function() { 
  modal.style.display = "none";
}

//Modal 3
var modal = document.getElementById("myModal3");
var img = document.getElementById("myImg3");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption3");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[2];
span.onclick = function() { 
  modal.style.display = "none";
}
