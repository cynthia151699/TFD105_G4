
<?php
include("Connection.php");
//---------------------------------------------------
$news = json_decode(file_get_contents("php://input"), true);
// echo json_encode($member);

//建立SQL
$sql = "insert into G4.NEWS(NEWS_NAME,NEWS_PIC,NEWS_CONTENT,NEWS_STATUS,NEWS_DATE)
values (:NEWS_NAME,:NEWS_PIC,:NEWS_CONTENT,:NEWS_STATUS,NOW());";

  // 包裝起來才可以使PHP 用bindValue
$statement = $link->prepare($sql);

  // 下列都是自定義PHP變數  , 不然看面資料庫看不懂 :price
// $statement->bindValue(":account", $member->account);
// $statement->bindValue(":password", $member->password);
// $statement->bindValue(":phone", $member->phone);
// $statement->bindValue(":address", $member->address);
// $statement->bindValue(":gender", $member->gender);
$statement->bindValue(":NEWS_NAME", $news["NEWS_NAME"]);
$statement->bindValue(":NEWS_PIC", $news["NEWS_PIC"]);
$statement->bindValue(":NEWS_CONTENT", $news["NEWS_CONTENT"]);
$statement->bindValue(":NEWS_STATUS", $news["NEWS_STATUS"]);

 //執行
$statement->execute();
      //  echo json_encode(['status'=> 'SUCCESS']);
      //  echo "新增成功!";
 
?>