<?php

	$conn = new Mongo();
	$db = $conn->CAH;
	$coll = $db->black;
	
	$cards = array();
	
	foreach($coll->find() as $card)
	{
		array_push($cards, $card["text"]);
	}
	
	echo json_encode($cards);
	
	$conn->close();