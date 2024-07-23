-------- aula dia 23/07 --------


CREATE TABLE Autores (



 AutorID int , PRIMARY KEY, AUTO_INCREMENT,
Nome VARCHAR(50), NOT null ,
Nacionalidade VARCHAR(50)


)




USE livraria_s2;

CREATE TABLE Livro (
    livro_id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(30) NOT NULL,
    genero VARCHAR(25),
    ano_publicacao DATE,
    autor_id INT,
    FOREIGN KEY (autor_id) REFERENCES Autores(autor_id)
);


CREATE table clientes (


    clientes_id int PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50)
    endereço VARCHAR(50)
    telefone VARCHAR(11)
)


CREATE table emprestimos (

emprestimos_id int PRIMARY kEY AUTO_INCREMENT,
livro_id int 
clientes_id int 
data_emprestimo date 
data_devolucao date 
foreign key (livro_id) references livro(livro_id)
foreign key (clientes_id) references clientes (livro_id)

)