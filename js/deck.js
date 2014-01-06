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
		
		for(var i = rand; i < this.cards.length - 1; i++)
		{
			this.cards[i] = this.cards[i + 1];
		}
		
		return card;
	}
}