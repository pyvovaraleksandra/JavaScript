var table = document.getElementById('star_table');
var stars = table.getElementsByTagName('img');
var url = '/collaboration';
var index, status;


table.addEventListener("mouseover", function(event) {

	for (var i = 0; i <= 99; i++) {
		if (stars[i] == event.target) {
			index = i;
			status = stars[i].getAttribute("src");
			status = (status == "star_off.gif" ) ? 1 : 0; 
		}
	}
	params = "n=" + index + "&s=" + status;

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, false);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			setStatus(xhr.responseText);
		} else {
			alert("Error!");
		}
	}
    xhr.send(params);
});

function setStatus(binStars) {
	for (var i = 0; i <= binStars.length-1; i++) {
			stars[i].src = (binStars[i] == 0) ? "star_off.gif" : "star_on.gif";	
	}
}