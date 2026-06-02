SELECT p.nome, c.nome
FROM Produto p
INNER JOIN Categoria c
ON p.categoria_id = c.categoria_id;