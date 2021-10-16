--Para os exercícios a seguir, vamos usar a tabela sakila.actor

--Quantos sobrenomes únicos temos na tabela?


select count(distinct last_name) from sakila.actor;