-- Active: 1679651254836@@35.226.146.116@3306@jbl-4416472-mauricio-toledo

CREATE TABLE IF NOT EXISTS 100MRASOS (
id VARCHAR(255)NOT NULL PRIMARY KEY,
competicao VARCHAR(255) NOT NULL UNIQUE,
atleta VARCHAR(255) NOT NULL UNIQUE,
value VARCHAR(255) NOT NULL,
unidade CHAR(2) NOT NULL




);
CREATE TABLE IF NOT EXISTS DARDOS (
id VARCHAR(255)NOT NULL PRIMARY KEY,
competicao VARCHAR(255) NOT NULL UNIQUE,
atleta VARCHAR(255) NOT NULL UNIQUE,
value VARCHAR(255) NOT NULL,
unidade CHAR(2) NOT NULL




);


DROP TABLE   DARDOS, 100MRASOS
