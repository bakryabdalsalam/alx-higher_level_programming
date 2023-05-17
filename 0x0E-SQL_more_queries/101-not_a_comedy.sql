-- List all shows without the genre Comedy
SELECT tv_shows.title
FROM tv_shows
LEFT JOIN tv_show_genres ON tv_shows.id = tv_show_genres.show_id
LEFT JOIN tv_genres ON tv_show_genres.genre_id = tv_genres.id AND tv_genres.name = 'Comedy'
WHERE tv_genres.id IS NULL
ORDER BY tv_shows.title ASC;

