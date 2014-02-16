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
	
	$type = $_GET["type"];
	$id = $_GET["id"];
	
	if($type == "white")
	{
		$whiteColl->remove(array("_id" => new MongoId($id)));
	}
	else
	{
		$blackColl->remove(array("_id" => new MongoId($id)));
	}
	
	header("Location: list.php");