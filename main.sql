create database main;

\c main;

CREATE TABLE IF NOT EXISTS user_details(
	id SERIAL PRIMARY KEY, /* Unique identifer for each user */
	name VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
	skills INT[], /* 1-33 choices */
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
	skills INT[], /* 1-33 choices */
	interests INT[], /* 1-12 choices */
	link VARCHAR(1000)
);	

INSERT INTO project_traits(title, description, skills, interests, link)
VALUES('Personal Blog','Develop a personal blog describing yourself and projects that you have completed',ARRAY[1,2,3,4,8],ARRAY[1,2,3],'https://purelyfunctional.tv/guide/programming-projects-resume/'),('Twitter Bot','Build a program that submits new status messages to Twitter',ARRAY[5,6,7],ARRAY[1,4,5,7],'https://purelyfunctional.tv/guide/programming-projects-resume/'),('Weather App','Use the Dark Sky api to display weather near you',ARRAY[5],ARRAY[7],'https://purelyfunctional.tv/guide/programming-projects-resume/'),('TODO App Web','Develop a web app to keep track of your to do list across devices',ARRAY[1,2,8,3,4,9],ARRAY[1,3],'https://purelyfunctional.tv/guide/programming-projects-resume/'),('TODO App Mobile','Develop a mobile app to keep track of your to do list',ARRAY[10,11,12,13,5],ARRAY[8,3,7],'https://purelyfunctional.tv/guide/programming-projects-resume/'),('Twilio Bot','Make a bot you can call that will tell you a joke',ARRAY[3,1,2,8],ARRAY[1,3],'https://purelyfunctional.tv/guide/programming-projects-resume/'),('RSS Agregator','Poll RSS feeds for news articles and make a new feed that combines them',ARRAY[3,1,2,8],ARRAY[1,3],'https://purelyfunctional.tv/guide/programming-projects-resume/'),('Mobile Food Log','Develop a web app to keep track of your daily food intake',ARRAY[1,2,8,3,4,9],ARRAY[1,3],'https://purelyfunctional.tv/guide/programming-projects-resume/'),('Web Food Log','develop a web app to keep track of your daily food intake',ARRAY[1,2,8,3,4,9],ARRAY[1,7],'https://purelyfunctional.tv/guide/programming-projects-resume/'),('Google Map Website','Develop a website containing a map with the google maps api',ARRAY[1,2,8,3,4,9,5],ARRAY[1,5],'https://purelyfunctional.tv/guide/programming-projects-resume/'),('Pico CTF','Complete objectives in Pico CTF to demonstrate ethical hacking abilities',ARRAY[14,15,16,17,18,19],ARRAY[9,10],'https://picoctf.com/'),('Natas CTF','Complete objectives in Natas CTF to demonstrate ethical hacking abilities',ARRAY[14,15,16,17,18,19],ARRAY[9,10],'https://overthewire.org/wargames/natas/'),('Google CTF','Complete objectives in Google CTF to demonstrate ethical hacking abilities',ARRAY[14,15,16,17,18,19],ARRAY[9,10],'https://capturetheflag.withgoogle.com/'),('Bayesian Spam Filter','Develop a simple naive Bayesian Model to determine whether an email is spam',ARRAY[20,21,22,23],ARRAY[11,12],'https://blog.statsbot.co/data-scientist-resume-projects-806a74388ae6'),('Not Hotdog','Develop a machine learning model to classify whether images are hotdogs or not',ARRAY[20,24,26,27,28],ARRAY[11,12],'https://blog.statsbot.co/data-scientist-resume-projects-806a74388ae6'),('Recommendation System','Develop a machine learning model to classify whether a user will like a piece of content',ARRAY[20,24,25,5,29,31],ARRAY[11,12],'https://blog.statsbot.co/data-scientist-resume-projects-806a74388ae6'),('Twitter Sentinment Analysis','Develop a machine learning model to calssify user sentiment about a certain subject',ARRAY[20,24,25,5,29,32],ARRAY[11,12],'https://blog.statsbot.co/data-scientist-resume-projects-806a74388ae6'),('Tennis Betmaker','Develop a machine learning model to predict tennis match outcomes and place bets when there is an edge over bookmaker estimates',ARRAY[20,24,25,5,29,30,33],ARRAY[11-12],'https://blog.statsbot.co/data-scientist-resume-projects-806a74388ae6');
