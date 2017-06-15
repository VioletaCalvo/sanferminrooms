(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    Materialize.updateTextFields();
    // $('#textarea').val('New Text');
    $('#textarea').trigger('autoresize');

  }); // end of document ready
})(jQuery); // end of jQuery name space

function initMap() {
  var point = {lat: 42.824392, lng: -1.649870};
  var location = {
    center: point,
    size: 400
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: point,
    scrollwheel: false,
    scaleControl: false,
    streetViewControl: true,
    fullscreenControl: false
  });
  // Add the circle for this city to the map.
  var cityCircle = new google.maps.Circle({
    strokeColor: '#45a7ba',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#53d0ce',
    fillOpacity: 0.4,
    map: map,
    center: location.center,
    radius: location.size
  });
}

google.maps.event.addDomListener(window, "load", initMap);

// Donibane-Lohitzune
// data=!3m1!4b1!4m5!3m4!1s0xd51117e6a0092db:0x406651748139250!8m2!3d43.388051!4d-1.663055
