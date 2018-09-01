$(document).ready(function(){
	// Add scrollspy to <body>

	$('#formContacto').on('submit',function(e){
			e.preventDefault();	
			var url = $(this).attr('action');

			$.post(url,$(this).serialize(),function(data){
				$('#mensaje').text(data.mensaje)
				$('#formContacto').each(function(){
					this.reset();
				});
			},'json');

	});

 	$('body').scrollspy({target: ".navbar", offset: 50});   

  	// Add smooth scrolling on all links inside the navbar
  	$("#myNavbar a").on('click', function(event) {

    // Prevent default anchor click behavior
	    event.preventDefault();

	    // Store hash
	    var hash = this.hash;

	    // Using jQuery's animate() method to add smooth page scroll
	    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	    $('html, body').animate({
	      scrollTop: $(hash).offset().top
	    }, 1000, function(){	   
	    // Add hash (#) to URL when done scrolling (default click behavior)
	      
	    });
  	});

	var altura = $('.navbar').offset().top;

	$(window).on('load', function(){
		if ( $(window).scrollTop() > altura ){
			$('.navbar').addClass('menu-fixed');
		} else {
			$('.navbar').removeClass('menu-fixed');
		}
	});
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.navbar').addClass('menu-fixed');
		} else {
			$('.navbar').removeClass('menu-fixed');
		}
	});

	

});
