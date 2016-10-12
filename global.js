$(function() {
  mixpanel.track('connected', {});

  $('form').submit(function(event) {
    event.preventDefault();
    mixpanel.identify();
    mixpanel.people.set({
      "$email": $('#email').val(),
      "$last_login": new Date()
    });
    $('.subscribe').addClass('hidden');
    $('.thanks').removeClass('hidden');
  });
});
