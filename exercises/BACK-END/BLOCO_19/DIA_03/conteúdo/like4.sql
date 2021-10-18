-- Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon

SELECT * FROM film
WHERE title LIKE '___gon%'
LIMIT 2;