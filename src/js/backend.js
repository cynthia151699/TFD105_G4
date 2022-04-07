// 按下新增按鈕出現新增彈窗
$('#add').on("click", function(){
    // console.log('新增');

    // 開啟底部半透明mask
    $('div.popUp').css("display", "block");
    $('div.mask').css("display", "block");

    // 只顯示指定彈窗
    $('.-add').css("display", "block");

    // 不顯示不需要的彈窗
    $('.-edit').css("display", "none");
    $('.-store').css("display", "none");
});

// 填寫關鍵字進搜尋框...
$('#check').on("click", function(){
    console.log('aaa');
});

// 按下搜尋按鈕...
$('#search').on("click", function(){
    console.log('search');
});

// 按下表格裡的編輯字樣們會出現編輯表格資料的彈窗
$('div.tableContainer td button').on("click", function(e){
    // console.log('編輯');
    e.preventDefault (); // 停止button 的submit 的預設事件

    // 開啟底部半透明mask
    $('div.popUp').css("display", "block");
    $('div.mask').css("display", "block");

    // 只顯示指定彈窗
    $('.-edit').css("display", "block");

    // 不顯示不需要的彈窗
    $('.-add').css("display", "none");
    $('.-store').css("display", "none");
});

// 點擊mask 須也能關閉彈窗
$('div.mask').on("click", function(){
    $('div.popUp').css("display", "none");
});

$('button.cancel').on("click", function(e){
    console.log('aaa');
    e.preventDefault (); // 停止button 的submit 的預設事件

    // 只顯示詢問彈窗
    $('.-store').css("display", "block");

    // 不顯示不需要的彈窗（用this 指定看看）
    $('.-add').css("display", "none");
    $('.-edit').css("display", "none");
});