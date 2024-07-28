-------  dia 24 ---------
----- desafio Miguel ----



CREATE  TABLE PRODUTOS (

    nome VARCHAR(20),
    preco decimal (10, 2),
    cor VARCHAR(10),
    tamanho VARCHAR (30),
    peso decimal (3,3),
    descricao VARCHAR(100),
    frete decimal(10,2);


 
);
ALTER TABLE PRODUTOS ADD ID_produto int AUTO_INCREMENT UNIQUE;
-- ano , mes , dia.
ALTER TABLE PRODUTOS CHANGE COLUMN pais_origem descricao VARCHAR (100);

INSERT into Clientes( ID_produto, nome, preco, cor, tamanho,  peso, descricao, frete) VALUES
(1, 'Papel colorido', 15.00, 'misto','pequeno',00.180,'folha colorida de otima qualidade!',5,00 ),
 (2, 'celular', 1200.00, 'cinza', 'médio',00.150, 'um lindo celular cinza',10.00)
  (3, 'laptop gamer', 2000.00, 'rosa', 'médio', 0.800,' é um lindo laptop gamer..', 40.00   )
 (4, 'garrafa gamer', 270.00, 'rosa-choque', 'pequena', 0.250,'ela tem led!! e roda games.', 28.00 )
 (5, 'casaco', 350.00, 'branco','M',0.200, 'um belo casaco, para o frio?', 34.00)
  (6, 'pera gamer', 1000.00, 'mista', 'pequena', 0.980, ' pera gamer desenvolvida ')
 (7, 'disco palaye royale', 'rafaelsilva@gmail.co')
  (8, 'mouse gamer', 120.00, 'rosa', 'pequeno', 'com LUIZINHA!!', 15.00')
 (9, 'calca cargo', 150.00,'bege', 'M','calca bege cargo,  bonita e estilosa!' )
  (10, CPU, 670.57, rosa, médio, 3,600, CPU rapida e pratica para usar no dia dia...')


use desafio_miguel;

INSERT INTO PRODUTOS( ID_produto, nome, preco, cor, tamanho,  peso, descricao, frete) VALUES
(1, 'Papel colorido', 15,00, 'misto','pequeno',00,180,'folha colorida de otima qualidade!',5,00 ),
 (2, 'celular', 1200,00, 'cinza', 'médio',00,150, 'um lindo celular cinza',10,00);
 --- micro estudio

DELETE FROM Produtos WHERE ID = 4;
DELETE FROM Produtos WHERE ID = 7;

-- Adição da coluna SemEstoque
ALTER TABLE Produtos ADD COLUMN SemEstoque BOOLEAN;

-- Atualização dos registros para identificar que estão sem estoque, exceto o ID 2
UPDATE Produtos SET SemEstoque = TRUE WHERE ID != 2;

-- Relatório dos 5 primeiros registros de acordo com a ordem de inserção e status da coluna SemEstoque
SELECT * FROM Produtos ORDER BY ID LIMIT 5