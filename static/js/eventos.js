$(document).ready(function(){

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

  	
  	$("#barra a").on('click', function(event) {

  
	    event.preventDefault();

	    
	    var hash = this.hash;
	    $('#navbar').attr("class","collapse navbar-collapse");
	   
	    
	    $('html, body').animate({
	      scrollTop: $(hash).offset().top
	    }, 1500, function(){	   
	   
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
