$(function() {
  mixpanel.track('connected', {});
  $('form').submit(function(event) {
    mixpanel.identify();
    mixpanel.people.set({
      "$email": $('#email').val(),
      "$last_login": new Date()
    });
    event.preventDefault();
  });

  var mymap = L.map('map',{
    center: [43.6039,1.3355],
    zoom: 12,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    dragging: false

  });

});
