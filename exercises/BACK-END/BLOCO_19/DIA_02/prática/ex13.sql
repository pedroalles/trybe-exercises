-- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas

USE Scientists;
SELECT Name, Hours FROM Projects
ORDER BY Hours ASC
LIMIT 1
OFFSET 1;