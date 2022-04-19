<?php

       //MySQL相關資訊
       $db_host = "127.0.0.1";
       $db_user = "root";
       $db_pass = "password";
       $db_select = "g4";

       //建立資料庫連線物件
       $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

       //建立PDO物件，並放入指定的相關資料
       $pdo = new PDO($dsn, $db_user, $db_pass);

       //---------------------------------------------------
   
    
       session_start();
 
        $mail = $_SESSION["memberID"];
        $sql =  "select * from member where mail = '$mail'";
        $statement = $pdo->query($sql);
        
        $data = $statement->fetchAll();

        $data_json_en = json_encode($data);
        echo $data_json_en;



?>