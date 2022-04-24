<?php
include("Connection.php");
//---------------------------------------------------
$order = json_decode(file_get_contents("php://input"), true);
// echo json_encode($news);

//建立SQL
$sql = "UPDATE `ORDER` SET 
              ID = :UP_ID,
              INVOICE = :UP_INVOICE,
              ACCOUNT = :UP_ACCOUNT,
              PAY_STATUS = :UP_PAY_STATUS,
              ORDER_STATUS = :UP_ORDER_STATUS,
              DISCOUNT_CODE = :UP_DISCOUNT_CODE,
              DISCOUNT_TOTAL = :UP_DISCOUNT_TOTAL,
              ORDER_DATE = :UP_ORDER_DATE
              WHERE ID = :UP_ID";

  // 包裝起來才可以使PHP 用bindValue
$statement = $pdo->prepare($sql);

  // 下列都是自定義PHP變數  , 不然看面資料庫看不懂 :price
$statement->bindValue(":UP_ID", $order["UP_ID"]);
$statement->bindValue(":UP_INVOICE", $order["UP_INVOICE"]);
$statement->bindValue(":UP_ACCOUNT", $order["UP_ACCOUNT"]);
$statement->bindValue(":UP_PAY_STATUS", $order["UP_PAY_STATUS"]);
$statement->bindValue(":UP_ORDER_STATUS", $order["UP_ORDER_STATUS"]);
$statement->bindValue(":UP_DISCOUNT_CODE", $order["UP_DISCOUNT_CODE"]);
$statement->bindValue(":UP_DISCOUNT_TOTAL", $order["UP_DISCOUNT_TOTAL"]);
$statement->bindValue(":UP_ORDER_DATE", $order["UP_ORDER_DATE"]);

 //執行
$statement->execute();
  echo json_encode($order);

?>