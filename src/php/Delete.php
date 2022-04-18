<?php

       include("Connection.php")
       //---------------------------------------------------

       //建立SQL
       $sql = "DELETE FROM member WHERE Name = '王小明'";

       //執行
       $pdo->exec($sql);

       echo "刪除成功!";
?>