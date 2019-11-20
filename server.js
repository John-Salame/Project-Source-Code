/*REQUIRES THE FOLLOWING COMMANDS
npm install ejs
npm install express
npm install request
npm install pg-promise


EITHER UPDATE password field in dbConfig or follow these instructions to update your psql password
sudo -u postgres psql
/password
projectsource
projectsource
*/


const express = require('express'); // Add the express framework has been added
const request = require('request');
let app = express();

const bodyParser = require('body-parser'); // Add the body-parser tool has been added
app.use(bodyParser.json());              // Add support for JSON encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Add support for URL encoded bodies

//View engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Create Database Connection
const pgp = require('pg-promise')();

//Database configuration
const dbConfig = {
	host: 'localhost',
	port: 5432,
	database: 'main',
	user: 'postgres',
	//EITHER UPDATE THIS LINE OR FOLLOW INSTRUCTIONS AT THE TOP
	password: 'projectsource'
};

let db = pgp(dbConfig);


app.listen(3000);
console.log('3000 is the magic port');
