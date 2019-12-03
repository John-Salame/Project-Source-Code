//possible tutorial?
//https://medium.com/@bhanushali.mahesh3/creating-a-simple-website-with-node-js-express-and-ejs-view-engine-856382a4578f

/*REQUIRES THE FOLLOWING COMMANDS
npm install ejs
npm install express
npm install request
npm install pg-promise
nmp install jsdom


EITHER UPDATE password field in dbConfig or follow these instructions to update your psql password
sudo -u postgres psql
/password
projectsource
projectsource
*/


const express = require('express'); // Add the express framework has been added
const request = require('request');
let app = express();
const {jsdom}=require('jsdom');

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
})


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

app.get('/add_project', function(req, res) {
	var title=req.query.title;
	var description=req.query.description;
  var skills=req.query.skills;
	var interest=req.query.interests;
	var link=req.query.link;
	var user=req.query.user;
	var psswd=req.query.password;
	res.render('userAdd',{
		my_title:"Add a Project"
	});
})

app.get('/add_project/submit', function(req, res) {
	var titleIn=req.query.title;
	var descriptionIn=req.query.description;
  var skillsIn=req.query.skills
	var interestsIn=req.query.interests
	var linkIn=req.query.link;
	var userIn=req.query.user;
	var psswdIn=req.query.password;
	//var funs2 = require('./Scripts/userAdd.js');
	if (!(titleIn=='' || descriptionIn=='' || skillsIn==undefined || interestsIn==undefined)){
		//skillsIn.map(Number);
		//interestsIn.map(Number);
		//console.log(titleIn,descriptionIn,skillsIn,interestsIn,linkIn);

		var insert_statement = "INSERT INTO project_traits(title,description,skills,interests,link) VALUES('"+titleIn+"','"+descriptionIn+"','"+'{'+skillsIn+'}'+"','"+'{'+interestsIn+'}'+"','"+linkIn+"');";
		db.any(insert_statement)
	        .then(function (rows) {
	            res.render('userAdd',{
					my_title: "Submitted",
				})

	        })
	        .catch(function (err) {
	            // display error message in case an error
	            console.log('error', err); //if this doesn't work for you replace with console.log
	            res.render('userAdd', {
	                title: 'add_project',
	            })
	        })
	}
	else{
		console.log("Invalid Submission Attempt, All Required Fields Must be Occupied");
		res.render('userAdd',{
		my_title: "Invalid Submission Attempt",
})
	}

})


app.listen(3000);
console.log('3000 is the magic port');
