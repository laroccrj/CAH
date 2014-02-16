
$(checkInputs);

function checkInputs() {
	var inputs = $('.autoClear');
	for(var i = 0; i < inputs.length; i++) {
		$(inputs[i]).click(onDefaultFocus);
		$(inputs[i]).blur(checkInputOnBlur);
		checkInput(inputs[i]);
	}
}

function checkInputOnBlur() { 

	input = $(this);
	var def = input.attr('default');

	if(def) {
		if(input.val() == '') {
			input.val(def);
		}
	}
}

function checkInput(input) { 

	input = $(input);
	var def = input.attr('default');

	if(def) {
		if(input.val() == '') {
			input.val(def);
		}
	}
}

function onDefaultFocus() {
	input = $(this);

	var def = input.attr('default');
	
	if(def) {
		if(input.val() == def) {
			input.val('');
		}
	}
}