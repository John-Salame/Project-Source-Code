//possible tutorial?
//https://medium.com/@bhanushali.mahesh3/creating-a-simple-website-with-node-js-express-and-ejs-view-engine-856382a4578f

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
	password: 'postgresJohn'
};

let db = pgp(dbConfig);

app.use(express.static(__dirname + '/')); //added by John

app.get('/', function(req, res) {
	res.render('LandingPage',{ 
		my_title:"Landing Page"
	});
});

app.get('/login', function(req, res) {
	res.render('Login',{
		my_title:"Login Page"
	});
});

//projid is the id of the project for the card you clicked to reach here.
app.get('/info', function(req, res) {
	var projid = req.query.projid;
	console.log("Project template id: " + projid);
	var query = "SELECT * FROM project_traits WHERE id = " + parseInt(projid) + ";";
	db.any(query)
		.then(function(rows) {
			console.log(rows);
			res.render('ProjectTemplate',{
				my_title:"More Info",
				data: rows[0]
			});
		})
		.catch(function(err) {
			console.log("You paged directly to here or project id does not exist.");
			res.render('ProjectTemplate',{
				my_title:"More Info",
				data: undefined
			});
		});
});

app.get('/register', function(req, res) {
	res.render('Registration',{
		my_title:"Register"
	});
});

app.get('/add_project', function(req, res) {
	res.render('userAdd',{
		my_title:"Add Project"
	});
});

app.get('/search', function(req, res) {
	res.render('search',{
		my_title:"Search Page",
		numResults: 0
	});
});

//searching and result displaying will happen here.
app.get('/search/results', function(req, res) {
	var numr = 4; //number of results
	console.log(numr);
	console.log(req.query.skills);
	console.log(req.query.interests);
	var funs = require('./Scripts/search.js');
	res.render('search',{
		searchjs: funs,
		my_title:"Search Page",
		numResults: numr
	});
});


app.listen(3000);
console.log('3000 is the magic port');
