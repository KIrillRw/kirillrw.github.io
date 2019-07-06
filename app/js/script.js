$(document).ready(function() {
	function getCookie(name) {var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));return matches ? decodeURIComponent(matches[1]) : undefined;}
	var date = new Date(new Date().getTime() + 1000*60*60*24*30);
	strGET = window.location.search.replace( '?', ''); 
	if(strGET=='m=y'){
		$('.right_area').addClass('active_mail');
		document.cookie = "m=Y; path=/; expires=" + date.toUTCString();
	}
	if(getCookie('m') == "Y")
	{
		$('.right_area').addClass('active_mail');
	}
	$('.container_images').click(function(){
		
	});
	if(getCookie('first_visit') != "Y")
	{
		
		$(window).load(function() {
			$('.preroll').addClass('noafter');
			setTimeout(function(){ $('.preroll').addClass('none')}, 3000);
			
			document.cookie = "first_visit=Y; path=/; expires=" + date.toUTCString();
		
		});

	}
	else
	{	
		$('.preroll').removeClass('first_visit');
	}

});
