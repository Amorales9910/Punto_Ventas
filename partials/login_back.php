<?php
$varusuario,$varpassword ;
$varusuario = $_POST['usuario'] ;
$varpassword = $_POST['password'] ;
//creamos un arreglo para la respuesta 
$respuesta = array(
    'mensaje' => 'peticion correcta',
    'usuario' => $varusuario,

);
die(json_encode($respuesta));