"use strict";


let rotation = document.getElementsByClassName('rotate')[0];
rotation.addEventListener("click", function (e) {
    // e.preventDefault();
    for (let i = 0; i < swiper.length; i++) {
        swiper[i].slideTo(Math.floor(Math.random() * 10));
    }
});

// <!-- Initialize Swiper -->
let upperImgId = ""; // 紀錄上邊圖片ID
let lowerImgId = ""; // 紀錄下邊圖片ID
const swiper = new Swiper('.mySwiper', {
    loop: true,
    grabCursor: true,
    // slidesPerGroup: 4,
    // speed: 500,
    on: {
        init: function () {
            // console.log('swiper initialized');
        },
        slideChangeTransitionEnd: function (e) { // 圖片改變完後執行下面function
            let slides = e.slides; // 取得所有的圖片
            for (let i in slides) { //看圖片資訊
                if ("swiper-slide game swiper-slide-active" == slides[i].className) { //當圖片為當前圖片時
                    let elementId = slides[i].id; //取得圖片id
                    if (elementId.includes("_")) { // id裡面有_ 表示是下邊圖片
                        lowerImgId = elementId; //紀錄下面圖片
                    } else { // upper images
                        upperImgId = elementId; //紀錄上面圖片
                    }
                    let disappear = document.querySelectorAll(".swiper");
                    let appear = document.getElementsByClassName("congrats")[0];
                    if (upperImgId != "" && lowerImgId != "" && lowerImgId.includes(upperImgId)) { //符合需求
                        alert("Congrats");
                        for (let i = 0; i < disappear.length; i++) {
                            disappear[i].style = "display:none";
                        }
                        appear.style = "display:flex";
                    }
                }
            }
        }
    },

});

// let disappear = document.querySelectorAll(".swiper");

// let disappear1 = document.getElementsByClassName("swiper")[0];
// disappear1.style = "display:none";
// let disappear2 = document.getElementsByClassName("swiper")[1];
// disappear2.style = "display:none;";
// let appear = document.getElementsByClassName("congrats")[0];
// appear.style = "display:flex";

// let rotation = document.getElementsByClassName('rotate')[0];
// console.log(rotation);

// rotation.addEventListener("click", function (e) {
//     e.preventDefault();
//     const swiper = new Swiper(".mySwiper", {
//         loop: true,
//         slidesPerGroup: 1,
//         speed: 5000,

//     });
// });

//亂數
// let rotation = document.getElementsByClassName("rotate")[0];
// console.log(rotation);
// rotation.addEventListener("click", function(array){
    // array.sort(() => Math.random() - 0.5);
// });



// const swiper = new Swiper(".mySwiper", {
//     loop: true,
//     slidesPerGroup: 3,
//     speed: 700,
// });

// 1. 速度問題
// 2. 陣列改css
// 3. 亂數的作法