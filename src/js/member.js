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

// 選單左右移動 

document.querySelector('.member_img__btn').addEventListener('click', function () {
	document.querySelector('.cont').classList.toggle('s--signup');
});


// 跳出閱讀詳細事項 
// let member_Terms = document.querySelector(".member_Terms");
// let member_Terms_text = document.querySelector(".member_Terms_text");
// let member_Terms_del = document.querySelector(".member_Terms_del");
// let member_Terms_area = document.querySelector(".member_Terms_area");
// member_Terms.addEventListener('click', function () {
// 	member_Terms_text.style.display = "block";
// 	member_Terms_area.style.display = "block";
// })
// member_Terms_del.addEventListener('click', function () {
// 	member_Terms_text.style.display = "none";
// 	member_Terms_area.style.display = "none";
// })
// member_Terms_text.addEventListener('click', function () {
// 	member_Terms_text.style.display = "none";
// 	member_Terms_area.style.display = "none";
// })
