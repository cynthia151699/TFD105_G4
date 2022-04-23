// sweetheart
function order(msg, icon, html) {
  Swal.fire({
    title: msg,
    icon: icon,
    html: html,

    showConfirmButton: false, // 確認按鈕（預設會顯示不用設定）
    confirmButtonText: "", //　按鈕顯示文字
    confirmButtonAriaLabel: "", // 網頁無障礙用
    confirmButtonColor: "#75706b", // 修改按鈕色碼

    // 使用同確認按鈕
    // showDenyButton: true, // 否定按鈕
    showCancelButton: false, // 取消按鈕

    buttonsStyling: false, // 是否使用sweetalert按鈕樣式（預設為true）
  });
}

// Vue後端資料庫串接
new Vue({
  el: "#order",
  data() {
    return {
      search: "",
      ORDERS: [],
      EDIT: {
        ID: "",
        INVOICE: "",
        ACCOUNT: "",
        PAY_STATUS: "",
        ORDER_STATUS: "",
        DISCOUNT_CODE: "",
        DISCOUNT_TOTAL: "",
        ORDER_DATE: "",
      },
    };
  },
  methods: {
  //   fetchOrder(){
  //     axios.post('Connection.php', {
  //       action:'fetchall'
  //     }).then(function(response){
  //       application.ORDERS = response.data;
  //     });
  //   },

    order_cancel() {
      order("<strong>已取消</strong>", "success", "");
      $(".popUp").css("display", "none");
    },

    search_Order() {
      if (this.search != "") {
        fetch("search.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            KEY: this.search,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            //console.log(res);
            this.PAYMENT = res;
          })

          .catch((reason) => order("<strong>查無這筆資料</strong>", "warning"));

        let input_search_name = document.getElementById("check");
      } else {
        order("<strong>請輸入內容</strong>", "warning");
      }
    },

    order_update(ID) {
      //alert(ID);
      if (this.EDIT.PAY_STATUS != "" && this.EDIT.ORDER_STATUS != "") {
        fetch("update.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          body: JSON.stringify({
            UP_ID: this.EDIT.ID,
            UP_INVOICE: this.EDIT.INVOICE,
            UP_ACCOUNT: this.EDIT.ACCOUNT,
            UP_PAY_STATUS: this.EDIT.PAY_STATUS,
            UP_ORDER_STATUS: this.EDIT.ORDER_STATUS,
            UP_DISCOUNT_CODE: this.EDIT.DISCOUNT_CODE,
            UP_DISCOUNT_TOTAL: this.EDIT.DISCOUNT_TOTAL,
            UP_ORDER_DATE: this.EDIT.ORDER_DATE,
          }),
        }).then((res) => res.json());

        order("<strong>修改成功</strong>", "success");
        $(".popUp").css("display", "none");
        let reset = document.querySelector(".reset");
        reset.reset();
      } else {
        order("<strong>請輸入內容</strong>", "warning");
      }
    },

    // openBoxAdd() {
    //   $("div.popUp").css("display", "block");
    //   $("div.mask").css("display", "block");
    //   // 只顯示指定彈窗
    //   $(".-add").css("display", "block");
    //   $(".-edit").css("display", "none");
    // },

    openBoxEdit(id) {
      $("div.popUp").css("display", "block");
      $("div.mask").css("display", "block");
      // 只顯示指定彈窗
      $(".-edit").css("display", "block");
      $(".-add").css("display", "none");

      fetch("editid.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId: id }),
      })
        .then((res) => res.json())
        .then((res) => {
          this.EDIT.ID = res[0]["ID"];
          this.EDIT.INVOICE = res[0]["INVOICE"];
          this.EDIT.ACCOUNT = res[0]["ACCOUNT"];
          this.EDIT.PAY_STATUS = res[0]["PAY_STATUS"];
          this.EDIT.ORDER_STATUS = res[0]["ORDER_STATUS"];
          this.EDIT.DISCOUNT_CODE = res[0]["DISCOUNT_CODE"];
          this.EDIT.DISCOUNT_TOTAL = res[0]["DISCOUNT_TOTAL"];
          this.EDIT.ORDER_DATE = res[0]["ORDER_DATE"];
        });
    },

    maskClose() {
      $("div.popUp").css("display", "none");
    },
  },

  // 將php抓到的資料經由vue渲染到網頁上（轉成json格式才能讀取）
  created() {
    fetch("getall.php")
      .then((res) => res.json())
      .then((res) => {
        //console.log(res);
        this.ORDERS = res;
      });
  },
});