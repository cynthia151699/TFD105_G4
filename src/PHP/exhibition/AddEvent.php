<?php

    include("../Connection.php");
    //---------------------------------------------------
    $event = json_decode(file_get_contents("php://input"), true);
    //echo json_encode($event);

    //建立SQL
    $sql = "insert into EXHIBITION(EXHIBITION_STYLE,EVENT_NAME,EXHIBITION_DATE,EXHIBITION_PIC,EXHIBITION_CONTENT,EXHIBITION_CREATE)
    values (:EXHIBITION_STYLE,:EVENT_NAME,:EXHIBITION_DATE,:EXHIBITION_PIC,:EXHIBITION_CONTENT,NOW());";

    // 包裝起來才可以使PHP 用bindValue
    $statement = $link->prepare($sql);

    // 下列都是自定義PHP變數  , 不然看面資料庫看不懂 :price
    $statement->bindValue(":EXHIBITION_STYLE", $event["EXHIBITION_STYLE"]);
    $statement->bindValue(":EVENT_NAME", $event["EVENT_NAME"]);
    $statement->bindValue(":EXHIBITION_DATE", $event["EXHIBITION_DATE"]);
    $statement->bindValue(":EXHIBITION_PIC", $event["EXHIBITION_PIC"]);
    $statement->bindValue(":EXHIBITION_CONTENT", $event["EXHIBITION_CONTENT"]);

    //執行
    $statement->execute();

    echo json_encode($event);

?>