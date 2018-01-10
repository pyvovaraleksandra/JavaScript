var table = document.getElementById('star_table');
var stars = table.getElementsByTagName('img');
var url = '/collaboration';
var index, status;


var xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.send();

if (xhr.readyState == 4 && xhr.status != 200) {
	alert( xhr.status + ': ' + xhr.statusText );
} else {
	console.log(xhr.responseText);
	console.log("-");

	// set pics for the all stars according to response
	binStars = xhr.responseText;
	for (var i = 0; i <= binStars.length-1; i++) {
		stars[i].src = (binStars[i] == 0) ? "star_off.gif" : "star_on.gif";	
	}

	// handler. get index and status of the clicked star
	table.addEventListener("click", function(event) {
		for (var i = 0; i <= 99; i++) {
			if(stars[i] == event.target) {
				index = i;
				status = stars[i].getAttribute("src");
				status = (status == "star_off.gif" ) ? 1 : 0; 
			}
		}
		
		xhr.open("GET", url + "?i=" + index + "&s=" + status, false);
		xhr.send();
	}, false);
}