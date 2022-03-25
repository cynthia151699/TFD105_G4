push dev 時間：
01：20:00～20:20
19：20:20～20:40
32：20:40～21:00
34：21:00～21:20
40：21:20～21:40
08：21:40～22:00
  
# Git_sourcetree 指令
  
Commit #推送至暫存區  
  
Push #推送至雲端github  
Pull #將雲端資料推送到本機端（不用經過暫存區）  
  
Branch #建立分支  
Merge #合併分支  
  
dev #專案管理主分支（不能動！請讓組長操作！）  
master #環境建構分支（不能動！請讓組長操作！）  
  
Reverse commit #還原commit  
Fetch #讀取遠端數據紀錄（未下載至本地端）  
Discord #還沒commit 前，可以把誤刪的資料救回來  
__________________________________________________

# 專案開始步驟
1. 大家先clone 專案到自己的電腦  
2. 把在遠端的dev 分支抓下來  
3. dev branch 自己的分支出去  
4. dev pull 要做的專案存到自己的電腦  
5. 再把從dev 存下的專案push 到自己的分支  
__________________________________________________

# 收專案進度更新（Git bash 上操作，左下角可看到自己所在的分支）
1. 點dev 打git pull  
2. 點自己的分支打git merge dev  
  
# 要開始 coding 前請先確定是點在自己的分支！！！（看到旁邊有雲朵就對了！）
‧ 隨時commit，記得寫註解  
commit 格式：哪一頁的code_更動了什麼  

# 上傳到 git（Git bash 上操作，左下角可看到自己所在的分支）
1. 點dev 打git merge 自己的分支：讓dev 收自己分支更新的commit（有conflict 請解衝突！點both 舊的code 用成註解）  
‧ 沒有conflict 就不需要再commit，有conflict 解完衝突需要再commit 一次才能push 上去
2. 請先確認是在dev 分支上！！！在dev 打git push：讓別的組員也能收到更新（不要push 自己的分支！！！）  
__________________________________________________

已安裝套件：Bootstraps、jQuery、Vue.js、Gasp.js、Email.js、multiscroll-react.js
  
# 小提醒：
1. 記得安裝套件然後按開發（按三角形執行，不要按蟲蟲偵錯！！不要開Watch Sass！！請以live server 上看到的網頁為準）  
‧ 不要改動src/layout 資料夾、src/html/backend 資料夾、src/sass/style.scss 的檔案路徑順序！code會連不見的！會大跑版的！  
‧ dist 資料夾裡的檔案不可以編輯，那是上線用的檔案！！  
2. 大家只需要寫code 進src/html/frontend 和src/sass/page/frontend 的資料夾的檔案裡（請多多使用sass 裡定義好的變數跟組件）  
3. 看做好的網頁請在dist 裡看（連連結請以dist 裡的檔案路徑為準 [滑鼠右鍵 複製相對路徑]）！！不要看src 裡的開發檔（但是coding 請在src 開發檔裡寫）  
4. 有新增資料夾或新增檔案請跟組長說！！不要看不到東西還來問怎麼壞掉了（沒連連結當然看不到...）  
5. 各自頁面的css 或scss 不要直接寫在標籤裡，用自己的class 或id，不然會蓋掉別人的！   
‧ z-index 層數：01：0～9，40：10～19，19：20～29，34：30～39，32：40～49，08：50～59  
‧ class /id 命名駝峰式、語意化、首字母小寫！（頁面_元件或物件_功能）  
‧ 請多多打註解，組長不會讀心術，更不會心電感應，請把註解敘述詳細一點，然後不要錯字（寫完code 請先re 一遍再push 上dev）  
  
# ctrl + c 結束工作
‧ git 檔案不能超過100 MB，大家要push 前請確認一下檔案大小  
‧ node_modules/bootstraps/scss/bootstraps.scss 前四個不能關，剩下的有用到再開  