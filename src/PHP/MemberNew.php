<?php

  include("./Connection.php");

  //---------------------------------------------------
   $member = json_decode(file_get_contents("php://input"), true);
  //---------------------------------------------------
  $mail = $_POST["mail"];
  $PASSWORD = $_POST["PASSWORD"];
  $NAME = $_POST["NAME"];
  $PHONE = $_POST["PHONE"];

  //建立SQL
  $sql = "INSERT INTO MEMBER(mail, PASSWORD, NAME, PHONE, DATE) VALUES
  ('$mail', '$PASSWORD', '$NAME', '$PHONE', NOW())";

  $statement = $link->prepare($sql);
  $statement -> execute();
  $data = $statement->fetchAll(); 


  session_start();
  $_SESSION["memberID"] = "$mail";
  header("Location:../front_member_info.html");

?>