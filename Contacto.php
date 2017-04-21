<?php

$nombre=$_POST["name"];

$apellido=$_POTS["lastname"];

$asunto=$_POST["asunto"];

$correo=$_POST["email"];

$contenido=$_POST["message"];

$para="informacion.vertice@uabc.edu.mx";


$mensaje="

Nombre del remitente:".$nombre."
Apellido del remitente:".$apellido."
E-mail:".$correo."
Mensaje:".$contenido."
";

mail($para,$asunto,utf8_decode($mensaje));


header('Location: /#!/Contacto');
?>
