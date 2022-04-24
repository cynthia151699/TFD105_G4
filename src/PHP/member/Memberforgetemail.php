<?php
    include("../Connection.php");


    $member = json_decode(file_get_contents("php://input"), true);

   
    $mail = $_POST["mail"];
    $sql =  "select PASSWORD from MEMBER where mail = '$mail'";


    $statement = $link->prepare($sql);
    $statement -> execute();
    $data = $statement->fetchAll();  
    $datajson = json_encode($data);

    if(count($data) > 0){
    //轉址
    session_start();
    $_SESSION["memberID"] = "$mail";
    echo $datajson;
    }
    else{
    echo "信箱錯誤";  
    }

?>