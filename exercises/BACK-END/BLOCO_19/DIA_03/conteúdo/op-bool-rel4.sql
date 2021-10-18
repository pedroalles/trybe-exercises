-- Quantos clientes estão ativos e na loja 1 ?

SELECT COUNT(*) AS 'Clientes ativos - Loja 1' FROM customer
WHERE active = 1 AND store_id = 1;