# Git_sourcetree 指令
  
Commit #推送至暫存區  
  
Push #推送至雲端github  
Pull #將雲端資料推送到本機端（不用經過暫存區）  
  
Branch #建立分支  
Merge #合併分支  
  
dev #專案管理主分支（不能動！）  
master #環境建構分支（不能動！）  
  
Reverse commit #還原Commit  
Fetch #讀取遠端數據紀錄（未下載至本地端）  
Discord #還沒commit前，可以把誤刪的資料救回來  
__________________________________________________

# 專案開始步驟
大家先clone 專案到自己的電腦  
從 dev branch 自己的分支出去  
從 dev pull 要做的專案存到自己的電腦  
再把從 dev 存下的專案 push 到自己的分支  
  
# 更新專案進度
dev pull  
dev branch 自己的分支出去  
dev pull 下來的 push 到自己的分支  
  
# 要開始 coding 前請先確定是點在自己的分支！！！
隨時 commit，記得寫註解  

# 上傳到 git
dev merge 自己的分支讓 dev 收自己分支更新的 commit（有衝突不要丟著！）  
push dev 讓別的組員也能收到更新（不要 push 自己的分支！！！）  
  
# 已安裝套件：Bootstraps、jQuery、Vue.js、Gasp.js、Email.js

# 小提醒：
不要改動檔案路徑，輕則跑版，重則網頁失連  
dist 資料夾裡的檔案不可以編輯，那是上線用的檔案！！  
各自頁面的 css 或 scss 不要寫在標籤裡，用自己的class或ID,不然會蓋掉別人的！  
class/ id 命名駝峰式、語意化、首字母小寫！（頁面_元件或物件_功能）  
請多多打註解，組長不會讀心術，更不會心電感應，請把註解敘述詳細一點，然後不要錯字（寫完code請先re一遍再push上dev）  

# ctrl + c 結束工作
git 檔案不能超過 100MB，大家要 push 前請確認一下檔案大小  
bootstraps.scss 前四個不能關，剩下的有用到再開  