console.log("Loaded search.js");


//GLOBAL VARIABLES
var NUM_COLS = 3;




//Function headers are here. I can't have them uncommented because JS doesn't like headers.
/*
//these 3 functions are not implemented, and the arguments may not be final.
function load_recommended(); //calls load_results with query results based on recommendations.
function search(form_data); //uses form data and calls load_results with query results
function load_results(query_results); //loads the suggestions / search results onto the screen.

//Object to hold info about a project
function Project(title, description, skills, interests, link);

//the functions below are implemented:
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
	var projects = [proj1, proj2, proj3, proj4];
	//populate_field(nodesText);
	populate_field(projects);
}


function create_card(project)
{
	console.log("Create card");
	if(project != null && project != undefined)
	{
		var card = document.createElement('div');
		card.classList.add('col');
		card.classList.add('card');

		var card_body = document.createElement('div');
		card_body.classList.add("card-body");
		card_body.setAttribute('onclick', '#');
		//later, this onclick will go to a more detailed page.

		var card_title = document.createElement('h4');
		card_title.classList.add("card-title");
		card_title.innerHTML = project.title;

		var description = document.createElement('h6');
		description.classList.add('card-subtitle');
		description.innerHTML = project.description;

		var skills = document.createElement('p');
		skills.classList.add('card-text');
		skills.innerHTML = "Skills: " + project.skills;

		var interests = document.createElement('p');
		interests.classList.add('card-text');
		interests.innerHTML = "Interests: " + project.interests;

		var matches = document.createElement('p');
		matches.classList.add('card-text');
		matches.innerHTML = "Search Result Matches: " + project.search_matches;


		link_btn = document.createElement('a');
		link_btn.classList.add('btn');
		if(project.link == '')
		{
			link_btn.classList.add('btn-secondary');
			//link_btn.setAttribute('href', '#'); //don't give href
			link_btn.setAttribute('enabled', false);
			link_btn.innerHTML = "No Link Provided";
		}
		else
		{
			link_btn.classList.add('btn-primary');
			link_btn.setAttribute('href', project.link);
			link_btn.setAttribute('target', '_blank');
			link_btn.innerHTML = "Go to Project";
		}


		//consider putting card_title in a card-header instead
		card_body.appendChild(card_title);
		card_body.appendChild(description);
		card_body.appendChild(skills);
		card_body.appendChild(interests);
		card_body.appendChild(matches);
		card_body.appendChild(link_btn); //link button
		card.appendChild(card_body);
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