new Vue({
  el: "#appapp",

  data: {
    MEMBER: {
      NAME: "",
      mail: "",
      PASSWORD: "",
      PHONE: "",
    },
  },
  mounted() {
    fetch("./php/member/MemberSearch.php")
      .then((res) => res.json())
      .then((res) => {
        this.MEMBER = res[0];
      });
  },
  methods: {
    update() {
      $("button.member.submit").on("click", function () {
        console.log("aaa");
        $("article.modifyMemberInfo").css("display", "flex");
        $("article.checkMemberInfo").css("display", "none");
      });

      $("button.member.submit").on("click", function () {
        console.log("aaa");
        $("article.modifyMemberInfo").css("display", "flex");
        $("article.checkMemberInfo").css("display", "none");
      });
    },
  },
});
new Vue({
  el: "#appupdate",

  data: {
    MEMBER: {
      NAME: "",
      mail: "",
      PASSWORD: "",
      PHONE: "",
    },
  },
  mounted() {
    fetch("./php/member/MemberSearch.php")
      .then((res) => res.json())
      .then((res) => {
        this.MEMBER = res[0];
      });
  },
  methods: {
    memberdataupdate() {
      fetch("./php/member/MemberUpdate.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          mail: this.MEMBER.mail,
          PASSWORD: this.MEMBER.PASSWORD,
          PHONE: this.MEMBER.PHONE,
        }),
      }).then((resp) => {
        let Password = document.querySelector("#Password");
        let Password_confirm = document.querySelector("#Password_confirm");
        let phonenumber = document.getElementById("PHONE").value;
        let Password_value = Password.value;
        let Password_confirm_value = Password_confirm.value;
        if (!/^[09]{2}[0-9]{8}$/.test(phonenumber)) {
          alert("The Phone number is incorrect, please re-fill");
          event.preventDefault();
        } else if (Password_value != Password_confirm_value) {
          alert("Password confirm does not match");
          event.preventDefault();
        } else {
          location = "front_member_info.html";
        }
      });
    },
  },
});
