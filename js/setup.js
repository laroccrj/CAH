var players = new Array();

function addPlayer()
{
	$('#player_list_setup div:last').after('<div><input type="text" class="player_name"></div>');
}

function startGame()
{
	var in_players = $('#player_list_setup .player_name');
	
	for(var i = 0; i < in_players.length; i++)
	{
		if(in_players[i].value.trim() != "")
		{
			var new_player = new player(in_players[i].value);
			players.push(new_player);
		}
	}
	
	if(players.length < 2)
	{
		alert("2 or more players are required to play");
		players = new Array();
		return;
	}
	
	getWhite();
}

function getWhite()
{
	$.ajax({
	  dataType: "json",
	  url: "http://rlarocca.com/CAH/php/getWhite.php",
	  success: setWhite
	});
}

function setWhite(data)
{
	console.log(data);
}