var players = new Array();
var cur_black_player = 0;
var cur_white_player = 1;
var white_cards;
var black_cards;

function addPlayer()
{
	$('#player_list_setup div:last').after('<div><input type="text" class="player_name"></div>');
}

function setupGame()
{
	startLoading();

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
	getBlack();
}

function getWhite()
{
	$.ajax({
	  dataType: "json",
	  url: "php/getWhite.php",
	  success: setWhite
	});
}

function setWhite(data)
{
	white_cards = new deck(data);
	
	if(black_cards)
	{
		startGame();
	}
}

function getBlack()
{
	$.ajax({
	  dataType: "json",
	  url: "php/getBlack.php",
	  success: setBlack
	});
}

function setBlack(data)
{
	black_cards = new deck(data);
	
	if(white_cards)
	{
		startGame();
	}
}