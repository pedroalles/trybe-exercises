-- Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary

SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';