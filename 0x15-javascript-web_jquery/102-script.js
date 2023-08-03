// Wait for the document to be ready
$(document).ready(function() {
  // Function to fetch and display the translation
  $('#btn_translate').click(function() {
    const languageCode = $('#language_code').val();
    const apiUrl = `https://www.fourtonfish.com/hellosalut/hello/${languageCode}`;

    // Fetch the translation from the API
    $.getJSON(apiUrl, function(data) {
      // Update the content of the "hello" div with the translation
      $('#hello').text(data.hello);
    });
  });
});

