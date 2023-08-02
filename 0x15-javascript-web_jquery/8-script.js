// Wait for the document to be ready
$(document).ready(function() {
  // Fetch the movies data from the API URL
  $.getJSON('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
    // Get the list of movie titles from the fetched data
    var movieTitles = data.results.map(function(movie) {
      return movie.title;
    });

    // Create an HTML list and add each movie title as a list item
    var listHtml = '';
    movieTitles.forEach(function(title) {
      listHtml += '<li>' + title + '</li>';
    });

    // Append the list to the HTML tag UL#list_movies
    $('#list_movies').append(listHtml);
  });
});

