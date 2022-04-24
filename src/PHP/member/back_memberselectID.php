<?php

       //---------------------------------------------------
       include("../Connection.php");

       $event = json_decode(file_get_contents("php://input"), true); 

       //建立SQL語法
       $sql = "SELECT * FROM MEMBER WHERE ID = :id"; //冒號:自定義參數

       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       $statement = $link->prepare($sql); //準備未送出

       $statement->bindValue(":id", $event['memberId']);

       //執行
        $statement->execute();

        //抓出全部且依照順序封裝成一個二維陣列
       $data = $statement->fetchAll();

        echo json_encode($data);
        

?>