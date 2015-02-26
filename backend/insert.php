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
$sql = "INSERT INTO " . $tabla ."(nombre,	numero) VALUES ('".$nombre."', '".$numero."');";
if (mysqli_query($mysqli, $sql)) {
    echo "Estás dentro del Deltoya, ahora a beber!";
} else {
    echo "Error: " . mysqli_error($mysqli);
}

die;