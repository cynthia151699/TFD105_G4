<?php

       include("../Connection.php");
       //---------------------------------------------------
       $event = json_decode(file_get_contents("php://input"), true);
       //echo json_encode($event);

       //建立SQL
       $sql = "UPDATE EXHIBITION 
                     SET 
                     EXHIBITION_STYLE_ID = :UP_EXHIBITION_STYLE_ID,
                     EXHIBITION_STYLE = :UP_EXHIBITION_STYLE,
                     EVENT_NAME = :UP_EVENT_NAME,
                     EVENT_EXHIBITION_DATE= :UP_EXHIBITION_DATE,
                     EXHIBITION_PIC = :UP_EXHIBITION_PIC,
                     EXHIBITION_CONTENT = :UP_EXHIBITION_CONTENT
                     WHERE 
                     ID = :UP_ID";

       // 包裝起來才可以使PHP 用bindValue
       $statement = $link->prepare($sql);

       $statement->bindValue(":UP_EXHIBITION_STYLE_ID", $event["UP_EXHIBITION_STYLE_ID"]);
       $statement->bindValue(":UP_EXHIBITION_STYLE", $event["UP_EXHIBITION_STYLE"]);
       $statement->bindValue(":UP_EVENT_NAME", $event["UP_EVENT_NAME"]);
       $statement->bindValue(":UP_EXHIBITION_DATE", $event["UP_EXHIBITION_DATE"]);
       $statement->bindValue(":UP_EXHIBITION_PIC", $event["UP_EXHIBITION_PIC"]);
       $statement->bindValue(":UP_EXHIBITION_CONTENT", $event["UP_EXHIBITION_CONTENT"]);
       $statement->bindValue(":UP_ID", $event["UP_ID"]);

       //執行
       $statement->execute();

       echo json_encode($event);
?>

