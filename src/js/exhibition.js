$(document).ready(function() {
    $('#myContainer').multiscroll({
        sectionsColor: ['#583B75', '#293241', '#293241'],
        anchors: ['first', 'second', 'third'],
        menu: '#menu',
        navigation: true,
        navigationTooltips: ['One', 'Two', 'Three'],
        loopBottom: true,
        loopTop: true,
        sectionSelector: '.section',
		leftSelector: '.left',
		rightSelector: '.right',
        css3: true     
    });
});

$(function(){
    $(".ms-section >ul >li").click(function(){
        //console.log(this);
        $(this).addClass("on");
        $(this).siblings().removeClass("on");

        let tabs_itemAll=$(this).index();
        //console.log(tabs_itemAll);
        $(".tabs_item").eq(tabs_itemAll).show();
        $(".tabs_item").eq(tabs_itemAll).siblings().hide();
    });
});
