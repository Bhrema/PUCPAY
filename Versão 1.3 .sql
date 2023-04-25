create database pucpay;

use pucpay;

create table tb_perfil(
	id int,
    tipo varchar(50),
    primary key(id)
);

create table tb_usuarios(
	id int auto_increment,
    nome varchar(100),
    email varchar(100),
    senha varchar(50),
    cpf varchar(11) default null ,
    cnpj varchar(14) default null ,
    userType int,
    saldo float,
    primary key(id),
    foreign key(userType) references tb_perfil(id)
);

create table tb_produtos(
	id int auto_increment,
    nome varchar(100),
    valor float,
    idRestaurante int,
    primary key(id, idRestaurante),
    foreign key (idRestaurante) references tb_usuarios(id)
);

create table tb_pedidos(
	id int auto_increment,
    idComprador int,
    idRestaurante int,
    primary key(id),
    foreign key (idComprador) references tb_usuarios(id),
    foreign key (idRestaurante) references tb_usuarios(id)
);

create table tb_produto_pedido(
	idPedido int,
    idProduto int,
    quantidade int,
    primary key(idPedido, idProduto),
    foreign key (idPedido) references tb_pedidos(id),
    foreign key (idProduto) references tb_produtos(id)
);

create table tb_tipo_promocao(
	id int,
    tipo varchar(25),
    primary key(id)
);

create table tb_promocoes(
	id int auto_increment,
    idTipo int,
    desconto float,
    idProduto int,
    primary key(id, idProduto),
    foreign key(idProduto) references tb_produtos(id),
    foreign key(idTipo) references tb_tipo_promocao(id)
);

insert into tb_perfil values(1, "usuario");
insert into tb_usuarios(nome, email, senha, cpf, userType, saldo) values("Jose", "ssss", "ggg", 12345678910,1, 1.00);

select *
from tb_usuarios;