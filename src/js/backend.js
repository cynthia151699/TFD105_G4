$('div.headerContainer button').on("click", function(){
    console.log('新增');
    $('div.popUp').css("display", "block");
    $('div.mask').css("display", "block");
    $('.-add').css("display", "block");
    $('.-edit').css("display", "none");
    $('.-store').css("display", "none");
});

$('#check').on("click", function(){
    console.log('aaa');
});

$('#search').on("click", function(){
    console.log('search');
});

$('div.tableContainer td button').on("click", function(e){
    console.log('編輯');
    e.preventDefault ();
    $('div.popUp').css("display", "block");
    $('div.mask').css("display", "block");
    $('.-edit').css("display", "block");
    $('.-add').css("display", "none");
    $('.-store').css("display", "none");
});

$('div.mask').on("click", function(){
    $('div.popUp').css("display", "none");
});