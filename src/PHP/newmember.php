<?php

include("Connection.php")
//---------------------------------------------------

       //建立PDO物件，並放入指定的相關資料
       $pdo = new PDO($dsn, $db_user, $db_pass);

       //---------------------------------------------------
       $mail = $_POST["mail"];
       $PASSWORD = $_POST["PASSWORD"];
       $NAME = $_POST["NAME"];
       $PHONE = $_POST["PHONE"];

       //建立SQL
       $sql = "INSERT INTO MEMBER(mail, PASSWORD, NAME, PHONE, DATE) VALUES
       ('$mail', '$PASSWORD', '$NAME', '$PHONE', NOW())";

       //執行
       $pdo->exec($sql);


       session_start();
       $_SESSION["memberID"] = "$mail";
       header("Location:../front_member_info.html");
?>