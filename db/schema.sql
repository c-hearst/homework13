CREATE DATABASE wyz6xr1ilvrqvnsb;

USE DATABASE wyz6xr1ilvrqvnsb;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    primary key ("id")
)

SELECT * FROM burgers;