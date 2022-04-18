<?php

       include("Connection.php")
       //---------------------------------------------------

       //建立SQL
       $sql = "UPDATE member SET PWD = 'TFD123' WHERE Name = '王小明'";

       //執行
       $pdo->exec($sql);
       
       echo "更新成功";
?>