// 



-- USE ti3k5791_miguelvargas;


-- CREATE
CREATE TABLE id clientes 
( 
 id INT PRIMARY KEY AUTO_INCREMENT,  
 nome VARCHAR(n) NOT NULL,  
 email VARCHAR(n) NOT NULL,  
 telefone VARCHAR(n) NOT NULL,  
 endereço VARCHAR(n),  
 UNIQUE (email,telefone)
);
CREATE TABLE clientes (
    -- colunas / tipo de dado  / restricao 
    idCLientes INT PRIMARY KEY , 
    nome VARCHAR (100),
    telefone VARCHAR (100), 


);

-- ALTER  table clientes 
rename

INSERT into Clientes( idCLientes, nome, email_clientes) VALUES
 (1, 'jonas', 'rafaelsilva@gmail.com')
  (2, 'lico', 'rafaelsilva@gmail.com')
 (3, 'ben', 'rafaelsilva@gmail.com')
  ti3k5791_miguelvargas


  use  ti3k5791_miguelvargas;
set email_clientes = ' novo.email@gmail.com '
where idCLientes = 1;


USE ti3k5791_miguelvargas;

SELECT (idCLientes, email_clientes, telefone)


FROM Clientes
where idCLientes => 3 ;