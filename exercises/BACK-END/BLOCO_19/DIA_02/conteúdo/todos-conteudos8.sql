--Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes , incluindo o título , o ano de lançamento , a duração e a classificação indicativa e o custo de substituição . Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição

select title, release_year, length, rating, replacement_cost from sakila.film
order by length desc, replacement_cost asc
limit 20;