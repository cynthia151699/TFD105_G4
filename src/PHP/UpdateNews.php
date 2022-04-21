<?php
include("Connection.php");
//---------------------------------------------------
$news = json_decode(file_get_contents("php://input"), true);
// echo json_encode($news);

//建立SQL
$sql = "UPDATE NEWS 
              SET 
              NEWS_NAME = :UP_NAME,
              NEWS_PIC = :UP_PIC,
              NEWS_CONTENT = :UP_CONTENT,
              NEWS_STATUS = :UP_STATUS
               WHERE 
               ID = :UP_ID";

  // 包裝起來才可以使PHP 用bindValue
$statement = $link->prepare($sql);

  // 下列都是自定義PHP變數  , 不然看面資料庫看不懂 :price
// $statement->bindValue(":account", $member->account);
// $statement->bindValue(":password", $member->password);
// $statement->bindValue(":phone", $member->phone);
// $statement->bindValue(":address", $member->address);
// $statement->bindValue(":gender", $member->gender);
$statement->bindValue(":UP_ID", $news["UP_ID"]);
$statement->bindValue(":UP_NAME", $news["UP_NAME"]);
$statement->bindValue(":UP_PIC", $news["UP_PIC"]);
$statement->bindValue(":UP_CONTENT", $news["UP_CONTENT"]);
$statement->bindValue(":UP_STATUS", $news["UP_STATUS"]);

 //執行
$statement->execute();
      //  echo json_encode(['status'=> 'SUCCESS']);
      //  echo "新增成功!";
    echo json_encode($news);
 
?>