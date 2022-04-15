// 歡迎信件

// 測試路徑期間先關掉JS

// emailjs.init("rB4cW-mtW8WwyODex");

// const btn = document.getElementById("member_button");
// document.getElementById("member_form").addEventListener("submit", function (event) {
//   event.preventDefault();

//   btn.value = "Sending...";

//   const serviceID = "default_service";
//   const templateID = "template_c3rqluo";

//   emailjs.sendForm(serviceID, templateID, this).then(
//     () => {
//       btn.value = "Send Email";
//       alert("Welcome to Anno");
//       window.location.assign("../../dist/member_info.html")
//     },
//     (err) => {
//       btn.value = "Send Email";
//       alert("Email format error, please re-enter");
//     }
//   );
// });

// 彈出閱讀詳細事項 

// 連結彈窗
let member_Terms = document.querySelector(".memberTerms");

// mask
let member_Mask = document.querySelector(".mask");

// 關閉
let member_Terms_Del = document.querySelector(".memberTermsDel");

// 彈窗
let member_Pop_UP = document.querySelector(".memberPopUp");

// 彈窗開啟
member_Terms.addEventListener('click', function (e) {
	e.preventDefault;
	member_Pop_UP.style.display = "block";
	member_Mask.style.display = "block";
})

// 彈窗關閉
member_Terms_Del.addEventListener('click', function () {
	e.preventDefault;
	member_Pop_UP.style.display = "none";
	member_Mask.style.display = "none";
})
