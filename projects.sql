create database projects;

\c projects;

CREATE TABLE IF NOT EXISTS project_traits(
	id SERIAL PRIMARY KEY, /* Unique identifer for each project */
	title VARCHAR(100) NOT NULL,
	description VARCHAR(1000) NOT NULL,
	skills INT[], /* 1-30 choices */
	interests INT[], /* 1-12 choices */
	link VARCHAR(1000)
);	