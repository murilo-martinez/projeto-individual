-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE mzfc;

USE mzfc;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

select * from usuario;

CREATE TABLE quiz_resultados (
    id INT PRIMARY KEY AUTO_INCREMENT,
    acertos INT,
    erros INT,
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

select * from quiz_resultados;

create table post(
	id int auto_increment,
    fkUsuario int,
    primary key(id, fkUsuario),
    titulo varchar(65),
    descricao varchar(255),
    foreign key(fkUsuario) references usuario(id)
);

create table comentario(
	id int auto_increment,
    fkPost int,
    primary key(id, fkPost),
	fkUsuarioComentario int,
    descricao varchar(255),
    foreign key(fkPost) references post(id),
    foreign key(fkUsuarioComentario) references usuario(id)
);