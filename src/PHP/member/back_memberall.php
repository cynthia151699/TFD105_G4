<?php

        include("../Connection.php");
       //---------------------------------------------------
       $member = json_decode(file_get_contents("php://input"), true);

       //建立SQL語法
       $sql = "SELECT * FROM MEMBER";
      

       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       $statement = $link->query($sql);

       //抓出全部且依照順序封裝成一個二維陣列
       $data = $statement->fetchAll();


        $data_json_en = json_encode($data);
        echo $data_json_en;
        
?>