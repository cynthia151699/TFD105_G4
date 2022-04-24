<?php

       include("Connection.php");
       //---------------------------------------------------

       //建立SQL語法 //limit: 1不要在fetch改
       $sql = "SELECT * FROM EXHIBITION";


       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       //$pdo = getConn("1");
       $statement = $link->query($sql);

       //抓出全部且依照順序封裝成一個二維陣列 //fetchColumn()
       $data = $statement->fetchAll();

    //抓出全部且依照順序封裝成一個二維陣列
    //$data = $statement->fetchAll(PDO::FETCH_ASSOC);

       //print_r($data);

    echo json_encode($data); //以下二維陣列不需要,給js跑迴圈驗證,加密

?>

<!-- <?php
  // 渲染到畫面上
        include("Connection.php");
       //---------------------------------------------------

       //將帳號密碼的資料post過來~!
       //$account = $_POST["account"];
       $order = json_decode(file_get_contents("php://input"), true);

       //建立SQL語法
       $sql = "SELECT * FROM PAYMENT WHERE INVOICE like ?"; //冒號:自定義參數

       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       //$statement = $pdo->query($sql);
       //防護機制
       $statement = $link->prepare($sql); //準備未送出
       $statement->bindValue(1, '%'.$order['KEY'].'%'); //第二個參數變數跟值都可以
       $statement->execute(); //執行


       //抓出全部且依照順序封裝成一個二維陣列
       $data = $statement->fetchAll();

       if(count($data)>0){

        echo json_encode($data);

       };
        

?> -->


<?php
  // 新增
  include("Connection.php");
//---------------------------------------------------
$order = json_decode(file_get_contents("php://input"), true);
echo json_encode($order);

//建立SQL
$sql = "insert into PAYMENT(INVOICE,ACCOUNT,ORDER_STATUS,ORDER_DATE,PAY_STATUS)
values (:INVOICE,:ACCOUNT,:ORDER_STATUS,NOW(),:PAY_STATUS);";

  // 包裝起來才可以使PHP 用bindValue
$statement = $link->prepare($sql);

  // 下列都是自定義PHP變數  , 不然看面資料庫看不懂 :price
$statement->bindValue(":INVOICE", $order["INVOICE"]);
$statement->bindValue(":ACCOUNT", $order["ACCOUNT"]);
$statement->bindValue(":ORDER_STATUS", $order["ORDER_STATUS"]);
$statement->bindValue(":ORDER_DATE", $order["ORDER_DATE"]);
$statement->bindValue(":PAY_STATUS", $order["PAY_STATUS"]);

 //執行
$statement->execute();
    echo json_encode($order);
?>

<?php
// 修改
       include("./../Connection.php");
       //---------------------------------------------------
       $event = json_decode(file_get_contents("php://input"), true);
       //echo json_encode($event);

       //建立SQL
       $sql = "UPDATE PAYMENT 
                     SET 
                     INVOICE = :UP_INVOICE,
                     ACCOUNT = :UP_ACCOUNT,
                     ORDER_STATUS = :UP_ORDER_STATUS,
                     ORDER_DATE = :UP_ORDER_DATE,
                     PAY_STATUS = :UP_PAY_STATUS,
                     WHERE 
                     ID = :UP_ID";

       // 包裝起來才可以使PHP 用bindValue
       $statement = $link->prepare($sql);

       $statement->bindValue(":UP_INVOICE", $order["UP_INVOICE"]);
       $statement->bindValue(":UP_ACCOUNT", $order["UP_ACCOUNT"]);
       $statement->bindValue(":UP_ORDER_STATUS", $order["UP_ORDER_STATUS"]);
       $statement->bindValue(":UP_ORDER_DATE", $order["UP_ORDER_DATE"]);
       $statement->bindValue(":UP_PAY_STATUS", $order["UP_PAY_STATUS"]);
       $statement->bindValue(":UP_ID",$order["UP_ID"]);

       //執行
       $statement->execute();

       echo json_encode($order);
?>

<?php
// 查詢
       include("Connection.php");
       //---------------------------------------------------

       $order = json_decode(file_get_contents("php://input"), true);

       //建立SQL語法 //limit: 1不要在fetch改
       $sql = "SELECT * FROM PAYMENT WHERE ID = :id";


       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       //$pdo = getConn("1");
       $statement = $link->prepare($sql);

       $statement->bindValue(":id", $event['eventId']);

       $statement->execute();
       //抓出全部且依照順序封裝成一個二維陣列 //fetchColumn()
    //    $data = $statement->fetchAll();

    //抓出全部且依照順序封裝成一個二維陣列
    // $data = $statement->fetchAll(PDO::FETCH_ASSOC);

    $data = $statement->fetchAll();

       //print_r($data);

    echo json_encode($data); //以下二維陣列不需要,給js跑迴圈驗證,加密

?>

<?php

        include("Connection.php");
       //---------------------------------------------------

       //將帳號密碼的資料post過來~!
       //$account = $_POST["account"];
       $event = json_decode(file_get_contents("php://input"), true);

       //建立SQL語法
       $sql = "SELECT * FROM EXHIBITION WHERE EVENT_NAME like ?"; //冒號:自定義參數

       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       //$statement = $pdo->query($sql);
       //防護機制
       $statement = $link->prepare($sql); //準備未送出
       $statement->bindValue(1, '%'.$event['KEY'].'%'); //第二個參數變數跟值都可以
       $statement->execute(); //執行


       //抓出全部且依照順序封裝成一個二維陣列
       $data = $statement->fetchAll();

       if(count($data)>0){

        echo json_encode($data);

       };
        

?>