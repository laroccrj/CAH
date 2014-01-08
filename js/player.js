function player(name)
{
	this.name = name;
	this.cards = new Array();
	this.score = 0;
	
	this.playCard = playCard;
	function playCard(card)
	{
		this.cards.splice(card, 1);
	}
	
	this.addCard = addCard;
	function addCard(card)
	{
		this.cards.push(card);
	}
}

function pass(player)
{
	$("#pass_to").text(player.name);
	$("#pass").show();
}

function passed()
{
	$("#pass").hide();
}