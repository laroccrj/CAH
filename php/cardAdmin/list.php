<?php
	
	session_start();
	
	if(!ISSET($_SESSION["loggedIn"]))
	{
		header("Location: login.php");
	}
	
	$conn = new Mongo();
	$db = $conn->CAH;
	$whiteColl = $db->white;
	$whiteCards = $whiteColl->find();
	$blackColl = $db->black;
	$blackCards = $blackColl->find();
	
?>
<h1>Black</h1>
<?php
	
	foreach($blackCards as $card)
	{
		echo '<div style="border:1px solid #000;">';
		echo utf8_decode($card["text"]);
		echo '<br />';
		echo '<a href="deleteCard.php?id='.$card["_id"].'&type=black">Delete</a>';
		echo '<br />';
		echo '<form action="editCard.php" method="post">';
		echo '<input type="hidden" name="type" value="black">';
		echo '<input type="hidden" name="id" value="'.$card["_id"].'">';
		echo '<input type="text" name="text">';
		echo '<input type="submit" value="Update">';
		echo '</form>';
		echo '</div>';
	}
	
?>
<h1>White</h1>
<?php
	
	foreach($whiteCards as $card)
	{
		echo '<div style="border:1px solid #000;">';
		echo utf8_decode($card["text"]);
		echo '<br />';
		echo '<a href="deleteCard.php?id='.$card["_id"].'&type=white">Delete</a>';
		echo '<br />';
		echo '<form action="editCard.php" method="post">';
		echo '<input type="hidden" name="type" value="white">';
		echo '<input type="hidden" name="id" value="'.$card["_id"].'">';
		echo '<input type="text" name="text">';
		echo '<input type="submit" value="Update">';
		echo '</form>';
		echo '</div>';
	}
	
?>