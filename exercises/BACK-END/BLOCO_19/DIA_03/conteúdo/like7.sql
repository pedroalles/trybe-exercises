-- Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições

SELECT * FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';