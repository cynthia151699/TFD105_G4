<?php
    include("../Connection.php");

    //---------------------------------------------------
     $member = json_decode(file_get_contents("php://input"), true);


       //---------------------------------------------------
       session_start();
       $mail = $_SESSION["memberID"];
       $sql = "UPDATE MEMBER SET PASSWORD = :PASSWORD,  PHONE = :PHONE WHERE mail= :mail";
       $statement = $link->prepare($sql);
       $statement->bindValue(":mail", $mail);
       $statement->bindValue(":PASSWORD", $member["PASSWORD"]);
       $statement->bindValue(":PHONE", $member["PHONE"]);
       $statement->execute();
       header("Location:../../front_member_info.html");
 ?>
