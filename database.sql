create database loja;
use loja;

create table product (
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   price DECIMAL(5,2) NOT NULL,
   description TEXT NULL,
   PRIMARY KEY ( id )
);  

INSERT INTO product (name, price, description) VALUES ('Meia', 14.99, 'ksadklasjj salkdjaskl djaslkdja slkdjas ldj lk');
INSERT INTO product (name, price, description) VALUES ('Camisa', 124.99, 'ksadklasjj salkdjaskl djaslkdja slkdjas ldj lk');
INSERT INTO product (name, price, description) VALUES ('Tenis', 140.99, 'O tenis é ksadklasjj salkdjaskl djaslkdja slkdjas ldj lk');

select * from product;
