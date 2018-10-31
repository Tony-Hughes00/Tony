function OnClickSliderImage (image) {
	var img = document.getElementById('tech-main');
	img.src = image;

};
function CloseLightBox () {
	document.getElementById('box').style.display='none';
	document.getElementById('light').style.display='none';
	document.getElementById('video').pause();
	document.getElementById("lbcWrap").removeChild(document.getElementById("video"));
	console.log("CloseLightBox");
}
function EmbedVideoLink(src) {
	var innerHTML='<iframe id="video" width="1220" height="541" src="' + src + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
	document.getElementById("lbcWrap").innerHTML = innerHTML;
}