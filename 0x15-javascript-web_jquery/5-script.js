// Wait for the document to be ready
$(document).ready(function() {
  // Get the element with ID 'add_item'
  $('#add_item').click(function() {
    // Create a new <li> element with the text 'Item'
    var newLiElement = $('<li>Item</li>');
    
    // Append the new <li> element to the UL.my_list
    $('ul.my_list').append(newLiElement);
  });
});

