"use strict";

// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {});

// 變數宣告
// var g1 = document.getElementById('g1');
// var g2 = document.getElementById('g2');
// var g3 = document.getElementById('g3');
// var g4 = document.getElementById('g4');
// var g5 = document.getElementById('g5');
// var g1_1 = document.getElementById('g1_1');
// var g2_1 = document.getElementById('g2_1');
// var g3_1 = document.getElementById('g3_1');
// var g4_1 = document.getElementById('g4_1');
// var g5_1 = document.getElementById('g5_1');

// console.log(document.getElementsByClassName("swiper-slide-active")[1]);
// let active1 = document.getElementsByClassName("swiper-slide-active")[0];
// console.log(active1);
// let active2 = document.getElementsByClassName("swiper-slide-active")[1];
var active = document.querySelectorAll('.swiper-slide-active');
// console.log(active);

var ddd = document.querySelectorAll("img");
// console.log(ddd);
// console.log(ddd.length);
// console.log(ddd[0]);

var imgTop = active[0].querySelector('img');
// ddd.findIndex(function(){
    // img === imgTop
// });

// Array.prototype.findIndex
// let index = -1;

for (let i = 0; i < ddd.length; i++) {
    if (ddd[i] === imgTop) {
        let index = i;
        break;
    }
}

console.log(index);






// ddd.forEach(function(value,index,arr){
//     console.log(index);
// });

// document.addEventListener("drag", function(){
//     if (ddd[0] && ddd[5] == )
// });


// if active1 active2 在這兩個class的時候做動作
// document.addEventListener("click", function(){
//     if (active1);
// });


// switch
// case 1
// break

// else
// congrats

// active1.addEventListener("click", function(){
//     if ( active2.ddd[0] - actixve1.ddd[5] == 5){
//         console.log(active2.ddd.length);
//         console.log(active1.ddd.length);
//         alert(congrats);
//     } else {
//         alert("continue");
//     }
// });

// if ("g1" == "g1_1")
// actvie1#g1 == active#g1_1

// ddd[0]-ddd[9]

// ddd[
//     {
//         img0,
//         img1,
//         img2,
//         img3,
//     },
// ]

//抓到img陣列，準備跑迴圈做配對
// let ccc = document.getElementsByTagName("img");
// console.log(ccc[5]);
// document.addEventListener("click", function(e){

    // for (let i = 0; i < ccc.length; i++) {
        // console.log(i);
        // if (i == 1 && i == 6) {
            // alert("congrats!");
        // }else{}

        // var bbb = ccc[0].getAttribute("title");
        // if (title_text != null) {
        //     alert(title_text);
        // }
    // };

// });

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