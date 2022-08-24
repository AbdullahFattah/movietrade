CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(300),
    price INT NOT NULL
);