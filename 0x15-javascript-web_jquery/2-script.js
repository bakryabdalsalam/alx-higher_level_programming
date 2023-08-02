// updates the text color of the <header> element to red (#FF0000) when the user clicks on the tag DIV#red_header
$(document).ready(function() {
  // Get the element with ID 'red_header'
  $('#red_header').click(function() {
    // Update the text color of the <header> element to red (#FF0000)
    $('header').css('color', '#FF0000');
  });
});
