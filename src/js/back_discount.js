
        new Vue({

            el: '#discount_wrapper',
            data() {
                return {
                    DISCOUNT_NAME: '',
                    DISCOUNT_CONTENT: '',
                    DISCOUNT_CODE: '',
                    DISCOUNT_STATUS: '',
                    DISCOUNT_DATE: '',
                    DISCOUNTS: [],
                    search: '',
                    EDIT: {
                        ID: '',
                        NAME: '',
                        CONTENT: '',
                        CODE: '',
                        STATUS: '',
                        DATE: '',
                    },
                }
            },
            methods: {

                //CREATE新增
                discount_add() {
                    if (this.DISCOUNT_NAME != "" && this.DISCOUNT_CONTENT != "") {
                        // alert(this.DISCOUNT_NAME)
                        fetch("./php/discount/discount_create.php", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            mode: "cors",
                            body: JSON.stringify({
                                DISCOUNT_NAME: this.DISCOUNT_NAME,
                                DISCOUNT_CONTENT: this.DISCOUNT_CONTENT,
                                DISCOUNT_CODE: this.DISCOUNT_CODE,
                                DISCOUNT_STATUS: this.DISCOUNT_STATUS,
                            }),
                        })
                            .then(resp => resp.json())
                        // .then((body)=>{
                        //     const { successful} = body ;
                        //     console.log(body);

                        // })
                        discount("<strong>新增成功</strong>", "success");
                        $(".popUp").css("display", "none");
                        let reset = document.querySelector(".reset")
                        reset.reset()
                    } else {
                        discount("<strong>請輸入內容</strong>", "warning");
                    }
                },

                //按鈕新增裡的取消button，jQuery
                discount_cancel() {
                    discount("<strong>已取消</strong>", "success", "");
                    $(".popUp").css("display", "none");
                },

                //search
                discount_search() {
                    if (this.search != "") {
                        fetch("./php/discount/discount_read.php", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                KEY: this.search,
                            })
                        })
                            .then(res =>
                                res.json()
                            )
                            .then(res => {
                                //console.log(res);
                                this.DISCOUNTS = res;
                            })

                            .catch(reason => discount("<strong>查無這筆資料</strong>", "warning"));
                    } else {
                        discount("<strong>請輸入內容</strong>", "warning");

                    }
                },

                // 新增裡的新增button，jQuery
                openBoxAdd() {
                    $('div.popUp').css("display", "block");
                    $('div.mask').css("display", "block");

                    // 只顯示指定彈窗
                    $('.-add').css("display", "block");
                    $('.-edit').css("display", "none");
                },

                // 編輯資料的編輯button
                openBoxEdit(ID) {
                    //jQuery的顯示
                    // alert(ID);
                    $('div.popUp').css("display", "block");
                    $('div.mask').css("display", "block");

                    // 只顯示指定彈窗
                    $('.-add').css("display", "none");
                    $('.-edit').css("display", "block");

                    //呼叫PHP跟SQL要檔案
                    fetch("./php/discount/discount_readID.php", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        mode: "cors",
                        body: JSON.stringify({
                            ID: ID, //第一個id等下丟資料庫，第二個是找vue
                        }),
                    })
                        .then(resp => resp.json()) //為謀只能小寫?
                        .then(resp => {
                            // console.log(resp);
                            this.EDIT.ID = resp[0]['ID'];
                            this.EDIT.NAME = resp[0]['NAME'];
                            this.EDIT.CONTENT = resp[0]['CONTENT'];
                            this.EDIT.CODE = resp[0]['CODE'];
                            this.EDIT.STATUS = resp[0]['STATUS'];
                            this.EDIT.DATE = resp[0]['DATE'];
                        })
                },

                // UPDATE更新
                discount_update(ID) {
                    // alert(ID);
                    if (this.EDIT.NAME != "" && this.EDIT.CONTENT != "" && this.EDIT.CODE != "") {
                        // alert('type it!');
                        fetch("./php/discount/discount_update.php", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            mode: "cors",
                            body: JSON.stringify({
                                ID_NEW: this.EDIT.ID,
                                NAME_NEW: this.EDIT.NAME,
                                CONTENT_NEW: this.EDIT.CONTENT,
                                CODE_NEW: this.EDIT.CODE,
                                STATUS_NEW: this.EDIT.STATUS,
                                DATE_NEW: this.EDIT.DATE,
                            }),
                        })
                            .then(res => res.json())
                        discount("<strong>修改成功</strong>", "success");
                        $(".popUp").css("display", "none");
                        let reset = document.querySelector(".reset")
                        reset.reset()
                    } else {
                        discount("<strong>請輸入內容</strong>", "warning");
                    }
                },



            },
            created() { //show資訊出來，當網頁開啟時馬上執行以下內容，撈出discount資料
                fetch("./php/discount/discount_show.php")
                    .then(res => res.json()) //res回傳，後面都要一樣
                    .then(res => {
                        // console.log('ddddd', res);
                        this.DISCOUNTS = res
                    })
            },
            // updated() { //show資訊出來，當網頁開啟時馬上執行以下內容，撈出discount資料
            //     fetch("./discount_show.php")
            //         .then(res => res.json()) //res回傳，後面都要一樣
            //         .then(res => {
            //             // console.log('ddddd', res);
            //             this.DISCOUNTS = res
            //         })
            // },
        })





function discount(msg, icon, html) {
    Swal.fire({
        title: msg,
        icon: icon,
        html: html,

        showConfirmButton: false, // 確認按鈕（預設會顯示不用設定）
        confirmButtonText: '', //　按鈕顯示文字
        confirmButtonAriaLabel: '', // 網頁無障礙用
        confirmButtonColor: '#75706b', // 修改按鈕色碼

        // 使用同確認按鈕
        // showDenyButton: true, // 否定按鈕
        showCancelButton: false, // 取消按鈕

        buttonsStyling: false, // 是否使用sweetalert按鈕樣式（預設為true）
    })
}





// AJAX+JS查詢表單discount_read

//     const maintable = document.querySelector(".maintable");
//     const url = './discount_readID.php';


//     fetch(url).then(response => response.json()
//         .then(obj => {
//             // console.log(obj)
//             obj.forEach((item, i) => {
//                 maintable.insertAdjacentHTML('beforeend', `<tr>
//     <td>${item.ID}</td>
//     <td>${item.NAME}</td>
//     <td>${item.CONTENT}</td>
//     <td>${item.CODE}</td>
//     <td>${item.STATUS}</td>
//     <td>${item.DATE}</td>
//     <td><button>編輯</button></td>
//     </tr>`)
//             });

//         })

//     )
