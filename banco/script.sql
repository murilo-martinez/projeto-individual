create database mzfc;
use mzfc;

create table contato(
	idContato int primary key auto_increment,
	nome varchar(45) not null,
	email varchar(45) not null,
	mensagem varchar(150) not null
);