<?php
    include("../Connection.php");
    //---------------------------------------------------

    $discount = json_decode(file_get_contents("php://input"), true);

    $sql = "
    SELECT * FROM DISCOUNT
    WHERE ID = :ID
    ";

    $statement = $link->prepare($sql);

    $statement->bindValue(":ID", $discount["ID"]);

    $statement->execute();

    $data = $statement->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);

?>