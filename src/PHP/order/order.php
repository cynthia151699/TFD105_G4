<?php
  include("Connection.php");
//---------------------------------------------------
$order = json_decode(file_get_contents("php://input"), true);
echo json_encode($order);

//建立SQL
$sql = "insert into ORDER(INVOICE,ACCOUNT,ORDER_STATUS,ORDER_DATE,DISCOUNT_CODE,DISCOUNT_TOTAL)
values (:INVOICE,:ACCOUNT,:ORDER_STATUS,NOW(),:DISCOUNT_CODE,:DISCOUNT_TOTAL);";

  // 包裝起來才可以使PHP 用bindValue
$statement = $link->prepare($sql);

  // 下列都是自定義PHP變數  , 不然看面資料庫看不懂 :price
// $statement->bindValue(":account", $member->account);
// $statement->bindValue(":password", $member->password);
// $statement->bindValue(":phone", $member->phone);
// $statement->bindValue(":address", $member->address);
// $statement->bindValue(":gender", $member->gender);
$statement->bindValue(":INVOICE", $order["INVOICE"]);
$statement->bindValue(":ACCOUNT", $order["ACCOUNT"]);
$statement->bindValue(":ORDER_STATUS", $order["ORDER_STATUS"]);
$statement->bindValue(":DISCOUNT_CODE", $order["DISCOUNT_CODE"]);
$statement->bindValue(":DISCOUNT_TOTAL", $order["DISCOUNT_TOTAL"]);
// $statement->bindValue(":PAY_STATUS", $order["PAY_STATUS"]);

 //執行
$statement->execute();
    //  echo json_encode(['status'=> 'SUCCESS']);
    //  echo "新增成功!";
    echo json_encode($order);
?>