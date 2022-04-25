<?php

        include("../Connection.php");

       //---------------------------------------------------
       $news = json_decode(file_get_contents("php://input"), true); 
    //    $keyword = htmlspecialchars($_POST["keyword"]); //會過濾特殊符號


       //建立SQL語法
       $sql = "SELECT * FROM NEWS WHERE NEWS_NAME  like  ? ";      

       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    //    $statement = $pdo->query($sql);
        $statement = $link->prepare($sql);
        $statement->bindValue(1 ,'%'.$news["KEY"].'%'); 
        $statement->execute(); 

       //抓出全部且依照順序封裝成一個二維陣列
       $data = $statement->fetchAll();
       
           
       //將二維陣列取出顯示其值
       if(count($data) >0){
    //         foreach($data as $index => $row){
    //         echo $row["NEWS_NAME"];   //欄位名稱
    //         echo "<br>";	  
    //         echo $row["NEWS_PIC"];    //欄位名稱
    //         echo "<br>";	  
    //         echo $row["NEWS_CONTENT"];    //欄位名稱	 
    //         echo "<br>";	  
    //         echo $row["NEWS_STATUS"];    //欄位名稱	
    //         echo "<br>";	  
    //         echo $row["NEWS_DATE"];    //欄位名稱	 
            echo json_encode($data);
            };
    //     }else{
    //         echo "沒有這筆資料";
    //     }
?>