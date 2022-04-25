<?php
    include("../Connection.php");
    //---------------------------------------------------

    $discount = json_decode(file_get_contents("php://input"), true);

    $sql = "SELECT * FROM DISCOUNT";

    $statement = $link->prepare($sql);
    
    $statement->execute();

    $data = $statement->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);

?>