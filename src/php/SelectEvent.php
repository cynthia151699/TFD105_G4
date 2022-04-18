<?php

       include("Connection.php");
       //---------------------------------------------------

       //建立SQL語法 //limit: 1不要在fetch改
       $sql = "SELECT * FROM G4.EXHIBITION";


       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       //$pdo = getConn("1");
       $statement = $link->query($sql);

       //抓出全部且依照順序封裝成一個二維陣列 //fetchColumn()
       $data = $statement->fetchAll();

    //抓出全部且依照順序封裝成一個二維陣列
    //$data = $statement->fetchAll(PDO::FETCH_ASSOC);

       //print_r($data);

    echo json_encode($data); //以下二維陣列不需要,給js跑迴圈驗證,加密

?>