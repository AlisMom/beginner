var btn = document.getElementById ('btn');
btn.onclick = function () {

}


$(function () {
	$(window).scroll(function() {
	    $('#learn .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});

	$(window).scroll(function() {
		$('#learn .fut').each(function(){
		var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeInUpBig");
			}
		});
	});

	$(window).scroll(function() {
		$('#mail .section-title').each(function(){
		var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeInLeft");
			}
		});
	});


	$(window).scroll(function() {
		$('#footer .credits').each(function(){
		var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("fadeInRightBig");
			}
		});
	});

})