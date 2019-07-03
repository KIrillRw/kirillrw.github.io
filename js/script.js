$(document).ready(function(){

	$('.inner_table table.adaptive').stacktable();
	$('.scroll').on('click', function(e){
		var _href = $(this).attr("href");
	    $('html,body').animate({ scrollTop: $(_href).offset().top }, 1000);
	    e.preventDefault();
	});

});
