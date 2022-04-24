<?php
    include("Connection.php");

    session_start();
    $mail = $_SESSION["memberID"];
    $sql =  "select * from MEMBER where mail = '$mail'";

    $statement = $link->prepare($sql);
    $statement -> execute();
    $data = $statement->fetchAll();  
    $datajson = json_encode($data);
    
    echo $datajson;

?>