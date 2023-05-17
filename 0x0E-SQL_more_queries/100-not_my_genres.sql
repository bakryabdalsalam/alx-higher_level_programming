-- Create a temporary table to store the genres linked to Dexter
CREATE TEMPORARY TABLE tmp_genres AS
SELECT genre_id FROM tv_show_genres
JOIN tv_shows ON tv_show_genres.show_id = tv_shows.id
WHERE title = 'Dexter';

-- List all genres not linked to Dexter
SELECT name FROM tv_genres
WHERE id NOT IN (SELECT genre_id FROM tmp_genres)
ORDER BY name ASC;

-- Drop the temporary table
DROP TABLE IF EXISTS tmp_genres;

