new Vue({
  el: "#exhibition_wrapper",
  data() {
    return {
      EXHIBITIONS: {},
    };
  },
  methods: {
    exContent() {
      $(".ms-section")
        .find("li")
        .click(function () {
          //console.log(this);
          $(this).addClass("on");
          $(this).siblings().removeClass("on");

          let tabs_itemAll = $(this).index() + 1;
          //console.log(tabs_itemAll);
          $(".tab_item").eq(tabs_itemAll).show();
          $(".tab_item").eq(tabs_itemAll).siblings().hide();
        });
    },
  },
  created() {
    fetch("./php/exhibition/Select_front_Exhibition.php")
      .then((res) => res.json())
      .then((body) => {
        this.EXHIBITIONS = {
          1: body.filter((e) => e.EXHIBITION_STYLE_ID === "1"),
          2: body.filter((e) => e.EXHIBITION_STYLE_ID === "2"),
          3: body.filter((e) => e.EXHIBITION_STYLE_ID === "3"),
        };
      });
  },
});

new Vue({
  el: "#app_fullpage",
  data() {
    return {
      EXHIBITIONS: {},
      options: {
        afterLoad: this.afterLoad,
        navigation: false,
        anchors: ["page1", "page2", "page3"],
        sectionsColor: ["#293241", "#293241", "#293241"],
      },
    };
  },
  methods: {
    afterLoad: function () {
      //console.log('After load')
    },
  },
  created() {
    fetch("./php/exhibition/Select_front_Exhibition.php")
      .then((res) => res.json())
      .then((body) => {
        this.EXHIBITIONS = {
          1: body.filter((e) => e.EXHIBITION_STYLE_ID === "1"),
          2: body.filter((e) => e.EXHIBITION_STYLE_ID === "2"),
          3: body.filter((e) => e.EXHIBITION_STYLE_ID === "3"),
        };
      });
  },
});

$(document).ready(function () {
  $("#multiscroll").multiscroll({
    licenseKey: "sss",
    sectionsColor: ["#583B75", "#293241", "#293241"],
    anchors: ["first", "second", "third"],
    menu: "#menu",
    navigation: false,
    navigationTooltips: ["One", "Two", "Three"],
    loopBottom: true,
    loopTop: true,
    loop: false,
    sectionSelector: ".section",
    leftSelector: ".left",
    rightSelector: ".right",
    css3: true,
  });
});

// <!-- Initialize Swiper -->
const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    320: {
      slidesPerView: 1,
    },
  },
});
