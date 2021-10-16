--Para os exercícios a seguir, vamos usar a tabela sakila.actor

--Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.

select * from sakila.actor
order by last_name, first_name desc;