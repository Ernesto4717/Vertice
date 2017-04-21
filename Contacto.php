<?php

$nombre=$_POST["name"];

$apellido=$_POTS["lastname"];

$asunto=$_POST["asunto"];

$correo=$_POST["email"];

$contenido=$_POST["message"];

$para="ivan_r.h@hotmail.com";


$mensaje="

Nombre del remitente:".$nombre."
E-mail:".$correo."
Mensaje:".$contenido."
";

mail($para,$asunto,utf8_decode($mensaje));


header('Location: Contacto.html');
?>
