--Na tabela sakila.film , monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme

select concat(title, ' - ', release_year) as 'Lançamento do Filme' from sakila.film;