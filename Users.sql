create database user_accounts;

\c user_accounts;

CREATE TABLE IF NOT EXISTS user_details(
	id SERIAL PRIMARY KEY, /* Unique identifer for each user */
	name VARCHAR(100) NOT NULL,
	password VARCHAR(100), NOT NULL,
	skills INT[], /* 1-30 choices */
	interests INT[] /* 1-12 choices */
);