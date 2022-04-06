var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#293241', '#293241'],
    lazyLoad: true
});


$("#btn_scroll").on("click", function(){
    console.log("ttt");
    $("#htmlScroll").animate({
      scrollTop: $(".currExhibition").offset().top
    }, 1000);
    
  });