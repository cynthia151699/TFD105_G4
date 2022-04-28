// 1.頁面載入後執行
window.onload = function () {
  // 2.獲取元素
  var liCheck = document.getElementsByName("liCheck"); //li裡面的核取方塊
  var decrease = document.getElementsByClassName("decrease"); //減號
  var piece = document.getElementsByClassName("piece"); //件數
  var increase = document.getElementsByClassName("increase"); //加號
  var price = document.getElementsByClassName("price"); //單價
  var smallPrice = document.getElementsByClassName("smallPrice"); //小計
  var checkAll = document.getElementById("checkAll"); //全選核取方塊
  var totalCount = document.getElementById("totalCount"); //總計
  var totalPrice = document.getElementById("totalPrice"); //總價
  var applyCoupon = document.getElementsByClassName("applyCoupon")[0]; //送出折扣碼
  var discount = 100;
  var couponUse = document.getElementById("couponUse"); //使用狀態

  // 3.加減按鈕
  for (var i = 0; i < decrease.length; i++) {
    // 4.另存下標
    decrease[i].index = i;
    increase[i].index = i;
    liCheck[i].index = i;
    // 5.減號的點選事件
    decrease[i].onclick = function () {
      // 5-1.判斷件數是否大於0
      if (piece[this.index].innerHTML <= 1) {
        this.disabled = true; //當件數小於等於0時, 將減號按鈕禁用
      }
      // 5-1-1.當前件數-1
      piece[this.index].innerHTML--;
      // 5-1-2.計算小計
      smallPrice[this.index].value =
        Number(smallPrice[this.index].value) -
        Number(price[this.index].innerHTML);
      // 6-4.如果當前條目是被選中狀態, 則需要將該商品計入總計和總價
      if (liCheck[this.index].checked) {
        //選中
        totalCount.innerHTML--;
        totalPrice.innerHTML =
          Number(totalPrice.innerHTML) - Number(price[this.index].innerHTML);
      }
    };
    // 6.加號的點選事件
    increase[i].onclick = function () {
      // 6-1.將對應的減號解禁
      decrease[this.index].disabled = false;
      // 6-2.當前件數+1
      piece[this.index].innerHTML++;
      // 6-3.計算小計
      smallPrice[this.index].value =
        Number(smallPrice[this.index].value) +
        Number(price[this.index].innerHTML);
      // 6-4.如果當前條目是被選中狀態, 則需要將該商品計入總計和總價
      if (liCheck[this.index].checked) {
        //選中
        totalCount.innerHTML++;
        totalPrice.innerHTML =
          Number(totalPrice.innerHTML) + Number(price[this.index].innerHTML);
      }
    };
    // 7.核取方塊的狀態改變事件
    var count = 0; //儲存選中個數
    liCheck[i].onchange = function () {
      // 7-1.判斷是否選中
      if (this.checked) {
        //選中狀態
        count++;
        totalCount.innerHTML =
          Number(totalCount.innerHTML) + Number(piece[this.index].innerHTML); //總計加當前件數
        totalPrice.innerHTML =
          Number(totalPrice.innerHTML) + Number(smallPrice[this.index].value); //總計加當前件數
        // 7-1-1. 判斷選中個數是否與核取方塊個數一致
      } else {
        //取消選中狀態
        count--;
        totalCount.innerHTML =
          Number(totalCount.innerHTML) - Number(piece[this.index].innerHTML); //總計加當前件數
        totalPrice.innerHTML =
          Number(totalPrice.innerHTML) - Number(smallPrice[this.index].value); //總計加當前件數
      }
      count == liCheck.length
        ? (checkAll.checked = true)
        : (checkAll.checked = false);
    };
  }
  // 8.全選核取方塊
  checkAll.onchange = function () {
    totalCount.innerHTML = 0; //總計置為0
    totalPrice.innerHTML = 0; //總價置為0
    for (var j = 0; j < liCheck.length; j++) {
      // 8-1. 將li裡面的核取方塊與全選狀態保持一致
      liCheck[j].checked = this.checked;
      // 8-2. 判斷是否全選
      if (this.checked) {
        count = liCheck.length;
        totalCount.innerHTML =
          Number(totalCount.innerHTML) + Number(piece[j].innerHTML);
        totalPrice.innerHTML =
          Number(totalPrice.innerHTML) + Number(smallPrice[j].value);
      } else {
        count = 0;
      }
    }
  };

  //9. sessionStorage拿折扣碼
  document.getElementsByClassName("input_coupon")[0].value =
    sessionStorage.getItem("DISCOUNTCODE");
  let sessionCode = document.getElementsByClassName("input_coupon")[0].value;
  // document.getElementsByClassName('input_coupon')[0].value = "123";
  // let sessionCode = document.getElementsByClassName('input_coupon')[0].value = "123";

  applyCoupon.addEventListener("click", function () {
    //apply按鈕按下去觸發的事件
    if (sessionCode == "") {
      //無折扣碼
      return;
    } else {
      //有折扣碼
      totalPrice.innerHTML = Number(totalPrice.innerHTML) - Number(discount); //show在畫面上的
      $(".applyCoupon").css("display", "none"); //apply按鈕按過一次後消失
      couponUse.innerHTML = "-$100 USED!"; //coupon使用後改寫
    }
  });

  let piece1 = document.getElementsByClassName("piece")[0]; //1.數量1
  let piece2 = document.getElementsByClassName("piece")[1]; //2.數量2
  let smallPrice1 = document.getElementsByClassName("smallPrice")[0]; //3.小計1
  let smallPrice2 = document.getElementsByClassName("smallPrice")[1]; //4.小計2
  // var totalCount = document.getElementById("totalCount"); //5.總計(宣告過)
  // var totalPrice = document.getElementById("totalPrice"); //6.總價(宣告
  // var couponUse = document.getElementById("couponUse"); //7.coupon使用狀態(宣告過)
  let checkoutButton = document.getElementsByClassName("btn_checkout")[0];

  checkoutButton.addEventListener("click", function () {
    //checkout按鈕按下去觸發的事件
    sessionStorage.setItem("piece1", Number(piece1.innerHTML)); //1.數量1
    sessionStorage.setItem("piece2", Number(piece2.innerHTML)); //2.數量2
    sessionStorage.setItem("smallPrice1", Number(smallPrice1.value)); //3.小計1
    sessionStorage.setItem("smallPrice2", Number(smallPrice2.value)); //4.小計2
    sessionStorage.setItem("totalCount", Number(totalCount.innerHTML)); //5.總價錢
    sessionStorage.setItem("totalPrice", Number(totalPrice.innerHTML)); //6.總價錢
    sessionStorage.setItem("couponUse", couponUse.innerHTML); //7.coupon使用狀態
  });
};

new Vue({
    el: "#ticket_wrapper",
    data() {
      return {
        TICKETS: [],
      };
    },

    created() {
        fetch("./php/ticket/Select_front_Ticket.php")

            .then(res =>
                res.json()
            )

            .then(res => {
                this.TICKETS = res
            })
    },
});
