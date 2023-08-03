// Wait for the document to be ready
$(document).ready(function() {
  function fetchTranslation() {
    const languageCode = $('#language_code').val();
    const apiUrl = `https://www.fourtonfish.com/hellosalut/hello/${languageCode}`;

    // Fetch the translation from the API
    $.getJSON(apiUrl, function(data) {
      // Update the content of the "hello" div with the translation
      $('#hello').text(data.hello);
    });
  }

  // Function to fetch and display the translation when the button is clicked
  $('#btn_translate').click(fetchTranslation);

  // Function to fetch and display the translation when ENTER key is pressed in the input field
  $('#language_code').keypress(function(event) {
    if (event.keyCode === 13) {
      fetchTranslation();
    }
  });
});

