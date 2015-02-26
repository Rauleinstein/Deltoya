<?php
 header('Access-Control-Allow-Origin: *'); 
$tabla = "deltoya";

$mysqli = mysqli_connect("mysql.hostinger.es", "u563775922_ya", "deltoya", "u563775922_delto");
if (mysqli_connect_errno($mysqli)) {
    echo "Fallo al contenctar a MySQL: " . mysqli_connect_error();
}

// Create database
$sql = "SELECT * FROM " . $tabla;
if ($coordenadas = mysqli_query($mysqli, $sql)) {
    while ($coord = mysqli_fetch_array($coordenadas, MYSQLI_ASSOC)) {
    	$coords[] = $coord;
    }
	$json_coord = json_encode($coords);
	echo $json_coord;

} else {
    echo "Error retrieving the data: " . mysqli_error($mysqli);
}

die;