// Wait for the document to be ready
$(document).ready(function() {
  // Fetch the translation data from the API URL
  $.getJSON('https://fourtonfish.com/hellosalut/?lang=fr', function(data) {
    // Get the translation of "hello" from the fetched data
    var translation = data.hello;

    // Display the translation in the HTML tag DIV#hello
    $('#hello').text(translation);
  });
});

