new Vue({
    el: '#ticket_wrapper',
    data() {
        return {
            // ID: '',
            TICKET_NAME: '',
            TICKET_TYPE: '',
            TICKET_PRICE: '',
            TICKET_DATE: '',
            TICKET_STATUS: '',
            TICKETS: [],
            EDIT:{
                TICKET_NAME: '',
                TICKET_TYPE: '',
                TICKET_PRICE: '',
                TICKET_STATUS: '',
                TICKET_DATE: '',
            },
            search: '',
        }
    },

    methods: {
        ticket_add() {
            if (this.TICKET_NAME != "" && this.TICKET_STATUS != "") {
                fetch("./php/ticket/AddTicket.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: "cors",
                    body: JSON.stringify({
                        TICKET_NAME: this.TICKET_NAME,
                        TICKET_TYPE: this.TICKET_TYPE,
                        TICKET_PRICE: this.TICKET_PRICE,
                        TICKET_DATE: this.TICKET_DATE,
                        TICKET_STATUS: this.TICKET_STATUS,
                    }),

                }).then(resp => resp.json())
                
                ticket("<strong>新增成功</strong>", "success");
                $(".popUp").css("display", "none");
                let reset = document.querySelector(".reset")
                reset.reset()
            } else {
                ticket("<strong>請輸入內容</strong>", "warning");
            }
        },

        ticket_cancel() {
            ticket("<strong>已取消</strong>", "success", "");
            $('.popUp').css("display", "none");
        },

        search_Ticket(){
            if(this.search != ""){
                fetch("./php/ticket/SearchTicket.php", {
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
                    this.TICKETS = res;
                })
                
                .catch(reason => ticket("<strong>查無這筆資料</strong>", "warning"));

                let input_search_name = document.getElementById("check");

                //return input_search_name.replace(/^\s+|\s+$/gm,'');

            }else{
                ticket("<strong>請輸入內容</strong>", "warning");
            }
        },

        ticket_update(ID){
            //alert(ID);
            if (this.EDIT.TICKET_NAME != "" && this.EDIT.TICKET_CREATE != "") {
                fetch("./php/ticket/UpdateTicket.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: "cors",
                    body: JSON.stringify({
                        UP_ID: this.EDIT.ID,
                        UP_TICKET_NAME: this.EDIT.TICKET_NAME,
                        UP_TICKET_TYPE: this.EDIT.TICKET_TYPE,
                        UP_TICKET_PRICE: this.EDIT.TICKET_PRICE,
                        UP_TICKET_DATE: this.EDIT.TICKET_DATE,
                        UP_TICKET_STATUS: this.EDIT.TICKET_STATUS,     
                    }),

                })
                .then(res => res.json())

                ticket("<strong>修改成功</strong>", "success");
                $(".popUp").css("display", "none");
                let reset = document.querySelector(".reset")
                reset.reset()
            } else {
                ticket("<strong>請輸入內容</strong>", "warning");
            }
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



            fetch("./php/ticket/SelectTicketID.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({ ticketId: id })
            })
            .then(res => res.json())
            .then(res => {
                this.EDIT.ID = res[0]['ID']
                this.EDIT.TICKET_NAME = res[0]['TICKET_NAME']
                this.EDIT.TICKET_TYPE = res[0]['TICKET_TYPE']
                this.EDIT.TICKET_PRICE = res[0]['TICKET_PRICE']
                this.EDIT.TICKET_TOTAL = res[0]['TICKET_TOTAL']
                this.EDIT.TICKET_STATUS = res[0]['TICKET_STATUS']
                this.EDIT.TICKET_DATE = res[0]['TICKET_DATE']
            })
        },
        
    },

    created() {
        fetch("./php/ticket/SelectTicket.php", {
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
            this.TICKETS = res;
        })

    },

})



function ticket(msg, icon, html) {
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