//session抓到的價錢，丟進渲染
document.getElementsByClassName("piece_info")[0].innerHTML = sessionStorage.getItem("piece1"); //1.數量1從sessionStorage抓
document.getElementsByClassName("piece_info")[1].innerHTML = sessionStorage.getItem("piece2"); //2.數量2從sessionStorage抓
document.getElementsByClassName("smallPrice")[0].value = sessionStorage.getItem("smallPrice1"); //3.小計1從sessionStorage抓
document.getElementsByClassName("smallPrice")[1].value = sessionStorage.getItem("smallPrice2"); //4.小計2從sessionStorage抓
document.getElementById("totalCount").innerHTML = sessionStorage.getItem("totalCount"); //5.總數從sessionStorage抓
document.getElementById("totalPrice").innerHTML = sessionStorage.getItem("totalPrice"); //6.總價從sessionStorage抓
document.getElementById("couponUse").innerHTML = sessionStorage.getItem("couponUse"); //7.coupon使用狀態從sessionStorage抓

//點擊送出按鈕會轉址
document.getElementById("orderSend").value = sessionStorage.getItem("totalPrice");

document.getElementById("info").addEventListener("click", function (event) {
  event.preventDefault();
  $.ajax({
    type: "POST",
    url: "./php/Memberticket.php",
    dataType: "json",
    async: false,
    success: function (data) {
      let Namevalue = data[0].NAME;
      let Namecode = document.getElementById("Name");
      Namecode.value = Namevalue;
      let Phonevalue = data[0].PHONE;
      let Phonecode = document.getElementById("Phone");
      Phonecode.value = Phonevalue;
      let emailvalue = data[0].mail;
      let emailcode = document.getElementById("Email");
      emailcode.value = emailvalue;
    },
  });

});