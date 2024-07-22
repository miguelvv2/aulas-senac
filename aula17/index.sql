-- dia 22 

----------------------------------------------------------
CREATE TABLE Tabela_pedidos
( 
 id pedidos INT PRIMARY KEY AUTO_INCREMENT,  
 id clientes INT ,  
 data_do_pedido DATE ,  
 totalpedido decimal (10,2),  
 numero_pedido VARCHAR (50),
 foreign KEY (idCLientes) references clientes(idCLientes)




); 

-------------------------------------------------------------
use ti3k5791_miguelvargas;


SELECT SUM(totalpedido) AS valor_total_pedidos
from Tabela_pedidos; 

SELECT Avg (totalpedido) AS valor_medio_pedido from Tabela_pedidos;
------------------------------
use  ti3k5791_miguelvargas;
SELECT Clientes.idCLientes , Clientes.nome, Clientes.email_clientes, Tabela_pedidos.numero_pedido
------------------------
from Clientes
INNER JOIN Tabela_pedidos ON clientes.idCLientes  = Tabela_pedidos.id_clientes;
SELECT Clientes.idCLientes , Clientes.nome, Clientes.email_clientes, Tabela_pedidos.numero_pedido from Clientes LEFT JOIN Tabela_pedidos ON Clientes.idCLientes = Tabela_pedidos.id_clientes;