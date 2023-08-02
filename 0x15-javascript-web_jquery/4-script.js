// Wait for the document to be ready
$(document).ready(function() {
  // Get the element with ID 'toggle_header'
  $('#toggle_header').click(function() {
    // Get the <header> element
    var headerElement = $('header');

    // Check if the current class is 'red'
    if (headerElement.hasClass('red')) {
      // If the current class is 'red', toggle it to 'green'
      headerElement.removeClass('red');
      headerElement.addClass('green');
    } else {
      // If the current class is 'green' or any other class, toggle it to 'red'
      headerElement.removeClass('green');
      headerElement.addClass('red');
    }
  });
});

