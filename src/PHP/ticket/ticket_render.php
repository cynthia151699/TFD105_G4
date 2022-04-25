<?php

        include("./../Connection.php");
       //---------------------------------------------------

       $ticket = json_decode(file_get_contents("php://input"), true);

       //建立SQL語法
       $sql = "
            SELECT * FROM 
                    TICKET 
            WHERE
                    TICKET_TYPE,
                    TICKET_DATE,
                    TICKET_PRICE
        ";

       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       $statement = $link->prepare($sql); //準備未送出

       //執行
        $statement->execute();

    
        $data = $statement->fetchAll(PDO::FETCH_ASSOC);


        echo json_encode($data);
        

?>