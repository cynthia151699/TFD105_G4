<?php
    include("../Connection.php");
    //---------------------------------------------------

    $discount = json_decode(file_get_contents("php://input"), true);

    $sql = "UPDATE
                DISCOUNT
            SET
                NAME = :NAME_NEW,
                CONTENT = :CONTENT_NEW,
                CODE = :CODE_NEW,
                STATUS = :STATUS_NEW,
                DATE = :DATE_NEW
            WHERE
                ID = :ID_NEW
    ";

    $statement = $link->prepare($sql);

    $statement->bindValue(":NAME_NEW", $discount["NAME_NEW"]);
    $statement->bindValue(":CONTENT_NEW", $discount["CONTENT_NEW"]);
    $statement->bindValue(":CODE_NEW", $discount["CODE_NEW"]);
    $statement->bindValue(":STATUS_NEW", $discount["STATUS_NEW"]);
    $statement->bindValue(":DATE_NEW", $discount["DATE_NEW"]);
    $statement->bindValue(":ID_NEW", $discount["ID_NEW"]);

    $statement->execute();

    echo json_encode($discount);
 
?>