-- List all shows from hbtn_0d_tvshows_rate by their rating

-- Select the show title and the sum of ratings for each show
SELECT tv_shows.title, SUM(tv_show_ratings.rating) AS rating_sum
FROM tv_shows
JOIN tv_show_ratings ON tv_shows.id = tv_show_ratings.show_id
GROUP BY tv_shows.title
ORDER BY rating_sum DESC;

