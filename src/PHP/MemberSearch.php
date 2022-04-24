<?php
        include("./Connection.php");

        //---------------------------------------------------
        $member = json_decode(file_get_contents("php://input"), true);
    
        session_start();
        $mail = $_SESSION["memberID"];
        $sql =  "select * from MEMBER where mail = '$mail'";
        $statement = $link->query($sql);
        
        $data = $statement->fetchAll();

        $data_json_en = json_encode($data);
        echo $data_json_en;

?>