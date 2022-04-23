
<?php
include("Connection.php");
//---------------------------------------------------
$ticket = json_decode(file_get_contents("php://input"), true);
// echo json_encode($member);

//建立SQL
$sql = "insert into G4.TICKET(TICKET_NAME,TICKET_TYPE,TICKET_PRICE,TICKET_STATUS,TICKET_DATE,TICKET_CREATE)
values (:TICKET_NAME,:TICKET_TYPE,:TICKET_PRICE,:TICKET_STATUS,:TICKET_DATE,NOW());";

  // 包裝起來才可以使PHP 用bindValue
$statement = $link->prepare($sql);

  // 下列都是自定義PHP變數  , 不然看面資料庫看不懂 :price
// $statement->bindValue(":account", $member->account);
// $statement->bindValue(":password", $member->password);
// $statement->bindValue(":phone", $member->phone);
// $statement->bindValue(":address", $member->address);
// $statement->bindValue(":gender", $member->gender);
$statement->bindValue(":TICKET_NAME", $ticket["TICKET_NAME"]);
$statement->bindValue(":TICKET_TYPE", $ticket["TICKET_TYPE"]);
$statement->bindValue(":TICKET_PRICE", $ticket["TICKET_PRICE"]);
$statement->bindValue(":TICKET_STATUS", $ticket["TICKET_STATUS"]);
$statement->bindValue(":TICKET_DATE", $ticket["TICKET_DATE"]);


 //執行
$statement->execute();
      //  echo json_encode(['status'=> 'SUCCESS']);
      //  echo "新增成功!";
echo json_encode($ticket);
 
?>