<?php

       include("../Connection.php");
       $news = json_decode(file_get_contents("php://input"),true);
       //---------------------------------------------------

       //建立SQL語法
       $sql = "SELECT * FROM NEWS WHERE ID = :id ";    

       // 執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       // $pdo = getConn("1");
       // $statement = getConn("1")->query($sql);
       // $statement = $link->query($sql);


       $statement = $link->prepare($sql);
       $statement->bindValue(":id", $news["newsId"]);
       // print_r($data);
       $statement->execute();     
       
       $data = $statement->fetchAll();
       echo json_encode($data);
      
?>