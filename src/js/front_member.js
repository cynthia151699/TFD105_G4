document.querySelector(".member_img__btn").addEventListener("click", function () {
  document.querySelector(".cont").classList.toggle("s--signup")
});
document.querySelector(".member_img__cellbtn").addEventListener("click", function () {
  document.querySelector(".cont").classList.toggle("s--signup")
});
document.querySelector(".member_img__cellbtnin").addEventListener("click", function () {
  document.querySelector(".cont").classList.toggle("s--signup")
});
let member_Terms = document.querySelector(".member_Terms"),
  member_Terms_text = document.querySelector(".member_Terms_text"),
  member_Terms_del = document.querySelector(".member_Terms_del"),
  member_Terms_area = document.querySelector(".member_Terms_area");
member_Terms.addEventListener("click", function () {
  member_Terms_text.style.display = "block", member_Terms_area.style.display = "block"
}), member_Terms_del.addEventListener("click", function () {
  member_Terms_text.style.display = "none", member_Terms_area.style.display = "none"
}), member_Terms_text.addEventListener("click", function () {
  member_Terms_text.style.display = "none", member_Terms_area.style.display = "none"
});



let inputcode = document.querySelector("#member_button");
inputcode.addEventListener("click", function () {
  let NAME = document.querySelector("#name");
  let member_mail = document.querySelector("#member_mail");
  let Password = document.querySelector("#Passwordcheck");
  let Password_confirm = document.querySelector("#Password_confirm");
  let PHONE = document.querySelector("#PHONE");
  let number = document.getElementById("PHONE").value;
  let check = document.getElementById("check").checked;
  let Password_value = Password.value;
  let Password_confirm_value = Password_confirm.value;
  if (NAME.value == "") {
    alert("Please type your name");
    event.preventDefault();
  } else if (member_mail.value == "") {
    alert("Please type your mail");
    event.preventDefault();
  } else if (Password.value == "") {
    alert("Please type your Password");
    event.preventDefault();
  } else if (Password_value != Password_confirm_value) {
    alert("Password confirm does not match");
    event.preventDefault();
  } else if (Password_confirm.value == "") {
    alert("Please type Password confirm");
    event.preventDefault();
  } else if (PHONE.value == "") {
    alert("Please type Phone");
    event.preventDefault();
  } else if (!/^[09]{2}[0-9]{8}$/.test(number)) {
    alert("The Phone number is incorrect, please re-fill");
    event.preventDefault();
  } else if (check == false) {
    alert("Please agree Terms& Conditions and Privacy Policy");
    event.preventDefault();
  }
});

let signinputcode = document.querySelector("#signlogin");
signinputcode.addEventListener("click", function () {
  let signmail = document.querySelector("#signmail");
  console.log(signmail);
  let signpassword = document.querySelector("#signpassword");
  console.log(signpassword);
  if (signmail.value == "") {
    alert("Please type your mail");
    event.preventDefault();
  } else if (signpassword.value == "") {
    alert("Please type your Password");
    event.preventDefault();
  }
});

// 手機
let phonelogin = document.querySelector("#phonelogin");
phonelogin.addEventListener("click", function () {
  let signmail = document.querySelector("#phonemail");
  console.log(signmail);
  let signpassword = document.querySelector("#phonepassword");
  console.log(signpassword);
  if (phonemail.value == "") {
    alert("Please type your mail");
    event.preventDefault();
  } else if (phonepassword.value == "") {
    alert("Please type your Password");
    event.preventDefault();
  }
});

let phonecode = document.querySelector("#phone_button");
console.log(phonecode);
phonecode.addEventListener("click", function () {
  console.log("object");
  let phoneNAME = document.querySelector("#phonename");
  let phonemember_mail = document.querySelector("#phonemember_mail");
  let phonePassword = document.querySelector("#phonePasswordcheck");
  let phonePassword_confirm = document.querySelector("#phonePassword_confirm");
  let phonePHONE = document.querySelector("#cellphonePHONE");
  let phonenumber = document.getElementById("cellphonePHONE").value;
  // let phonecheck = document.getElementById("phonecheck").checked;
  let phonePassword_value = phonePassword.value;
  let phonePassword_confirm_value = phonePassword_confirm.value;
  if (phoneNAME.value == "") {
    alert("Please type your name");
    event.preventDefault();
  } else if (phonemember_mail.value == "") {
    alert("Please type your mail");
    event.preventDefault();
  } else if (phonePassword.value == "") {
    alert("Please type your Password");
    event.preventDefault();
  } else if (phonePassword_value != phonePassword_confirm_value) {
    alert("Password confirm does not match");
    event.preventDefault();
  } else if (phonePassword_confirm.value == "") {
    alert("Please type Password confirm");
    event.preventDefault();
  } else if (phonePHONE.value == "") {
    alert("Please type Phone");
    event.preventDefault();
  } else if (!/^[09]{2}[0-9]{8}$/.test(phonenumber)) {
    alert("The Phone number is incorrect, please re-fill");
    event.preventDefault();
  }
});
// 手機換頁
let phonedisplaylogin = document.querySelector("#phonedisplaylogin");
let phonein = document.querySelector("#phonelogin");
let phonelog = document.querySelector("#phonelog");
let phonesignin = document.querySelector("#phonesignin");
let phonedisplaysignin = document.querySelector("#phonedisplaysignin");
phonedisplaylogin.addEventListener("click", function () {
  phonesignin.setAttribute("style", "display:none");
  phonelog.setAttribute("style", "display:auto");
});
phonedisplaysignin.addEventListener("click", function () {
  phonelog.setAttribute("style", "display:none");
  phonesignin.setAttribute("style", "display:auto");
});
