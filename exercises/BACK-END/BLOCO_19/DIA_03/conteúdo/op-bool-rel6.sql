-- Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título

SELECT title FROM film
WHERE rating = 'NC-17' 
ORDER BY rental_rate, title
LIMIT 50;