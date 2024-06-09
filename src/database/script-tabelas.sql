-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
Drop database mzfc;
CREATE DATABASE mzfc;

USE mzfc;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

select * from usuario;

insert into usuario values
(default, 'Thiago Bonacelli', 'thiago@gmail.com', '1234'),
(default, 'Patrícia', 'patricia@gmail.com', '1234'),
(default, 'Ana', 'ana@gmail.com', '1234'),
(default, 'Gisele', 'gisele@gmail.com', '1234');

CREATE TABLE quiz_resultados (
    id INT PRIMARY KEY AUTO_INCREMENT,
    acertos INT,
    erros INT,
    dataQuiz datetime default current_timestamp,
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

select * from quiz_resultados;

insert into quiz_resultados values
(default, 9, 1, default, 1),
(default, 8, 1, default, 2),
(default, 7, 3, default, 3),
(default, 6, 4, default, 4);

create table post(
	id int auto_increment,
    fkUsuario int,
    primary key(id, fkUsuario),
    titulo varchar(65),
    descricao varchar(255),
    foreign key(fkUsuario) references usuario(id)
);