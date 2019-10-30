console.log("Loaded search.js");


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
function Project(title, description, skills, interests, link, search_matches)
{
	this.title = title;
	this.description = description;
	this.skills = skills;
	this.interests = interests;
	this.link = link;
	this.search_matches = search_matches;
}


function load_test()
{
	console.log("Load test");
	//var nodesText = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6'];
	var proj1 = new Project('SQL Database', 'Learn simple SQL', [1,2,3], [3,5], 'https://github.com/John-Salame/Project-Source-Code', 3);
	var proj2 = new Project('Java Battleship', 'Learn classes and inheritence while making the game "Battleship."', [4,5], [6], '', 2);
	var proj3;
	var proj4;
	var projects = [proj1, proj2, proj3, proj1, proj2];
	//populate_field(nodesText);
	populate_field(projects);
}


function load_template(project)
{
	console.log("load_template");
	//redirect to ProjectTemplate.html page
	location.href('../Pages/ProjectTemplate.html');
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
		var card = document.createElement('div');
		card.classList.add('col');
		card.classList.add('card');
		//card.setAttribute('onclick', 'load_template(project)');
		card.setAttribute('onclick', "location.href='../Pages/ProjectTemplate.html'");
		//later, this onclick will go to a more detailed page.

		var header = document.createElement('div');
		header.classList.add('card-header');

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

		link_btn = document.createElement('a');
		link_btn.classList.add('btn');
		/*if(project.link == '')
		{
			link_btn.classList.add('btn-secondary');
			//link_btn.setAttribute('href', '#'); //don't give href
			link_btn.setAttribute('enabled', false);
			link_btn.innerHTML = "No Link Provided";
		}
		else
		{*/
			link_btn.classList.add('btn-primary');
			link_btn.setAttribute('href', "ProjectTemplate.html");
			//link_btn.setAttribute('target', '_blank');
			link_btn.innerHTML = "Go to Project";
		//}


		//consider putting card_title in a card-header instead
		header.appendChild(card_title);
		header.appendChild(description);

		list_head.appendChild(skills);
		list_head.appendChild(interests);
		list_head.appendChild(matches);
		list_head.appendChild(link_btn); //link button

		//card_body.appendChild(list_head);
		card.appendChild(header);
		card.appendChild(list_head);
		//card.appendChild(card_body);
		return card;
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

