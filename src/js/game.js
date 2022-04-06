"use strict";

// <!-- Initialize Swiper -->
let upperImgId = ""; // 紀錄上邊圖片ID
let lowerImgId = "";// 紀錄下邊圖片ID
const swiper = new Swiper('.mySwiper', {
    loop: true,
    // slidesPerGroup: 1,
    // speed: 700,
    on: {
        init: function () {
            // console.log('swiper initialized');
        },
        slideChangeTransitionEnd: function (e) { // 圖片改變完後執行下面function
            let slides = e.slides; // 取得所有的圖片
            for (let i in slides) { //看圖片資訊
                if ("swiper-slide swiper-slide-active" == slides[i].className) { //當圖片為當前圖片時
                    let elementId = slides[i].id; //取得圖片id
                    if (elementId.includes("_")) { // id裡面有_ 表示是下邊圖片
                        lowerImgId = elementId; //紀錄下面圖片
                    } else { // upper images
                        upperImgId = elementId; //紀錄上面圖片
                    }
                    let disappear1 = document.getElementsByClassName("swiper")[0];
                    let disappear2 = document.getElementsByClassName("swiper")[1];
                    let appear = document.getElementsByClassName("congrats")[0];
                    if (upperImgId != "" && lowerImgId != "" && lowerImgId.includes(upperImgId)) { //符合需求
                        alert("Congrats");
                        disappear1.style = "display:none";
                        disappear2.style = "display:none;";
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


// const swiper = new Swiper(".mySwiper", {
//     loop: true,
//     slidesPerGroup: 3,
//     speed: 700,
// });

// let rotation = document.getElementsByClassName('rotate')[0];
// // console.log(rotation);

// rotation.addEventListener("click", function (e) {
//     e.preventDefault();
//     const swiper = new Swiper(".mySwiper", {
//         loop: true,
//         slidesPerGroup: 1,
//         speed: 50000,

//     });
// });