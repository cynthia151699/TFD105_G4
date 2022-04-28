<?php
    include("Connection.php");

    session_start();
    $mail = $_SESSION["memberID"];

    if (strlen($mail) > 0){
    header("Location:../front_login.html");
    }
    else{
    header("Location:../front_member.html"); 
    }
?>