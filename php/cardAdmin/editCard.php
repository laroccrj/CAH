<?php

	session_start();
	
	if(!ISSET($_SESSION["loggedIn"]))
	{
		header("Location: login.php");
	}
	
	$conn = new Mongo();
	$db = $conn->CAH;
	$whiteColl = $db->white;
	$blackColl = $db->black;
	
	$type = $_POST["type"];
	$id = $_POST["id"];
	$text = $_POST["text"];
	
	if($type == "white")
	{
		$whiteColl->update(array("_id" => new MongoId($id)), array('$set' => array("text" => utf8_encode($text))));
	}
	else
	{
		$blackColl->update(array("_id" => new MongoId($id)), array('$set' => array("text" => utf8_encode($text))));
	}
	
	header("Location: list.php");