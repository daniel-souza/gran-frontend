DROP TABLE IF EXISTS Computador;
DROP TABLE IF EXISTS Pessoa;

CREATE TABLE Computador (
    id integer PRIMARY KEY autoincrement,
    marca varchar(100) NOT NULL
);

CREATE TABLE Pessoa (
    id integer PRIMARY KEY autoincrement,
    nome varchar(100) NOT NULL,
    sexo char(1) NOT NULL CHECK(sexo IN('M','F')),
    c_id integer REFERENCES Computador(id)
);

INSERT INTO Computador (marca) values
    ("Acer"),
    ("Dell"),
    ("Asus"),
    ("Lenovo"),
    ("HP"),
    ("Positivo"),
    ("Samsung");

INSERT INTO Pessoa (nome, sexo, c_id) values
    ("Ana", "F", 1),
    ("Beto", "M", 1),
    ("Carlos", "M", 4),
    ("Daniel", "M", 5),
    ("Elisa", "F", 5),
    ("Fiona", "F", 2),
    ("Giovana", "F", 2),
    ("Hugo", "M", 7);
