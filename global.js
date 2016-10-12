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



  var map = L.map('map').setView([43.6039,1.3355], 12);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
});
