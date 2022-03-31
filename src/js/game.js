"use strict";

// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {});

// 變數宣告
var g1 = document.getElementById('g1');
var g2 = document.getElementById('g2');
var g3 = document.getElementById('g3');
var g4 = document.getElementById('g4');
var g5 = document.getElementById('g5');
var g1_1 = document.getElementById('g1_1');
var g2_1 = document.getElementById('g2_1');
var g3_1 = document.getElementById('g3_1');
var g4_1 = document.getElementById('g4_1');
var g5_1 = document.getElementById('g5_1');

//抓到img陣列，準備跑迴圈做配對
let ccc = document.getElementsByTagName("img");
// console.log(ccc[5]);
for (let i = 0; i < ccc.length; i++) {
    if (i == 1 && 6) {
        alert("congrats!");
    }else{

    }
};

// transform:translate3d (0px, 0px, 0px); //0 5
// transform:translate3d (-755px, 0px, 0px); //1 6
// transform:translate3d (-1510px, 0px, 0px); //2 7
// transform:translate3d (-2265px, 0px, 0px); //3 8
// transform:translate3d (-3020px, 0px, 0px); //4 9


//亂數
// let rotation = document.getElementsByClassName("rotate");
// console.log(rotation);
// rotation.addEventListener("click", function(array){
    // array.sort(() => Math.random() - 0.5);
// });