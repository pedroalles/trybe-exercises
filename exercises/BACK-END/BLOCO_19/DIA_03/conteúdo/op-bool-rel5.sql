-- Mostre todos os detalhes dos clientes que não estão ativos na loja 1 

SELECT * FROM customer
WHERE active = 0 AND store_id = 1;