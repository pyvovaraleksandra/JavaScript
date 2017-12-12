var allThemes = ['001', '002', '003', '004', '005', '217', '218', '219', '220', '221'];

window.onload = function(){
	var
		currentTheme = document.querySelector('.current-theme'),
		changeTheme = document.querySelector('.change-theme');

	changeTheme.addEventListener('click', function() {
		var newThemeNo = allThemes.pop();
		currentTheme.href = 'http://www.csszengarden.com/' + newThemeNo + '/' + newThemeNo + '.css';

		var nextButton = document.getElementsByClassName("selector-next")[0];
		allThemes.unshift(newThemeNo);
	});
};

var prevButton, nextButton, parentButton, childButton, leftButton, rightButton;
var elem = [];
var current = 0;
var vElem;
var vertical = 0, sibl = 0;

function findElement() {
	resetAll();
	current = 0;

	prevButton = document.getElementsByClassName("selector-prev")[0];
	nextButton = document.getElementsByClassName("selector-next")[0];
	parentButton = document.getElementsByClassName("nav-top")[0];
	childButton = document.getElementsByClassName("nav-bottom")[0];
	leftButton = document.getElementsByClassName("nav-left")[0];
	rightButton = document.getElementsByClassName("nav-right")[0];

	var input = document.getElementsByClassName("selector");
	var selector = input[0].value.trim();

	elem = document.querySelectorAll(selector);

	if(elem.length) {
		color(elem[0]);
	} else {
		alert("There are not elements. Please, try another query");
	}
	
	toggleButton(prevButton, false);

	if(elem[1])
		toggleButton(nextButton, true);

	if (elem[0].parentElement) 
		toggleButton(parentButton, true);

	if (elem[0].firstElementChild) 
		toggleButton(childButton, true);

	if (elem[0].previousElementSibling)
		toggleButton(leftButton, true);

	if (elem[0].nextElementSibling)
		toggleButton(rightButton, true);
}

function findNext() {
	current++;
	color(elem[current]);
	defaultColor(elem[current-1]);

	if(elem[current-1])
		toggleButton(prevButton, true);

	if(!elem[current+1]) 
		toggleButton(nextButton, false);

	if (elem[current]) 
		toggleButton(parentButton, true);

	if (elem[current].previousElementSibling)
		toggleButton(leftButton, true);

	if (!elem[current].nextElementSibling)
		toggleButton(rightButton, false);
}

function findPrev() {
	current--;
	color(elem[current]);
	defaultColor(elem[current+1]);

	toggleButton(nextButton, true);

	if(!elem[current-1])
		toggleButton(prevButton, false);

	if (elem[current]) 
		toggleButton(parentButton, true);

	if (elem[current].nextElementSibling)
		toggleButton(rightButton, true);

	if (!elem[current].previousElementSibling)
		toggleButton(leftButton, false);
}

// DOM tree

function findParent() {
	toggleButton(nextButton, false);
	toggleButton(prevButton, false);
	resetAll();

	if (vertical == 0) {
		vElem = elem[current].parentElement;
		vertical--;
	} else {
		vElem = vElem.parentElement;
	}

	color(vElem);

	//check fot body!!!
	if (!vElem.parentElement) 
		toggleButton(parentButton, false);

	if (vElem.firstChild) 
		toggleButton(childButton, true);

	if (!vElem.previousElementSibling)
		toggleButton(leftButton, false);

	if (!vElem.nextElementSibling) {
		toggleButton(rightButton, false);
	} else {
		sibl = 1; //continue from here in findNextSibling(), not from elem[0]
	}
}

function findChild() {
	toggleButton(nextButton, false);
	toggleButton(prevButton, false);
	resetAll();

	if (vertical == 0) {
		vElem = elem[current].firstElementChild;
		vertical++;
	} else {
		vElem = vElem.firstElementChild;
	}

	if(vElem) {
		color(vElem);
	} else {
		alert("There are not elements. Please, try another query");
	}
	
	if (!vElem.firstElementChild) 
		toggleButton(childButton, false);

	if (!vElem.previousElementSibling)
		toggleButton(leftButton, false);

	if (vElem.nextElementSibling) {
		toggleButton(rightButton, true);
		sibl = 1; //continue from here in findNextSibling(), not from elem[0]
	}
}

function findPrevSibling() {
	toggleButton(nextButton, false);
	toggleButton(prevButton, false);
	resetAll();

	if (sibl == 0) {
		vElem = elem[current].previousElementSibling;
		sibl--;
	} else {
		vElem = vElem.previousElementSibling;
	}

	color(vElem);

	if (!vElem.previousElementSibling)
		toggleButton(leftButton, false);

	if (vElem.nextElementSibling)
		toggleButton(rightButton, true);
}

function findNextSibling() {
	toggleButton(nextButton, false);
	toggleButton(prevButton, false);
	resetAll();

	if (sibl == 0) {
		vElem = elem[current].nextElementSibling;
		sibl++;
	} else {
		vElem = vElem.nextElementSibling;
	}

	color(vElem);

	if (!vElem.nextElementSibling)
		toggleButton(rightButton, false);

	if (vElem.previousElementSibling)
		toggleButton(leftButton, true);
}

function color(element) {
	element.style.outline = "3px solid red";
	element.style.backgroundColor = "lightblue";
}

function defaultColor(element) {
	element.style.outline = "none";
	element.style.backgroundColor = "";
}

function resetAll() {
	var elements = document.querySelectorAll('*[style="outline: red solid 3px; background-color: lightblue;"]');
	if (elements.length) {
		for (var i = 0; i <= elements.length-1; i++) {
			defaultColor(elements[i]);
		}
	}
}

function toggleButton(button, enable) {
	if (enable) {
		button.removeAttribute("disabled");
	} else {
		button.setAttribute("disabled", "disabled");
	}
}
