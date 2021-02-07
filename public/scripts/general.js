window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
	document.getElementById("dropMenu").style.display = "none";
	document.getElementById("hamb").style.backgroundColor = "#e20101"  
  }
} 

function dropmenu() {
	var x = document.getElementById("dropMenu");
	if (x.style.display === "flex") {
		x.style.display = "none";
		document.getElementById("hamb").style.backgroundColor = "#e20101"
	} else {
		 x.style.display = "flex";
		document.getElementById("hamb").style.backgroundColor = "#c41313"
	}
} 

function disappear(){
	var x = document.getElementById("dropMenu");
	x.style.display = "none";
	document.getElementById("hamb").style.backgroundColor = "#e20101"
}