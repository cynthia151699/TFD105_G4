<?php
    include("./../Connection.php");

    $order = json_decode(file_get_contents("php://input"),true);
    //---------------------------------------------------

    //建立SQL語法
    $sql = "SELECT * FROM `ORDER` WHERE ID = :id ";    

    // 執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $link->prepare($sql);
    $statement->bindValue(":id", $order["orderId"]);
    $statement->execute();     
       
    $data = $statement->fetchAll();
    echo json_encode($data);
?>