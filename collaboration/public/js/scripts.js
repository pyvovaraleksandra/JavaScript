var table = document.getElementById('star_table');
var stars = table.getElementsByTagName('img');
var url = '/collaboration';
var index, status;


table.addEventListener("click", function(event) {

	for (var i = 0; i <= 99; i++) {
		if (stars[i] == event.target) {
			index = i;
			status = stars[i].getAttribute("src");
			status = (status == "star_off.gif" ) ? 1 : 0; 
		}
	}
	params = "i=" + index + "&s=" + status;

	var xhr = new XMLHttpRequest();
	xhr.open("GET", url + '?' + params, false);

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log(xhr.responseText);
			setStatus(xhr.responseText);
		} else {
			// console.log(xhr.readyState);
		}
	}

    xhr.send();
});


function setStatus(binStars) {
	// binStars = binStars.slice(1, -1);
	// binStars = binStars.toString();
	// console.log(binStars);
	for (var i = 0; i <= binStars.length-1; i++) {
			stars[i].src = (binStars[i] == 0) ? "star_off.gif" : "star_on.gif";	
	}
}