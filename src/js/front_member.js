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
// // 關閉
// let member_Terms_Del = document.querySelector(".memberTermsDel");

// // 彈窗
// let member_Pop_UP = document.querySelector(".memberPopUp");

// // 彈窗開啟
// member_Terms.addEventListener('click', function (e) {
// 	e.preventDefault;
// 	member_Pop_UP.style.display = "block";
// 	member_Mask.style.display = "block";
// })

// // 彈窗關閉
// member_Terms_Del.addEventListener('click', function () {
// 	e.preventDefault;
// 	member_Pop_UP.style.display = "none";
// 	member_Mask.style.display = "none";
// })





//  選單左右移動 
document
    .querySelector("#img__btn")
    .addEventListener("click", function () {
        document
            .querySelector(".cont")
            .classList.toggle("s--signup");
    });



// new Vue({
//     el: '#member',
//     data: {
//         isShow: true
//     },
//     methods: {
//         toggle: function() {
//             this.isShow = !this.isShow;
//         }
//     },
// });
$('a.memberTerms').on("click",function(e){
    e.preventDefault();
    $('article.memberPopUp').css("display", "block");
})

$('a.memberTermsDel').on("click",function(e){
    e.preventDefault();
    $('article.memberPopUp').css("display", "none");
    
})
$('a.forgot-pass').on("click",function(e){
    e.preventDefault();
    // console.log("aaa");
    $('article.forgetChange').css("display", "block");
    $('div.cont').css("display", "none");
    $('div.phone').css("display", "none");
});

// $('article.forgetChange button.member.fb-btn').on("click",function(e){
//     e.preventDefault();
//     // console.log("bbb");
//     $('article.forgetSubmit').css("display", "block");
// })





// Emailforgetcode  && login check


    const btn = document.getElementById('forgetmail');
    let forgermail = $('#mail');
    document.getElementById('form')
        .addEventListener('submit', function (event) {
            event.preventDefault();

            if ($(forgermail).val() != '') {
                var that = this;
                $.ajax({
                    type: 'POST',
                    url: './php/member/Memberforgetemail.php',
                    dataType: 'json',
                    async: false,
                    data: {
                        mail: forgermail.val(),
                    },
                    success: function (data) {
                        let passwordvalue = data[0].PASSWORD;
                        let PASSWORDcode = document.getElementById("PASSWORD");
                        PASSWORDcode.value = passwordvalue;
                        const serviceID = 'default_service';
                        const templateID = 'template_1idmmrm';
                        emailjs.sendForm(serviceID, templateID, that)
                            .then((event) => {
                                alert(
                                    'The password has already sent into your email address, please check it.'
                                );
                                window.location.href = 'front_member.html';
                            }, );
                    }
                })
            } else {
                alert("Please type your mail");
            }
            let PASSWORD = document.getElementById("PASSWORD");
            if ($(forgermail).val() != '' && PASSWORD.value == '') {
                alert("No such registered mail");
            }
        });

    let inputcode = document.querySelector('#member_button');
    inputcode.addEventListener("click", function () {
        let NAME = document.querySelector('#name');
        let member_mail = document.querySelector('#member_mail');
        let Password = document.querySelector('#Passwordcheck');
        let Password_confirm = document.querySelector('#Password_confirm');
        let PHONE = document.querySelector('#PHONE');
        let number = document.getElementById('PHONE').value;
        let check = document.getElementById("check").checked;
        let Password_value = Password.value;
        let Password_confirm_value = Password_confirm.value;
        if (NAME.value == '') {
            alert("Please type your name");
            event.preventDefault();
        } else if (member_mail.value == '') {
            alert("Please type your mail");
            event.preventDefault();
        } else if (Password.value == '') {
            alert("Please type your Password");
            event.preventDefault();
        } else if (Password_value != Password_confirm_value) {
            alert("Password confirm does not match");
            event.preventDefault();
        } else if (Password_confirm.value == '') {
            alert("Please type Password confirm");
            event.preventDefault();
        } else if (PHONE.value == '') {
            alert("Please type Phone");
            event.preventDefault();
        }else if (!(/^[09]{2}[0-9]{8}$/.test(number))) {
            alert("The Phone number is incorrect, please re-fill");
            event.preventDefault();
        } else if (check == false ) {
            alert("Please agree Terms& Conditions and Privacy Policy");
            event.preventDefault();
        }
    })

  let signinputcode = document.querySelector('#signlogin');
  signinputcode.addEventListener("click", function () {
    let signmail = document.querySelector('#signmail');
    console.log(signmail);
    let signpassword = document.querySelector('#signpassword');
    console.log(signpassword);
    if (signmail.value == '') {
            alert("Please type your mail");
            event.preventDefault();
        } else if (signpassword.value == '') {
            alert("Please type your Password");
            event.preventDefault();
        }
  });


// 手機
let phonelogin = document.querySelector('#phonelogin');
phonelogin.addEventListener("click", function () {
    let signmail = document.querySelector('#phonemail');
    console.log(signmail);
    let signpassword = document.querySelector('#phonepassword');
    console.log(signpassword);
    if (phonemail.value == '') {
            alert("Please type your mail");
            event.preventDefault();
        } else if (phonepassword.value == '') {
            alert("Please type your Password");
            event.preventDefault();
        }
  });

  let phonecode = document.querySelector('#phone_button');
  console.log(phonecode);
        phonecode.addEventListener("click", function () {
            console.log("object");
        let phoneNAME = document.querySelector('#phonename');
        let phonemember_mail = document.querySelector('#phonemember_mail');
        let phonePassword = document.querySelector('#phonePasswordcheck');
        let phonePassword_confirm = document.querySelector('#phonePassword_confirm');
        let phonePHONE = document.querySelector('#cellphonePHONE');
        let phonenumber = document.getElementById('cellphonePHONE').value;
        // let phonecheck = document.getElementById("phonecheck").checked;
        let phonePassword_value = phonePassword.value;
        let phonePassword_confirm_value = phonePassword_confirm.value;
        if (phoneNAME.value == '') {
            alert("Please type your name");
            event.preventDefault();
        } else if (phonemember_mail.value == '') {
            alert("Please type your mail");
            event.preventDefault();
        } else if (phonePassword.value == '') {
            alert("Please type your Password");
            event.preventDefault();
        } else if (phonePassword_value != phonePassword_confirm_value) {
            alert("Password confirm does not match");
            event.preventDefault();
        } else if (phonePassword_confirm.value == '') {
            alert("Please type Password confirm");
            event.preventDefault();
        } else if (phonePHONE.value == '') {
            alert("Please type Phone");
            event.preventDefault();
        }else if (!(/^[09]{2}[0-9]{8}$/.test(phonenumber))) {
            alert("The Phone number is incorrect, please re-fill");
            event.preventDefault();
        } 

    })





