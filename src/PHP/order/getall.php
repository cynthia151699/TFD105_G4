<?php

// 抓取資料庫所有的資料
include("Connection.php");

    $sql = "select * from `ORDER` order by id";
    
    $statement = $pdo->prepare($sql);
    $statement->execute();
    echo json_encode($statement->fetchAll());

?>