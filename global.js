$(function() {
  $('form').submit(function(event) {
    mixpanel.register({
      "email": $('#email').val(),
    });
    event.preventDefault();
  });
});
