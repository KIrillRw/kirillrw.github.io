$(document).ready(function() {
	strGET = window.location.search.replace( '?', ''); 
	if(strGET=="mail=y")
		$('.right_area').addClass('active_mail');


});
