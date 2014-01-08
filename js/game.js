var played_cards = new Array();
var current_white_cards = new Array();

function startGame()
{
	for(var i = 0; i < players.length; i++)
	{
		var cards = white_cards.drawCards(6);
		players[i].cards = cards;
	}

	$("#setup").hide();
	newRound();
	$("#game").show();
	stopLoading();
}

function setWhiteCards(cards)
{
	$("#white_cards").html('');
	
	for(var i = 0; i < cards.length; i++)
	{
		var card = "<div class='card'>" + cards[i] + "<button onclick='playCard(" + i + ")'>Play</button></div>";
		$("#white_cards").append(card);
	}
	
	current_white_cards = cards;
}

function playCard(number)
{
	var card = players[cur_white_player].cards[number];
	players[cur_white_player].playCard(number);
	players[cur_white_player].addCard(white_cards.drawCard());

	played_cards.push({
		card : card,
		player : cur_white_player
	});
	
	cur_white_player++;
	
	if(cur_white_player >= players.length)
	{
		cur_white_player = 0;
	}
	
	if(cur_white_player == cur_black_player)
	{
		startSelect();
		return;
	}
	
	setWhiteCards(players[cur_white_player].cards);
	pass(players[cur_white_player]);
}

function startSelect()
{
	$("#white_cards").html('');
	
	for(var i = 0; i < played_cards.length; i++)
	{
		var card = "<div class='card'>" + played_cards[i].card + "<button onclick='select(" + played_cards[i].player + ")'>Select</button></div>";
		$("#white_cards").append(card);
	}
	
	pass(players[cur_black_player]);
}

function select(player)
{
	players[player].score++;
	
	cur_black_player++;
	
	if(cur_black_player >= players.length)
	{
		cur_black_player = 0;
	}
	
	cur_white_player = cur_black_player + 1;
	
	if(cur_white_player >= players.length)
	{
		cur_white_player = 0;
	}
	
	win(players[player]);
}

function newRound()
{
	$("#win").hide();
	pass(players[cur_white_player]);
	$("#black_card").text(black_cards.drawCard());
	setWhiteCards(players[cur_white_player].cards);
	played_cards = new Array();
}

function win(player)
{
	$("#winner").text(player.name);
	$("#win").show();
}

function closeScore()
{
	$("#score_board").hide();
}

function showScore()
{
	var table = "<table>";
	
	for(var i = 0; i < players.length; i++)
	{
		var player = players[i];
		
		table += "<tr><td>" + player.name + "</td><td>" + player.score + "</td></tr>";
	}
	
	table += "</table>";
	
	$("#scores").html(table);
	$("#score_board").show();
}