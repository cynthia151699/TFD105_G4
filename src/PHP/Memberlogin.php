<?php

        include("./Connection.php");

       //---------------------------------------------------
        $member = json_decode(file_get_contents("php://input"), true);

    
        $mail = $_POST["mail"];
        $password = $_POST["PASSWORD"];
        $sql =  "select * from MEMBER where mail = '$mail' and PASSWORD = '$password'";
      

        $statement = $link->prepare($sql);
        $statement -> execute();
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