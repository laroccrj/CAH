function deck(cards)
{
	this.cards = cards;
	this.discarded = new Array();
	
	this.drawCard = drawCard;
	function drawCard()
	{
		if(this.cards.length <= 0)
		{
			this.cards = this.discarded;
			this.discarded = new Array();
		}
		
		var rand = Math.floor(Math.random() * this.cards.length);
		var card = this.cards[rand];
		this.cards.splice(rand, 1);
		
		return card;
	}
	
	this.drawCards = drawCards;
	function drawCards(number)
	{
		var cards = new Array();
		
		for(var i = 0; i < number; i++)
		{
			cards.push(this.drawCard());
		}
		
		return cards;
	}
}