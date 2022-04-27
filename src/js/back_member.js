new Vue({
  el: "#member_wrapper",
  data() {
    return {
      ID: "",
      mail: "",
      PASSWORD: "",
      NAME: "",
      PHONE: "",
      DATE: "",
      MEMBERS: [],
      search: "",
      EDIT: {
        ID: "",
        mail: "",
        PASSWORD: "",
        NAME: "",
        PHONE: "",
        DATE: "",
      },
    };
  },

  methods: {
    member_cancel() {
      member("<strong>已取消</strong>", "success", "");
      $(".popUp").css("display", "none");
    },
    search_member() {
      if (this.search != "") {
        fetch("./php/member/back_membersearch.php", {
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
            this.MEMBERS = res;
          })

          .catch((reason) =>
            member("<strong>查無這筆資料</strong>", "warning")
          );
      } else {
        member("<strong>請輸入內容</strong>", "warning");
      }
    },

    member_update(ID) {
      // alert(ID);
      if (this.EDIT.mail != "" && this.EDIT.phone != "") {
        fetch("./php/member/back_memberupdate.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          body: JSON.stringify({
            UP_ID: this.EDIT.ID,
            UP_mail: this.EDIT.mail,
            UP_PASSWORD: this.EDIT.PASSWORD,
            UP_NAME: this.EDIT.NAME,
            UP_PHONE: this.EDIT.PHONE,
            UP_DATE: this.EDIT.DATE,
          }),
        }).then((res) => res.json());
        //.then(res => {this.EXHIBITIONS = res})

        member("<strong>修改成功</strong>", "success");
        $(".popUp").css("display", "none");
      } else {
        member("<strong>請輸入內容</strong>", "warning");
      }
    },
    openBoxAdd(ID) {
      $("div.popUp").css("display", "block");
      $("div.mask").css("display", "block");

      // 只顯示指定彈窗
      $(".-add").css("display", "block");

      $(".-edit").css("display", "none");
    },
    openBoxEdit(ID) {
      $("div.popUp").css("display", "block");
      $("div.mask").css("display", "block");

      $(".-add").css("display", "none");

      // 只顯示指定彈窗
      $(".-edit").css("display", "block");

      fetch("./php/member/back_memberselectID.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          memberId: ID,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          this.EDIT.ID = res[0]["ID"];
          this.EDIT.mail = res[0]["mail"];
          this.EDIT.NAME = res[0]["NAME"];
          this.EDIT.PASSWORD = res[0]["PASSWORD"];
          this.EDIT.PHONE = res[0]["PHONE"];
          this.EDIT.DATE = res[0]["DATE"];
        });
    },
  },
  created() {
    fetch("./php/member/back_memberall.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.MEMBERS = res;
      });
  },
});

function member(msg, icon, html) {
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
