<?php
require_once('conf.php');
require_once('mwt-newebpay_sdk.php');
$TradeInfo = file_get_contents("php://input");

$arr = mb_split("&",$TradeInfo);
$get_aes = str_replace("TradeInfo=","",$arr[3]);

$data = create_aes_decrypt($get_aes,$hashKey,$hashIV);
$json = json_decode($data);

if($json->Status == "SUCCESS"){
	//繳費完成時.....
	echo "SUCCESS";

	include("./../Connection.php");
	$order = json_decode(file_get_contents("php://input"), true);

	//建立SQL
    $sql = "insert into `ORDER`(INVOICE,ACCOUNT,PAY_STATUS,ORDER_STATUS,ORDER_DATE,MEMBER_ID)
    values (:INVOICE,:ACCOUNT,"已付款","處理中",NOW(),1);";

    // 包裝起來才可以使PHP 用bindValue
    $statement = $link->prepare($sql);

    // 下列都是自定義PHP變數  , 不然看面資料庫看不懂 :priceORDER_STATUS
    $statement->bindValue(":INVOICE", $order["INVOICE"]);
    $statement->bindValue(":ACCOUNT", $order["ACCOUNT"]);
    $statement->bindValue(":PAY_STATUS", $order["PAY_STATUS"]);
    $statement->bindValue(":ORDER_STATUS", $order["ORDER_STATUS"]);
    $statement->bindValue(":ORDER_DATE", $order["ORDER_DATE"]);

    //執行
    $statement->execute();

    echo json_encode($order);
}
?>