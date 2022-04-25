<?php

    include("../Connection.php");
    //---------------------------------------------------

    $discount = json_decode(file_get_contents("php://input"), true);

    $sql = "
        SELECT * FROM 
            DISCOUNT 
        WHERE 
            CODE like ?"; //冒號:自定義參數

    $statement = $link->prepare($sql); //準備未送出
    $statement->bindValue(1, '%'.$discount['KEY'].'%'); //第二個參數變數跟值都可以
    $statement->execute(); //執行

    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    
    if(count($data)>0){

    echo json_encode($data);

    };
        

?>