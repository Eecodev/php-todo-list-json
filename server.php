<?php

// leggo il file todo-list.json e lo metto in una variabile come stringa
$filecontent = file_get_contents("todo-list.json");

// var_dump($filecontent);

// decodifico la stringa in un array php
$list = json_decode($filecontent, true);

if(isset($_POST['addtask'])){
    $newtask = 
    [
        'text'=> $_POST['addtask'],
        'done'=> false
    ];
    array_push($list, $newtask);
    file_put_contents('todo-list.json', json_encode($list));
}

if(isset($_POST['deletetask'])){
    $index = $_POST['deletetask'];
    array_splice($list, $index,1);
    file_put_contents('todo-list.json', json_encode($list));
}
//var_dump($list);




// $list[] = 'Vue';
// $newContent = json_encode($list);
// file_put_contents('todo-list.json', $newContent);

header('Content-Type: application/json');
// stampo la lista in json
echo json_encode($list);
?>