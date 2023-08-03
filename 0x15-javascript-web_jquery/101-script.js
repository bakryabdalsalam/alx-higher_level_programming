// Wait for the document to be ready
$(document).ready(function() {
  // Function to add a new element to the list
  $('#add_item').click(function() {
    const newItem = '<li>Item</li>';
    $('ul.my_list').append(newItem);
  });

  // Function to remove the last element from the list
  $('#remove_item').click(function() {
    $('ul.my_list li:last-child').remove();
  });

  // Function to clear all elements from the list
  $('#clear_list').click(function() {
    $('ul.my_list').empty();
  });
});

