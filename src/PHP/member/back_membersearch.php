<?php

       include("../Connection.php");
       //---------------------------------------------------
       $member = json_decode(file_get_contents("php://input"), true);

       //建立SQL語法
       $sql = "SELECT * FROM MEMBER WHERE mail like ?"; //冒號:自定義參數

       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       //防護機制
       $statement = $link->prepare($sql); //準備未送出
       $statement->bindValue(1, '%'.$member['KEY'].'%'); //第二個參數變數跟值都可以
       $statement->execute(); //執行

       //抓出全部且依照順序封裝成一個二維陣列
       $data = $statement->fetchAll();

       if(count($data)>0){

       echo json_encode($data);
      
       };
              
        

?>