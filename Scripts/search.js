console.log("Loaded search.js");

function load_test()
{
	console.log("Load test");
	var nodesText = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6'];
	populate_field(nodesText);
}


function create_card(text)
{
	var card = document.createTextNode(text);
	return card;
}


function populate_field(results)
{
	console.log("Populate field");
	var field = document.getElementById('card-field');
	var row;
	var col;
	var card;
	for(var i = 0; i < results.length; i++)
	{
		if(i % 4 == 0)
		{
			if(row != undefined)
			{
				field.appendChild(row);
			}
			row = document.createElement('div');
			row.classList.add('row');
		}
		col = document.createElement('div');
		col.classList.add('col-sm-3');
		card = create_card(results[i]); //create card
		col.appendChild(card);
		row.appendChild(col);
	}

	//add the final row if it has anything in it
	if(row != undefined)
	{
		field.appendChild(row);
	}

} //end of populate