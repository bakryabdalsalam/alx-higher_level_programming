// Wait for the document to be ready
$(document).ready(function() {
  // Get the element with ID 'red_header'
  $('#red_header').click(function() {
    // Add the class "red" to the <header> element
    $('header').addClass('red');
  });
});
