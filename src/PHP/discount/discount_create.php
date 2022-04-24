<?php
  include("Connection.php");
  //---------------------------------------------------

  $discount = json_decode(file_get_contents("php://input"), true);

  $sql = "
  insert into DISCOUNT(NAME, CONTENT, CODE, STATUS, DATE)
  values (:DISCOUNT_NAME, :DISCOUNT_CONTENT, :DISCOUNT_CODE, :DISCOUNT_STATUS, NOW());
  ";

  $statement = $link->prepare($sql);

  $statement->bindValue(":DISCOUNT_NAME", $discount["DISCOUNT_NAME"]);
  $statement->bindValue(":DISCOUNT_CONTENT", $discount["DISCOUNT_CONTENT"]);
  $statement->bindValue(":DISCOUNT_CODE", $discount["DISCOUNT_CODE"]);
  $statement->bindValue(":DISCOUNT_STATUS", $discount["DISCOUNT_STATUS"]);

  $statement->execute();

  echo json_encode($discount);

?>