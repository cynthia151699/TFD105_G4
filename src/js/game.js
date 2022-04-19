"use strict";

// 一開始進來自動亂數
window.onload = function () {
    for (let i = 0; i < swiper.length; i++) {
        swiper[i].slideTo(Math.floor(Math.random() * 10));
    }
};

//rotation亂數
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
            const active = document.querySelectorAll('.swiper-slide-active'); //當前畫面作用的class
            upperImgId = active[0]?.id; //接上面的圖id，?如果是空值，往後就不執行
            lowerImgId = active[1]?.id; //接下面的圖id
            if (lowerImgId?.startsWith(upperImgId)) { //如果下面的id有對應到上面的id
                setTimeout(() => {
                    success();
                }, 300);
            };
            function success() {
                Swal.fire({ //sweetAlert2彈窗套件
                    title: 'Congrats!',
                    icon: 'success',
                    background: '#161829',
                    confirmButtonColor: '#F29966',
                    confirmButtonText: 'OK!',
                    timer: '5000',
                });
                let disappear = document.querySelectorAll(".swiper");
                let appear = document.getElementsByClassName("congrats")[0];
                for (let i = 0; i < disappear.length; i++) {
                    disappear[i].style = "display:none"; //成功後上下swiper套件要消失
                }
                appear.style = "display:flex"; //成功後祝賀層要出來
            }
        }
    }
});