<?php

       include("../Connection.php");
       //---------------------------------------------------
       $ticket = json_decode(file_get_contents("php://input"), true);
       //echo json_encode($ticket);

       //建立SQL
       $sql = "UPDATE TICKET 
                     SET 
                     TICKET_NAME = :UP_TICKET_NAME,
                     TICKET_TYPE = :UP_TICKET_TYPE,
                     TICKET_PRICE = :UP_TICKET_PRICE,
                     TICKET_STATUS = :UP_TICKET_STATUS,
                     TICKET_DATE = :UP_TICKET_DATE
                     WHERE 
                     ID = :UP_ID";

       // 包裝起來才可以使PHP 用bindValue
       $statement = $link->prepare($sql);

       $statement->bindValue(":UP_TICKET_NAME", $ticket["UP_TICKET_NAME"]);
       $statement->bindValue(":UP_TICKET_TYPE", $ticket["UP_TICKET_TYPE"]);
       $statement->bindValue(":UP_TICKET_PRICE", $ticket["UP_TICKET_PRICE"]);
       $statement->bindValue(":UP_TICKET_STATUS", $ticket["UP_TICKET_STATUS"]);
       $statement->bindValue(":UP_TICKET_DATE", $ticket["UP_TICKET_DATE"]);
       $statement->bindValue(":UP_ID", $ticket["UP_ID"]);

       //執行
       $statement->execute();

       echo json_encode($ticket);
?>

