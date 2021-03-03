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

function disappearSongchart(){
	var x = document.getElementById("songchart");
	var y = document.getElementsByClassName("songlist");
	if (x.style.opacity === "1") {
		x.style.setProperty("-webkit-transition", "opacity 1s");
		x.style.opacity = 0;
		setTimeout(function(){
			y[0].style.display = "none";
			y[1].style.display = "none";
		}, 450);
		
	} else {
		y[0].style.display = "block";
		y[1].style.display = "block";
		x.style.opacity = 1;
		x.style.setProperty("-webkit-transition", "opacity 1s");
	}
}

var channelID = "UCrLxPGAfMYhLRQLuJmR3u2Q";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
   var link = data.items[0].link;
   var id = link.substr(link.indexOf("=")+1);
$("#youtube_video").attr("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0");
});