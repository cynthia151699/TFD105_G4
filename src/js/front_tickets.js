//====================彈窗====================//

// 按下新增按鈕出現新增彈窗
$(".-current").on("click", function () {
  //console.log('新增');

  // 開啟底部半透明mask
  $("div.lightBox").css("display", "block");
  $("div.mask").css("display", "block");

  $("div.wrapperTicketsCur").css("display", "block");
  $("div.past_mainblock").css("display", "none");
});

//過往
$(".-past").on("click", function () {
  //console.log('新增');

  // 開啟底部半透明mask
  $("div.lightBox").css("display", "block");
  $("div.mask").css("display", "block");

  $("div.past_mainblock").css("display", "block");
  $("div.wrapperTicketsCur").css("display", "none");
});

// 點擊mask 須也能關閉彈窗
$("div.mask").on("click", function () {
  $("div.lightBox").css("display", "none");
});

//取消按鈕
$("a.defaultBtn").on("click", function (e) {
  //console.log('aaa');
  e.preventDefault();
  $("div.lightBox").fadeOut();
});

// <!-- Initialize Swiper -->

var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  loop: false,
  paginationClickable: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    320: {
      slidesPerView: 1,
    },
  },
});
