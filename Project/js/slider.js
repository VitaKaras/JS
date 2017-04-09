(function() {
	var container = document.getElementById('logoParade');

	var images = container.children;

	var image_width = 170; 

	var shift_time = 1000;
	var shift_width = 170;
	var temp_shift = 0;
	var temp_jump_index = images.length - 1;

	for (var i = 0; i < images.length; i++) {
		images[i].style.left = image_width * (i - 1) + "px";
	}

	var restoreVisability = function(elem) {
		setTimeout(function() {
				elem.style.display = "block";
			}, 700);
	}
	

	setInterval(function() {

		for (var i = 0; i < images.length; i++) { 
			images[i].style.left = (parseInt(images[i].style.left, 10) + shift_width) + "px";	
		}

		temp_shift += shift_width;

		if (temp_shift >= image_width) {
			images[temp_jump_index].style.display = "none";
			restoreVisability(images[temp_jump_index]);
			images[temp_jump_index].style.left = (-image_width) + "px";
			
			temp_shift = 0;
			temp_jump_index--;
			if (temp_jump_index < 0) {
				temp_jump_index = images.length - 1;
			}
		}
	}, shift_time); 

	
})();


