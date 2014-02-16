<?php
	
	session_start();
	
	if(ISSET($_SESSION["loggedIn"]))
	{
		header("Location: list.php");
	}
	
	if(ISSET($_POST["password"]))
	{
		if($_POST["password"] == "password")
		{
			$_SESSION["loggedIn"] = true;
			header("Location: list.php");
		}
	}
?>
<form action="" method="post">
	Password:
	<input type="password" name="password">
	<br />
	<input type="submit" value="Login">
</form>