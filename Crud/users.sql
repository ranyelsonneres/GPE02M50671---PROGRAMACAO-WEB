-- usuário: root
-- senha: c@tolic@

create database userdb2;

create table users (
	id int auto_increment primary key,
    nome varchar(100) not null,
    email varchar(100) not null
);

select * from users;
