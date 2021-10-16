--Na tabela sakila.address , monte uma query que exiba a rua e distrito de cada registro em uma coluna apenas, e dê a ela o nome Endereço .

select concat(address, ' - ', district) as Endereço from sakila.address;