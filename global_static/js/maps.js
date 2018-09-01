// GM Api key: AIzaSyASQrrY_9bUu4hfMhbufz40XsD6pfeg3Io
 var geocoder;
  var map;
  var dr;
  var ds;

  function init() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(14.977240245884662,-86.93953683593747);
    var mapOptions = {
      zoom: 7.2,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    dr = new google.maps.DirectionsRenderer();
    ds = new google.maps.DirectionsService();

    dr.setMap(map);
  }

$(function(){
  $('.mostrarRuta').on('click',function(){
     var data_origen = $(this).attr('data-origen')
     var data_destino = $(this).attr('data-destino')

     var request={
        origin: data_origen,
        destination:data_destino,
        travelMode:'DRIVING',
        provideRouteAlternatives:true,
     };
     $('#abrirmapa').on('shown.bs.modal',function(){
          ds.route(request,function(resultado,estado){
          if(estado=='OK'){
            map.setCenter(resultado)
            map.setZoom(7);
            dr.setDirections(resultado)
          }else if(estado=="NOT_FOUND"){
            map.setCenter( new google.maps.LatLng(14.977240245884662,-86.93953683593747))
          }
       });
    })
})
})