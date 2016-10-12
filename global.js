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
});
