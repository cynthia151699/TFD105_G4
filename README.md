# Git_sourcetree 指令
  
Commit #推送至暫存區  
  
Push #推送至雲端github  
Pull #將雲端資料推送到本機端（不用經過暫存區）  
  
Branch #建立分支  
Merge #合併分支  
  
dev #專案管理主分支（不能動！請讓組長操作！）  
master #環境建構分支（不能動！請讓組長操作！）  
  
Reverse commit #還原Commit  
Fetch #讀取遠端數據紀錄（未下載至本地端）  
Discord #還沒commit前，可以把誤刪的資料救回來  
__________________________________________________

# 專案開始步驟
1. 大家先clone 專案到自己的電腦  
2. 把在遠端的dev分支抓下來  
3. dev branch 自己的分支出去  
4. dev pull 要做的專案存到自己的電腦  
5. 再把從 dev 存下的專案 push 到自己的分支  
__________________________________________________

# 收專案進度更新（Git bash 上操作，左下角可看到自己所在的分支）
1. 點 dev 打 git pull  
2. 點自己的分支打 git merge dev  
  
# 要開始 coding 前請先確定是點在自己的分支！！！（看到旁邊有雲朵就對了！）
‧ 隨時 commit，記得寫註解  
commit 格式：哪一頁的code_更動了什麼  

# 上傳到 git（Git bash 上操作，左下角可看到自己所在的分支）
1. 點 dev 打 git merge 自己的分支：讓 dev 收自己分支更新的 commit（有 conflict 請解衝突！點 both 舊的 code 用成註解）  
‧ 沒有 conflict 就不需要再 commit，有 conflict 解完衝突需要再 commit 一次才能 push 上去
2. 請先確認是在dev分支上！！！在 dev 打 git push：讓別的組員也能收到更新（不要 push 自己的分支！！！）  
__________________________________________________

已安裝套件：Bootstraps、jQuery、Vue.js、Gasp.js、Email.js、multiscroll-react.js
  
# 小提醒：
1. 記得安裝套件（按三角形執行，不要按蟲蟲偵錯！！不要開 Watch Sass！！請以 live server 上看到的網頁為準）
‧ 不要改動src/layout 資料夾、src/html/backend 資料夾、src/sass/style.scss 的檔案路徑順序！code會連不見的！會大跑版的！  
‧ dist 資料夾裡的檔案不可以編輯，那是上線用的檔案！！  
2. 大家只需要寫 code 進 src/html/frontend 和 src/sass/page/frontend 的資料夾的檔案裡（請多多使用sass裡定義好的變數跟組件）  
3. 看做好的網頁請在 dist 裡看（連連結請以 dist 裡的檔案路徑為準 [滑鼠右鍵 複製相對路徑]）！！不用看 src 裡的開發檔（但是 coding 請在 src 開發檔裡寫）  
4. 有新增資料或新增檔案請跟組長說！！不要看不到東西還來問怎麼壞掉了（沒連連結當然看不到...）  
5. 各自頁面的 css 或 scss 不要直接寫在標籤裡，用自己的 class 或 ID，不然會蓋掉別人的！ 
‧ z-index 層數：01_0~9，40_10~19，19_20~29，34_30~39，32_40~49，08_50~59
‧ class/ id 命名駝峰式、語意化、首字母小寫！（頁面_元件或物件_功能）  
‧ 請多多打註解，組長不會讀心術，更不會心電感應，請把註解敘述詳細一點，然後不要錯字（寫完code請先re一遍再push上dev）  
  
# ctrl + c 結束工作
‧ git 檔案不能超過 100MB，大家要 push 前請確認一下檔案大小  
‧ node_modules/bootstraps/scss/bootstraps.scss 前四個不能關，剩下的有用到再開  