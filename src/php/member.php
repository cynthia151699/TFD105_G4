<?php

       include('connect.php');

       //新增
       $sql = "INSERT INTO MEMBER(  ACCOUNT, PASSWORD, NAME, PHONE, DATE) VALUES
       ('$ACCOUNT', '$PASSWORD', '$NAME', '$PHONE', NOW())";

       //執行
       $pdo->exec($sql);

       echo "新增成功!"
    //    header("Location: Select.php");


    // 登入
    $sql =  "select * from member where ACCOUNT = '$account' and PASSWORD = '$password' ";

    $statement = $pdo->query($sql);
    $data = $statement->fetchAll(); 

    if(count($data) > 0){
    //轉址
    session_start();
    $_SESSION["memberID"] = "$account";
    echo '登入成功';
    // 再用登入成功傳到前面去判定
    header("Location:front_member_info.html");
    }else{
    echo "帳號或密碼錯誤";
    header("Location:front_member.html");
    }

?>