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

	var findButton = $('.selector-find')[0],
		nextButton = $('.selector-next')[0],
		prevButton = $('.selector-prev')[0],
		parentButton = $('.nav-top')[0],
		childButton = $('.nav-bottom')[0],
		leftButton = $('.nav-left')[0],
		rightButton = $('.nav-right')[0];

	//find
	findButton.addEventListener('click', function() {
		resetAll();
		current = 0;

		var selector = $('.selector').val().trim();

		if (!selector) {
			alert("Please, write any selector");
			return;
		}

		queyRez = $(selector);
		rezLength =  $(selector).length;
		elem = $(selector)[0];

		if (rezLength) {
			color(elem);
		} else {
			alert("There are not elements. Please, try another query");
			return;
		}
		
		checkNextPrev();
		checkDOMButtons();
	});

	//next
	nextButton.addEventListener('click', function() {
		resetAll()
		current++;

		elem = queyRez[current];
		color(elem);

		checkNextPrev();
		checkDOMButtons();
	});

	//previous
	prevButton.addEventListener('click', function() {
		resetAll()
		current--;

		elem = queyRez[current];
		color(elem);

		checkNextPrev();
		checkDOMButtons();
	});
	
	//----DOM TREE----
	//parent
	parentButton.addEventListener('click', function() {
		toggleButton(nextButton, false);
		toggleButton(prevButton, false);
		resetAll();

		elem = $(elem).parents()[0];
		color(elem);

		checkDOMButtons();	
	})

	//first child
	childButton.addEventListener('click', function() {
		toggleButton(nextButton, false);
		toggleButton(prevButton, false);
		resetAll();

		elem = $(elem).children()[0];
		color(elem);

		checkDOMButtons();
	});

	//previous sibling
	leftButton.addEventListener('click', function() {
		toggleButton(nextButton, false);
		toggleButton(prevButton, false);
		resetAll();

		elem = $(elem).prev()[0];
		color(elem);

		checkDOMButtons();		
	});

	//next sibling
	rightButton.addEventListener('click', function() {
		toggleButton(nextButton, false);
		toggleButton(prevButton, false);
		resetAll();

		elem = $(elem).next()[0];
		color(elem);

		checkDOMButtons();
	});

};

function color(element) {
	element.style.outline = "3px solid red";
	element.style.backgroundColor = "lightblue";
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
	button.disabled = !enable;
}

function checkNextPrev() {
	var nextButton = $('.selector-next')[0],
		prevButton = $('.selector-prev')[0];

	// check for next
	if (current === 0) {
		toggleButton(prevButton, false);
	} else {
		toggleButton(prevButton, true);
	}
	// check for prev
	if(current === rezLength-1) {
		toggleButton(nextButton, false);
	} else {
		toggleButton(nextButton, true);
	}
}

function checkDOMButtons() {
	var	parentButton = $('.nav-top')[0],
		childButton = $('.nav-bottom')[0],
		leftButton = $('.nav-left')[0],
		rightButton = $('.nav-right')[0];

	// check for parent
	if ($(elem).parents().length-2 <= 0) {
		toggleButton(parentButton, false);
	} else {
		toggleButton(parentButton, true);	
	}
	// check for child
	if ($(elem).children().length) {
		toggleButton(childButton, true);
	} else {
		toggleButton(childButton, false);
	}
	// check for prevSibl
	if ($(elem).prev().length) {
		toggleButton(leftButton, true);
	} else {
		toggleButton(leftButton, false);
	}	
	// check for nextSibl
	if ($(elem).next().length) {
		toggleButton(rightButton, true);
	} else {
		toggleButton(rightButton, false);
	}
}


