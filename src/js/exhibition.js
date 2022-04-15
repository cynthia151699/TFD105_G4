$(document).ready(function() {
    $('#multiscroll').multiscroll({
        licenseKey: 'sss',
        sectionsColor: ['#583B75', '#293241', '#293241'],
        anchors: ['first', 'second', 'third'],
        menu: '#menu',
        navigation: false,
        navigationTooltips: ['One', 'Two', 'Three'],
        loopBottom: true,
        loopTop: true,
        loop: false,
        sectionSelector: '.section',
		leftSelector: '.left',
		rightSelector: '.right',
        css3: true     
    });
});

var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#293241', '#293241'],
    lazyLoad: true
});


// <!-- Initialize Swiper -->
const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    loop: false,
    pagination: {
    el: '.swiper-pagination',
    clickable :true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        320: {
            slidesPerView: 1,
        }

    }
});

$(function(){
    $(".ms-section").find("li").click(function(){
        //console.log(this);
        $(this).addClass("on");
        $(this).siblings().removeClass("on");

        let tabs_itemAll = $(this).index();
        console.log(tabs_itemAll);
        $(".tab_item").eq(tabs_itemAll).show();
        $(".tab_item").eq(tabs_itemAll).siblings().hide();
    });
});




