-- Precisamos de um relatório dos nomes dos clientes, em ordem alfabética , que não estão mais ativos no nosso sistema e pertencem à loja com o id 2. Porém, não inclua o cliente KENNETH no resultado

SELECT * FROM customer
WHERE active = 0 AND store_id = 2 AND first_name != 'KENNETH'
ORDER BY first_name;