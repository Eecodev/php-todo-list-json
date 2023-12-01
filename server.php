<?php

// leggo il file todo-list.json e lo metto in una variabile come stringa
$filecontent = file_get_contents("todo-list.json");

// var_dump($filecontent);

// decodifico la stringa in un array php
$list = json_decode($filecontent, true);


header('Content-Type: application/json');

// stampo la lista in json
echo json_encode($list);
?>