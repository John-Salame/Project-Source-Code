create database main;

\c main;

CREATE TABLE IF NOT EXISTS user_details(
	id SERIAL PRIMARY KEY, /* Unique identifer for each user */
	name VARCHAR(100) NOT NULL,
	password VARCHAR(100), NOT NULL,
	skills INT[], /* 1-30 choices */
	interests INT[] /* 1-12 choices */
);

CREATE TABLE IF NOT EXISTS interests(
id SERIAL PRIMARY KEY,
interests VARCHAR(50)
);

INSERT INTO interests(interests)
VALUES('Web Dev'),('Blog'),('Databases'),('Automation'),('Authentication'),
('NONE'),('API Usage'),('Mobile Dev'),('Ethical Hacking'),('Penetration Testing'),
('Machine Learning'),('Data Science');

CREATE TABLE IF NOT EXISTS skills(
id SERIAL PRIMARY KEY,
skill VARCHAR(50)
);

INSERT INTO skills(skill)
VALUES('HTML'),('CSS'),('Database'),('HTTP Server'),('API Access'),
('Oauth'),('Error Handling'),('JavaScript'),('SQL'),('Swift'),('Kivy'),('IOS Dev'),
('Android Dev'),('Systems'),('Password Cracking'),('Kali Linux'),('SQL Injection'),
('XSS'),('Buffer Overflow Attacks'),('Python'),('Text Classification'),
('Statistical Inference'),('Algorithms'),('Tensorflow'), ('CNN'), ('Computer Vision'),
('Image Classification'), ('Instagram API'),('Keras'),('Sklearn'),('Vowpal Wabbit'),
('Twitter API'),('Scrapy');

CREATE TABLE IF NOT EXISTS project_traits(
	id SERIAL PRIMARY KEY, /* Unique identifer for each project */
	title VARCHAR(100) NOT NULL,
	description VARCHAR(1000) NOT NULL,
	skills INT[], /* 1-30 choices */
	interests INT[], /* 1-12 choices */
	link VARCHAR(1000)
);	

