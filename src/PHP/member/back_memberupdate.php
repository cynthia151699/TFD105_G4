<?php

       include("../Connection.php");
       //---------------------------------------------------
       $member = json_decode(file_get_contents("php://input"), true);

       //建立SQL
       $sql = "UPDATE MEMBER
                     SET 
                     ID = :UP_MEMBER_ID,
                     mail = :UP_MEMBER_mail,
                     PASSWORD = :UP_MEMBER_PASSWORD,
                     NAME = :UP_MEMBER_NAME,
                     PHONE = :UP_MEMBER_PHONE,
                     DATE = :UP_MEMBER_DATE
                     WHERE 
                     ID = :UP_ID";
       // 包裝起來才可以使PHP 用bindValue
       $statement = $link->prepare($sql);

       $statement->bindValue(":UP_MEMBER_ID", $member["UP_ID"]);
       $statement->bindValue(":UP_MEMBER_mail", $member["UP_mail"]);
       $statement->bindValue(":UP_MEMBER_PASSWORD", $member["UP_PASSWORD"]);
       $statement->bindValue(":UP_MEMBER_NAME", $member["UP_NAME"]);
       $statement->bindValue(":UP_MEMBER_PHONE", $member["UP_PHONE"]);
       $statement->bindValue(":UP_MEMBER_DATE", $member["UP_DATE"]);
       $statement->bindValue(":UP_ID", $member["UP_ID"]);

       //執行
       
       $statement->execute();

       echo json_encode($member);
?>

