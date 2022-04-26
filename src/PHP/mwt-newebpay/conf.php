<?php
$merchantID = "MS135070977"; 																					//商店代號
$hashKey    = "AErHkd56yC94T67IEWhsDyZN6JfVzXVQ";   										//HashKey
$hashIV     = "CDCozVLwknYqeGSP"; 																  		//HashIV
$url        = "https://ccore.newebpay.com/MPG/mpg_gateway";              //正式環境URL
$ver        = "1.5";

$ReturnURL       = "https://tibamef2e.com/tfd105/g4/front_home.html"; 			    //支付完成 返回商店網址
$NotifyURL_atm   = "https://newebpay.minwt.com/newebpay/atm_notify.php"; 		//支付通知網址
$NotifyURL_ccard = "https://newebpay.minwt.com/newebpay/ccard_notify.php"; 	//支付通知網址
$ClientBackURL   = "https://tibamef2e.com/tfd105/g4/front_home.html"; 	  			//支付取消 返回商店網址

$orderSend = $_POST["orderSend"];
settype($orderSend,"integer");
echo $orderSend;

$NTD = 1600;											//商品價格
// mwt-newebpay/all.php?pay=y
// $NTD = $orderSend;									//商品價格
echo gettype($NTD);
$Order_Title = "票券";		//商品名稱
$ATM_ExpireDate = 3;						//ATM付款到期日
?>