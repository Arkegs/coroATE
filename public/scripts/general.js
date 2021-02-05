window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
	document.getElementById("dropMenu").style.display = "none";
  }
} 

function dropmenu() {
	var x = document.getElementById("dropMenu");
	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		 x.style.display = "flex";
	}
} 