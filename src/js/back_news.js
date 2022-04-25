console.log("news");

function news(msg, icon, html) {
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

new Vue({
    el: '#news_wrapper',
    data() {
        return {
            image: '',
            NEWS_NAME: '',
            NEWS_PIC: '',
            NEWS_CONTENT: '',
            NEWS_STATUS: '',
            NEWS: [],
            search: '',
            NEW: {
                NEWS_ID:'',
                NEWS_NAME: '',
                NEWS_PIC: '',
                NEWS_CONTENT: '',
                NEWS_STATUS: '',
            }
        }
    },
    // data:{
    //     news:[],
    // },

    methods: {
        news_add() {
            if (this.NEWS_NAME != "" && this.NEWS_CONTENT != "") {
                fetch("./php/news/AddNews.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: "cors",
                    body: JSON.stringify({
                        NEWS_NAME: this.NEWS_NAME,
                        NEWS_PIC: this.NEWS_PIC,
                        NEWS_CONTENT: this.NEWS_CONTENT,
                        NEWS_STATUS: this.NEWS_STATUS,

                    }),

                })
                    .then(resp => resp.json())
                // .then((body)=>{
                //     const { successful} = body ;
                //     console.log(body);

                // })
                news("<strong>新增成功</strong>", "success");
                $(".popUp").css("display", "none");
                let reset = document.querySelector(".reset")
                reset.reset()
            } else {
                news("<strong>請輸入內容</strong>", "warning");
            }
        },
        news_cancel() {
            news("<strong>已取消</strong>", "success", "");
            $(".popUp").css("display", "none");
        },
        search_News() {
        if(this.search !=""){
            fetch("./php/news/SearchNews.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // mode: "cors",
                body: JSON.stringify({
                    KEY: this.search,

                }),

            })
                .then(res =>
                    res.json()
                    // if(response.ok){
                    //     console.log(response);
                    //     return response.json();
                    // }else{
                    //     alert('false')
                    // }
                )

                .then(res => {
                    console.log(res);
                    this.NEWS = res;
                })
                .catch(res => news("<strong>查無這筆資料</strong>", "warning"))
        }else{
            news("<strong>請輸入內容</strong>", "warning");
        }
        },
        news_update(ID) {
            // alert(ID)
            // console.log(this.NEW);
            // console.log(this.NEW.NEWS_STATUS);
            // let newa = $('#RESS').val()
            // alert(newa)
            if (this.NEW.NEWS_NAME != "" && this.NEW.NEWS_CONTENT != "") {
                fetch("./php/news/UpdateNews.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: "cors",
                    body: JSON.stringify({
                        UP_ID: this.NEW.NEWS_ID,
                        UP_NAME: this.NEW.NEWS_NAME,
                        UP_PIC: this.NEW.NEWS_PIC,
                        UP_CONTENT: this.NEW.NEWS_CONTENT,
                        UP_STATUS: this.NEW.NEWS_STATUS,

                    }),

                }).then(resp => resp.json())
                // .then((body)=>{
                //     const { successful} = body ;
                //     console.log(body);
                // })
                    news("<strong>新增成功</strong>", "success");
                    $(".popUp").css("display", "none");
                    let reset = document.querySelector(".reset")
                    reset.reset()
            } else {
                    news("<strong>請輸入內容</strong>", "warning");
            }
        },
        fileChange(e) {
            let file = e.target.files.item(0); //取得File物件
            let reader = new FileReader(); //建立FileReader 監聽 Load 事件
            reader.addEventListener('load', this.imageLoader);
            reader.readAsDataURL(file);

            this.NEWS_PIC = `./img/index/${file.name}`;
        },
        fileChangeEdit(e) {
            let file = e.target.files.item(0); //取得File物件
            let reader = new FileReader(); //建立FileReader 監聽 Load 事件
            reader.addEventListener('load', this.imageLoader);
            reader.readAsDataURL(file);

            this.NEW.NEWS_PIC = `./img/index/${file.name}`;
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

            // 只顯示指定彈窗
            $('.-add').css("display", "none");

            $('.-edit').css("display", "block");



            // alert(id)
            fetch("./php/news/SelectNewsID.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // mode: "cors",
                body: JSON.stringify({ newsId: id })

            })
                .then(res =>
                    res.json()
                )
                .then(res => {
                    console.log(res)
                    this.NEW.NEWS_ID = res[0]['ID']
                    this.NEW.NEWS_NAME = res[0]['NEWS_NAME']
                    this.NEW.NEWS_PIC = res[0]['NEWS_PIC']
                    this.NEW.NEWS_CONTENT = res[0]['NEWS_CONTENT']
                    this.NEW.NEWS_STATUS = res[0]['NEWS_STATUS']
                })
        },

    },

    created() {
        fetch("./php/news/SelectNews.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
            // mode: "cors",
            // body: JSON.stringify({
            //     NEWS_NAME: this.NEWS_NAME,
            //     NEWS_PIC:this.NEWS_PIC,
            //     NEWS_CONTENT: this.NEWS_CONTENT,
            //     NEWS_STATUS: this.NEWS_STATUS,

            // }),

        })
            .then(res =>
                res.json()
                // if(response.ok){
                //     console.log(response);
                //     return response.json();
                // }else{
                //     alert('false')
                // }
            )

            .then(res => {
                // console.log(res);
                this.NEWS = res;
            })

    },

})
