<?php
include("./connect.php");
//---------------------------------------------------
//HTML來的資料是JSON，解扣成PHP看得懂的
$discount = json_decode(file_get_contents("php://input"), true);
// echo json_encode($member);
// echo ("wwww");

//建立SQL
$sql = "
insert into G4.DISCOUNT(NAME, CONTENT, CODE, DATE, STATUS)
values (:DISCOUNT_NAME, :DISCOUNT_CONTENT, :DISCOUNT_CODE, NOW(), :DISCOUNT_STATUS);
";

// $sql = "SELECT * FROM DISCOUNT";

// 包裝起來才可以使PHP 用bindValue
$statement = $link->prepare($sql);

  // 下列都是自定義PHP變數  , 不然看面資料庫看不懂 :price
  // PHP解扣給SQL看得懂的東西

// $statement->bindValue(":account", $member->account);
// $statement->bindValue(":password", $member->password);
// $statement->bindValue(":phone", $member->phone);
// $statement->bindValue(":address", $member->address);
// $statement->bindValue(":gender", $member->gender);
$statement->bindValue(":DISCOUNT_NAME", $discount["DISCOUNT_NAME"]);
$statement->bindValue(":DISCOUNT_CONTENT", $discount["DISCOUNT_CONTENT"]);
$statement->bindValue(":DISCOUNT_CODE", $discount["DISCOUNT_CODE"]);
$statement->bindValue(":DISCOUNT_STATUS", $discount["DISCOUNT_STATUS"]);

//抓出全部且依照順序封裝成一個二維陣列(新增不用加，渲染PHP再加這個)
// $data = $statement->fetchAll(PDO::FETCH_ASSOC);
// echo json_encode($data);

 //執行
$statement->execute();
      //  echo json_encode(['status'=> 'SUCCESS']);
      //  echo "新增成功!";
echo json_encode($discount);

 
?>
