var played_cards = new Array();
var current_white_cards = new Array();

function startGame()
{
	for(var i = 0; i < players.length; i++)
	{
		var cards = white_cards.drawCards(10);
		players[i].cards = cards;
	}

	$("#setup").hide();
	newRound();
	updateScore();
	$("#game").show();
	stopLoading();
}

function setWhiteCards(cards)
{
	$("#white_cards").html('');
	
	for(var i = 0; i < cards.length; i++)
	{
		var card = "<div class='card'>" + cards[i] + "<div class='button' onclick='playCard(" + i + ")'>Play</div><image src='images/WhiteCard.png'></div>";
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
	
	white_cards.discard(card);
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
	shufflePlayed();
	$("#white_cards").html('');
	
	for(var i = 0; i < played_cards.length; i++)
	{
		var card = "<div class='card'>" + played_cards[i].card + "<div class='button' onclick='select(" + played_cards[i].player + ")'>Select</div><image src='images/WhiteCard.png'></div>";
		$("#white_cards").append(card);
	}
	
	pass_select(players[cur_black_player]);
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
	
	updateScore();
	win(players[player]);
}

function newRound()
{
	$("#win").hide();
	pass(players[cur_white_player]);
	var card = black_cards.drawCard();
	$("#black_card_txt").text(card);
	black_cards.discard(card);
	setWhiteCards(players[cur_white_player].cards);
	played_cards = new Array();
}

function win(player)
{
	$("#winner").text(player.name);
	$("#win").show();
}

function updateScore()
{
	var table = "<table>";
	
	for(var i = 0; i < players.length; i++)
	{
		var player = players[i];
		
		table += "<tr><td>" + player.name + ":</td><td>" + player.score + "</td></tr>";
	}
	
	table += "</table>";
	
	$("#scores").html(table);
}

function scoreboard()
{
	var scores = $("#scores");
	
	if(scores.is(":visible"))
	{
		scores.hide();
		$("#score_board_arrow").attr('src', 'images/downArrow.png');
	}
	else
	{
		scores.show();
		$("#score_board_arrow").attr('src', 'images/upArrow.png');
	}
}

function shufflePlayed()
{
	var newSet = new Array();
	var num = played_cards.length;
	
	for(var i = 0; i < num; i++)
	{
		var ran = Math.floor(Math.random() * played_cards.length);
		newSet.push(played_cards[ran]);
		played_cards.splice(ran, 1);
	}
	
	played_cards = newSet;
}