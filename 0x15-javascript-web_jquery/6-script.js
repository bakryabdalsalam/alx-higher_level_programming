// Wait for the document to be ready
$(document).ready(function() {
  // Get the element with ID 'update_header'
  $('#update_header').click(function() {
    // Update the text of the <header> element to "New Header!!!"
    $('header').text('New Header!!!');
  });
});

