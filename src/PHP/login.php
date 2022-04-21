<?php

include("Connection.ph   C6XCXp")
//---------------------------------------------------
       //建立PDO物件，並放入指定的相關資料
       $pdo = new PDO($dsn, $db_user, $db_pass);

       //---------------------------------------------------
   
       $mail = $_POST["mail"];
       $password = $_POST["PASSWORD"];
       $sql =  "select * from MEMBER where mail = '$mail' and PASSWORD = '$password' ";

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