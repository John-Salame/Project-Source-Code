console.log("Loaded search.js");

//https://stackoverflow.com/questions/54516373/how-to-call-javascript-functions-of-external-files-from-ejs-template
//exports = module.exports = {};

//GLOBAL VARIABLES
var NUM_COLS = 2;




//Function headers are here. I can't have them uncommented because JS doesn't like headers.
/*
//these 3 functions are not implemented, and the arguments may not be final.
function load_recommended(); //calls load_results with query results based on recommendations.
function search(form_data); //uses form data and calls load_results with query results
function load_results(query_results); //take in query, populate Project object, call populate_field.
//Object to hold info about a project
function Project(title, description, skills, interests, link);
//the functions below are implemented:
function load_template(project); //open a separate page
function create_card(project); //for real program and for testing. Take in a project object.
function load_test(); //for testing, populate a predefined set of project objects.
function populate_field(results); //takes results as an array of project objects (for testing.
*/


//search_matches is how many search terms match the project data
function Project(id, title, description, skills, interests, link, search_matches)
{
	this.id = id;
	this.title = title;
	this.description = description;
	this.skills = skills;
	this.interests = interests;
	this.link = link;
	this.search_matches = search_matches;
}


//INSERT INTO project_traits(title, description, skills, interests, link) 
//VALUES('SQL Database', 'Learn simple SQL', 
//ARRAY [3, 9], ARRAY [3, 12], 'https://github.com/John-Salame/Project-Source-Code');
function load_test()
{
	console.log("Load test");
	//var nodesText = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6'];
	var proj1 = new Project(1, 'SQL Database', 'Learn simple SQL', ['Database 3', 'SQL 9'], ['Databases', 'Data Science'], 'https://github.com/John-Salame/Project-Source-Code', 3);
	var proj2 = new Project(2, 'Password Cracking', 'Use Python to automate password cracking in an SQL server.', ['SQL 9', 'Password Cracking 15', 'Python 20'], ['Ethical Hacking 9'], '', 2);
	var proj3;
	var proj4;
	var projects = [proj1, proj2, proj3, proj1, proj2];
	//populate_field(nodesText);
	populate_field(projects);
}

/*
exports.load_test = function()
{
	load_test();
}
*/


function load_template(project)
{
	console.log("load_template");
	//redirect to ProjectTemplate.html page
	location.href('../views/ProjectTemplate.html');
	var title = document.getElementById('project-title');
	title.innerHTML = project.title;
	var description = document.getElementById('project-description');
	description.innerHTML = project.description;
	var link = document.getElementById('project-link');
	link.href = project.link;
}


function create_card(project)
{
	console.log("Create card");
	if(project != null && project != undefined)
	{
		var card_form = document.createElement('form');
		card_form.setAttribute('action', '/info');
		card_form.setAttribute('method', 'GET');

		var card = document.createElement('div');
		card.classList.add('card');
		
		//card.setAttribute('onclick', 'load_template(project)');
		//card.setAttribute('onclick', "location.href='../views/ProjectTemplate.html'");
		//later, this onclick will go to a more detailed page.

		var header = document.createElement('h3');
		header.classList.add('card-header');
		header.innerHTML = "Project ID: " + project.id;

		var projid = document.createElement('input');
		projid.setAttribute('type', 'text');
		projid.setAttribute('name', 'projid');
		projid.setAttribute('value', project.id);
		projid.setAttribute('readonly', true);
		projid.setAttribute('hidden', true);

		var card_body = document.createElement('div');
		card_body.classList.add('card-body');

		var card_title = document.createElement('h4');
		card_title.classList.add('card-title');
		card_title.innerHTML = project.title;

		var description = document.createElement('h6');
		description.classList.add('card-subtitle');
		description.classList.add('mb-2'); //margin below
		description.classList.add('text-secondary');
		description.innerHTML = project.description;

		var list_head = document.createElement('ul');
		list_head.classList.add('list-group');
		list_head.classList.add('list-group-flush');

		var skills = document.createElement('li');
		skills.classList.add('list-group-item');
		skills.innerHTML = "Skills: " + project.skills;

		var interests = document.createElement('li');
		interests.classList.add('list-group-item');
		interests.innerHTML = "Interests: " + project.interests;

		var matches = document.createElement('li');
		matches.classList.add('list-group-item');
		matches.innerHTML = "Search Result Matches: " + project.search_matches;

		link_btn = document.createElement('input');
		link_btn.classList.add('btn');
		link_btn.classList.add('btn-primary');
		link_btn.setAttribute('type', 'submit');
		link_btn.setAttribute('value', 'Go to Project');

		/*if(project.link == '')
		{
			link_btn.classList.add('btn-secondary');
			//link_btn.setAttribute('href', '#'); //don't give href
			link_btn.setAttribute('enabled', false);
			link_btn.innerHTML = "No Link Provided";
		}
		else
		{*/
			//link_btn.classList.add('btn-primary');
			//link_btn.setAttribute('href', 'info');
		//}


		//consider putting card_title in a card-header instead
		header.appendChild(projid);

		card_body.appendChild(card_title);
		card_body.appendChild(description);

		list_head.appendChild(skills);
		list_head.appendChild(interests);
		list_head.appendChild(matches);
		list_head.appendChild(link_btn); //link button

		card.appendChild(header);
		card.appendChild(card_body);
		card.appendChild(list_head);

		card_form.appendChild(card);
		return card_form;
	}
}


function populate_field(results)
{
	console.log("Populate field");
	var field = document.getElementById('card-field');
	var row;
	var col;
	var card;
	var count = 0;
	for(var i = 0; i < results.length; i++)
	{
		if(count % NUM_COLS == 0)
		{
			if(row != undefined)
			{
				field.appendChild(row);
				var br = document.createElement('br');
				field.appendChild(br);
			}
			row = document.createElement('div');
			row.classList.add('row');
		}

		card = create_card(results[i]); //create card

		if(card != null && card != undefined)
		{
			col = document.createElement('div');
			col.classList.add('col-sm-' + 12/NUM_COLS);
			col.appendChild(card);
			row.appendChild(col);
			count++;
		}
	}
	console.log("Count is " + count);

	//add the final row if it has anything in it
	if(row != undefined)
	{
		field.appendChild(row);
	}

} //end of populate

