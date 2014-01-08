<?php

	$conn = new Mongo();
	$db = $conn->CAH;
	$coll = $db->black;

	$file = fopen("black.csv", "r");
	while(!feof($file)){
		$line = fgets($file);
		$coll->insert(array("text" => utf8_encode(trim($line))));
	}
	fclose($file);
	
	$coll = $db->white;
	$file = fopen("white.csv", "r");
	while(!feof($file)){
		$line = fgets($file);
		$coll->insert(array("text" => utf8_encode(trim($line))));
	}
	fclose($file);