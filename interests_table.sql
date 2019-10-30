CREATE TABLE IF NOT EXISTS interests(
id SERIAL PRIMARY KEY
interests VARCHAR(50)
);

INSERT INTO interests(interests)
VALUES('Web Dev'),('Blog'),('Databases'),('Automation'),('Authentication'),
('NONE'),('API Usage'),('Mobile Dev'),('Ethical Hacking'),('Penetration Testing'),
('Machine Learning'),('Data Science');