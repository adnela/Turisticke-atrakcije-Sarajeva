<?php

session_start();
if(!isset($_SESSION["userLogged"] || $_SESSION["userLogged"]=="0")
{
	header("Location:TuristickeAtrakcijeSarajeva.html");
	exit;
}
date_default_timezone_set('Europe/Sarajevo');

function SpasiNovost()
{
	$path= "novosti.csv";
	$file= fopen($path,"a");
	$naslov= $_POST["naslov"];
	$sadrzaj=$_POST["sadrzaj"];
	$datum= date("d.m.Y H:i:s");
	$text=$naslov.",".$sadrzaj.",".$datum.PHP_EOL;
	fwrite($file, $text);
	fclose($file);
}

if(isset($_POST["sacuvaj"]))
{
	SpasiNovost();
	header("Location:TuristickeAtrakcijeSarajeva.html");
}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Dobrodosla mala slatka</title>
	<link rel="stylesheet" type="text/css" href="stil.css">

  <META http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
<h4 class="logout"><a href = "logout.php" title = "Logout">Logout</a></h4>
<form>
<label>Naslov</label><br>
<input type="text" name="naslov"> <br>
<label>Tekst novosti</label><br>
<textarea rows="5" cols="40"></textarea><br>
<input type="submit" name="gotovo" value="Gotovo"><br>
<body>
</body>
</html>
