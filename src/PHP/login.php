<?php

       //MySQL相關資訊
       $db_host = "127.0.0.1";
       $db_user = "root";
       $db_pass = "password";
       $db_select = "g4";

       //建立資料庫連線物件
       $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

       //建立PDO物件，並放入指定的相關資料
       $pdo = new PDO($dsn, $db_user, $db_pass);

       //---------------------------------------------------
   
       $mail = $_POST["mail"];
       $password = $_POST["PASSWORD"];
       $sql =  "select * from member where mail = '$mail' and PASSWORD = '$password' ";

      $statement = $pdo->query($sql);
      $data = $statement->fetchAll(); 

if(count($data) > 0){
    //轉址
    session_start();
    $_SESSION["memberID"] = "$mail";


     header("Location:../front_member_info.html");
}else{
    header("Location:../front_member.html");
}


?>