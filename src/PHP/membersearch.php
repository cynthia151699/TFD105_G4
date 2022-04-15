<?php

       $db_host = "127.0.0.1";
       $db_user = "root";
       $db_pass = "password";
       $db_select = "G4";

       $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

       $pdo = new PDO($dsn, $db_user, $db_pass);

       $sql = "SELECT * FROM member";
      
       $statement = $pdo->query($sql);
       $data = $statement->fetchAll();


        $data_json_en = json_encode($data);
        echo $data_json_en;


?>