<?php

       include("Connection.php");

       //---------------------------------------------------

       //建立SQL語法
       $sql = "SELECT * FROM NEWS WHERE NEWS_STATUS ='開放'";     

       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       // $pdo = getConn("1");
       // $statement = getConn("1")->query($sql);
       $statement = $link->query($sql);

       //抓出全部且依照順序封裝成一個二維陣列
       $data = $statement->fetchAll();

       // print_r($data);

       echo json_encode($data);

       
      
?>