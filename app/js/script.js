$(document).ready(function() {
	function getCookie(name) {var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));return matches ? decodeURIComponent(matches[1]) : undefined;}
	var date = new Date(new Date().getTime() + 1000*60*60*24*30);
	strGET = window.location.search.replace( '?', ''); 
	if(strGET=='m=N'){
		$('.right_area').addClass('active_mail');
		document.cookie = "m=N; path=/; expires=" + date.toUTCString();
	}
	if(getCookie('m') == "N")
	{
		$('.right_area').removeClass('active_mail');
	}
	if(getCookie('first_visit') != "Y")
	{
		
		// $(window).load(function() {
		// 	$('.preroll').addClass('noafter');
		// 	setTimeout(function(){ $('.preroll').addClass('none')}, 3000);
			
		// 	document.cookie = "first_visit=Y; path=/; expires=" + date.toUTCString();
		
		// });

	}
	else
	{	
		$('.preroll').removeClass('first_visit');
	}

});
