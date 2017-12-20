var allThemes = ['001', '002', '003', '004', '005', '217', '218', '219', '220', '221'];
// var findButton = $('.selector-find')[0],

(function( $ ) {
	var findButton, nextButton, prevButton, parentButton, childButton, leftButton, rightButton;
	var elem;
	    
	window.onload = function(){
		var
			currentTheme = document.querySelector('.current-theme'),
			changeTheme = document.querySelector('.change-theme');

		findButton = $('.selector-find');
		nextButton = $('.selector-next');
		prevButton = $('.selector-prev');
		parentButton = $('.nav-top');
		childButton = $('.nav-bottom');
		leftButton = $('.nav-left');
		rightButton = $('.nav-right');

		changeTheme.addEventListener('click', function() {
			var newThemeNo = allThemes.pop();
			currentTheme.href = 'http://www.csszengarden.com/' + newThemeNo + '/' + newThemeNo + '.css';

			var nextButton = document.getElementsByClassName("selector-next")[0];
			allThemes.unshift(newThemeNo);
		});

		

		//find
		findButton.click( function() {
			if (elem)
				defaultColor(elem);

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
		nextButton.click('click', function() {
			defaultColor(elem);
			current++;

			elem = queyRez[current];
			color(elem);

			checkNextPrev();
			checkDOMButtons();
		});

		//previous
		prevButton.click(function() {
			defaultColor(elem);
			current--;

			elem = queyRez[current];
			color(elem);

			checkNextPrev();
			checkDOMButtons();
		});
		
		//----DOM TREE----
		//parent
		parentButton.click(function() {
			toggleButton(nextButton, false);
			toggleButton(prevButton, false);
			defaultColor(elem);

			elem = $(elem).parents()[0];
			color(elem);

			checkDOMButtons();	
		})

		//first child
		childButton.click(function() {
			toggleButton(nextButton, false);
			toggleButton(prevButton, false);
			defaultColor(elem);

			elem = $(elem).children()[0];
			color(elem);

			checkDOMButtons();
		});

		//previous sibling
		leftButton.click(function() {
			toggleButton(nextButton, false);
			toggleButton(prevButton, false);
			defaultColor(elem);

			elem = $(elem).prev()[0];
			color(elem);

			checkDOMButtons();		
		});

		//next sibling
		rightButton.click(function() {
			toggleButton(nextButton, false);
			toggleButton(prevButton, false);
			defaultColor(elem);

			elem = $(elem).next()[0];
			color(elem);

			checkDOMButtons();
		});

	};

	function color(element) {
		element.style.outline = "3px solid red";
		element.style.backgroundColor = "lightblue";
	}

	function defaultColor(element) {
		element.style.outline = "none";
		element.style.backgroundColor = "";
	}

	function toggleButton(button, enable) {
		button.prop('disabled',  !enable);
	}

	function checkNextPrev() {
		// check for prev
		if (current === 0) {
			toggleButton(prevButton, false);
		} else {
			toggleButton(prevButton, true);
		}
		// check for next
		if(current === rezLength-1) {
			toggleButton(nextButton, false);
		} else {
			toggleButton(nextButton, true);
		}
	}

	function checkDOMButtons() {
		// check for if parent isn't body and html
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
})(jQuery);


