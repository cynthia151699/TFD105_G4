var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#293241', '#293241'],
    lazyLoad: true
});

// AOS.init();



// ---------圖片飛入------------
const openhoursRightImg = document.querySelector('#flyoutImg');
const list = Array.from(Array(25).keys());
 //快速生成一个length为100的数组 生成一個100的數組
list.sort((a, b) => Math.random() - 0.5);
//亂數排序
// console.log(list);


let index = 0;
//初始化索引值
function fly() {

  // if (index === 100) return;
  // //index=100时直接return
  let currentBox = list[index++];
  // console.log(currentBox); 
  //得到每個小方塊的位置
  const left = currentBox % 5 * 100;
  const top = Math.floor(currentBox / 5) * 80
  //得到每個小方塊的left和top




  const box = document.createElement('div');
  //寫一個外框
  box.classList.add('box');
  //加class
  box.style.cssText = `background:url('./img/visit/visit_pic2.jpg') ${-left}px ${-top}px no-repeat;background-size: 400px 400px;`;
  //設置圖片的大小，放進去外框
  openhoursRightImg.appendChild(box);
  //飛入動畫
  let animation = anime({
    targets: box, //飛入位置
    left: left + 'px', //每一個小方塊的left
    top: top + 'px', //每一個小方塊的top
    duration: 100, //飛入時間
    easing: 'linear', 
    complete: function () {
      fly();
    }
    //執行完一塊在繼續下一塊
  })
}

fly();


