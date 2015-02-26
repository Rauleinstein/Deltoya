<?php
 header('Access-Control-Allow-Origin: *'); 
$tabla = "deltoya";
$nombre = $_POST["name"];
$numero = $_POST["whats"];

$mysqli = mysqli_connect("mysql.hostinger.es", "u563775922_ya", "deltoya", "u563775922_delto");
if (mysqli_connect_errno($mysqli)) {
    echo "Fallo al contenctar a MySQL: " . mysqli_connect_error();
}

// Create database
$sql = "DELETE FROM " . $tabla ." WHERE nombre='".$nombre."';";
if (mysqli_query($mysqli, $sql)) {
    echo "Has salido :(";
} else {
	echo $sql;
    echo "Error: " . mysqli_error($mysqli);
}

die;