new Vue({
    el: '#event_wrapper',
    data() {
        return {
            image: '',
            EXHIBITION_STYLE: '',
            EVENT_NAME: '',
            EXHIBITION_DATE: '',
            EXHIBITION_PIC: '',
            EXHIBITION_CONTENT: '',
            EXHIBITIONS: [],
            search: '',
            EDIT:{
                ID: '',
                EXHIBITION_STYLE: '',
                EVENT_NAME: '',
                EXHIBITION_DATE: '',
                EXHIBITION_PIC: '',
                EXHIBITION_CONTENT: '',
            },
        }
    },
    // data:{
    //     EXHIBITIONS:[],
    // },
    methods: {
        event_add() {
            if (this.EVENT_NAME != "" && this.EXHIBITION_CONTENT != "") {
                fetch("./php/exhibition/AddEvent.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: "cors",
                    body: JSON.stringify({
                        EXHIBITION_STYLE: this.EXHIBITION_STYLE,
                        EVENT_NAME: this.EVENT_NAME,
                        EXHIBITION_DATE: this.EXHIBITION_DATE,
                        EXHIBITION_PIC: this.EXHIBITION_PIC,
                        EXHIBITION_CONTENT: this.EXHIBITION_CONTENT,
                    }),

                }).then(resp => resp.json())
                //.then(resp => {this.EXHIBITIONS = resp}) 

                event("<strong>新增成功</strong>", "success");
                $(".popUp").css("display", "none");
                let reset = document.querySelector(".reset")
                reset.reset()
            } else {
                event("<strong>請輸入內容</strong>", "warning");
            }
        },

        event_cancel() {
            event("<strong>已取消</strong>", "success", "");
            $('.popUp').css("display", "none");

            this.EXHIBITION_STYLE = '',
            this.EVENT_NAME = '',
            this.EXHIBITION_DATE = '',
            this.EXHIBITION_PIC = '',
            this.EXHIBITION_CONTENT = ''
        },
        search_Event(){
            if(this.search != "" ){
                fetch("./php/exhibition/SearchEvent.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body:JSON.stringify({
                        KEY: this.search,
                    })
                })
                .then(res =>
                    res.json()
                )
                .then(res => {
                    //console.log(res);
                    this.EXHIBITIONS = res;
                })
                
                .catch(reason => event("<strong>查無這筆資料</strong>", "warning"));

                

            }else{
                event("<strong>請輸入內容</strong>", "warning");
            }
        },

        event_update(ID){
            //alert(ID);
            if (this.EDIT.EVENT_NAME != "" && this.EDIT.EXHIBITION_CONTENT != "") {
                fetch("./php/exhibition/UpdateEvent.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: "cors",
                    body: JSON.stringify({
                        UP_ID: this.EDIT.ID,
                        UP_EXHIBITION_STYLE: this.EDIT.EXHIBITION_STYLE,
                        UP_EVENT_NAME: this.EDIT.EVENT_NAME,
                        UP_EXHIBITION_DATE: this.EDIT.EXHIBITION_DATE,
                        UP_EXHIBITION_PIC: this.EDIT.EXHIBITION_PIC,
                        UP_EXHIBITION_CONTENT: this.EDIT.EXHIBITION_CONTENT,
                    }),

                })
                .then(res => res.json())

                event("<strong>修改成功</strong>", "success");
                $(".popUp").css("display", "none");
                let reset = document.querySelector(".reset")
                reset.reset()
            } else {
                event("<strong>請輸入內容</strong>", "warning");
            }
        },

        fileChange(e) {
            let file = e.target.files.item(0); //取得File物件
            let reader = new FileReader(); //建立FileReader 監聽 Load 事件
            reader.addEventListener('load', this.imageLoader);
            reader.readAsDataURL(file);
            this.EXHIBITION_PIC = `./img/exhibition/${file.name}`;
        },
        fileChangeEdit(e){
            let file = e.target.files.item(0); //取得File物件
            let reader = new FileReader(); //建立FileReader 監聽 Load 事件
            reader.addEventListener('load', this.imageLoader);
            reader.readAsDataURL(file);
            this.EDIT.EXHIBITION_PIC = `./img/exhibition/${file.name}`;
        },
        imageLoader(event) {
            this.image = event.target.result;
        },

        

        openBoxAdd() {
            $('div.popUp').css("display", "block");
            $('div.mask').css("display", "block");

            // 只顯示指定彈窗
            $('.-add').css("display", "block");

            $('.-edit').css("display", "none");
        },


        openBoxEdit(id) {
            $('div.popUp').css("display", "block");
            $('div.mask').css("display", "block");

            $('.-add').css("display", "none");

            // 只顯示指定彈窗
            $('.-edit').css("display", "block");


            //alert(id);

            fetch("./php/34/SelectEventID.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({ eventId: id })
            })
            .then(res =>
                res.json()
            )
            .then(res => {
                this.EDIT.ID = res[0]['ID']
                this.EDIT.EXHIBITION_STYLE = res[0]['EXHIBITION_STYLE']
                this.EDIT.EVENT_NAME = res[0]['EVENT_NAME']
                this.EDIT.EXHIBITION_DATE = res[0]['EXHIBITION_DATE']
                this.EDIT.EXHIBITION_PIC = res[0]['EXHIBITION_PIC']
                this.EDIT.EXHIBITION_CONTENT = res[0]['EXHIBITION_CONTENT']
            })


        },
        
    },

    created() {
        fetch("./php/exhibition/SelectEvent.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(res =>
            res.json()
        )
        .then(res => {
            //console.log(res);
            this.EXHIBITIONS = res;
        })

    },
    // updated() {
    //     fetch("./php/34/SelectEvent.php", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         }
    //     })
    //     .then(res =>
    //         res.json()
    //     )
    //     .then(res => {
    //         //console.log(res);
    //         this.EXHIBITIONS = res;
    //     })

    // },
});


function event(msg, icon, html) {
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