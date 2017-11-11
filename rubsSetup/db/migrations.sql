CREATE DATABASE publiclib

\c publiclib

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	name VARCHAR(64),
	password_digest VARCHAR(64)
);

CREATE TABLE location(
	id SERIAL PRIMARY KEY,
	address VARCHAR(255)
);


CREATE TABLE books(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	author VARCHAR(255),
	location_id INT REFERENCES location(id),
	user_id INT REFERENCES users(ud)

);