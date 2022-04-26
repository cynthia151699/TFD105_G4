// 多國語言
const messages = {
  en: {
    header: {
      title1: "About ANNO Museum",
      title2: "History of Anno",
    },
    main: {
      section1: "Art records the deduction in ANNO Museum,",
      section2: "All is exist in the past, present, and future.",
      section3: "Not only for us,",
      section4: "You can accomplish every single dream here,",
      section5: "ANNO can be everyone's Utopia,",
      section6: "Let us open our minds,",
      section7: "Create your own Anno.",
      section8:
        "Anno Museum is a new museum located in Taipei.The museum was founded in 2015, by six students in TIBAMI who have a lot of enthusiasm for art and life.",
      section9:
        "Anno Museum collects more than 200 artworks, not only ranging from classical artworks of the 18th to 19th centuries but also contemporary artworks.The biggest wish of Anno Museum is that everyone can get closer to art. Anno Museum launched new exhibitions for every season.",
      section10:
        "We hope that the establishment of the museum can promote education, culture, and history. From now to the future, making art became a part of our life.",
        section11: "Position:", 
        section12: "Chairman", 
        section13: "Curator", 
        section14: "Art director", 
    },
     
  },
  jp: {
    header: {
      title1: "ANNO とは",
      title2: "ANNO について",
    },
    main: {
      section1: "芸術は紀元間の推移や変化を記します",
      section2: "過去も未来も、現在にも存在します",
      section3: "紀元美術館はみんなのユートピアでありたい",
      section4: "芸術家とともに、",
      section5: "ここで夢と幻想を叶えよう",
      section6: "心を開いて、",
      section7: "自分の紀元を創りましょう",
      section8: "紀元美術館は芸術と生活に情熱を持った6人の学生が設立した台北の新興美術館です教育や文化を広める熱意を持って博物館の設立を通じてより多くの人々に芸術に親しむ機会を増やすことを願っています",
      section9: "絵画彫刻アニメファッションなど国内外を問わず幅広いジャンルで文化性話題性の高い展覧会を企画し皆さまに親しみ愛される美術館となるよう努力しています当美術館では２００点の収蔵作品を活かして、現代美術の流れを展望できるコレクション展示や絵画、ファッション、、彫刻、デザイン等幅広く現代美術に関する展覧会を開催しています。色々な作品を、間近でじっくりとご覧いただけます。",
      section10: "紀元美術館は展覧会を鑑賞したい人々が何のためらいもなく来館できるすべての人に開かれた「アートへの入口」となることを目指します",
      section11: "職位:", 
      section12: "社長", 
      section13: "キュレーター", 
      section14: "アートディレクター", 
    },
  },
  tw: {
    header: {
      title1: "關於紀元美術館",
      title2: "關於紀元美術館",
    },
    main: {
      section1: "藝術編寫紀元之間的推演",
      section2: "存在於過去、現在與未來",
      section3: "紀元美術館願成為大家的烏托邦",
      section4: "讓藝術家與你",
      section5: "在這裡實現你的夢境與幻想",
      section6: "讓我們一起敞開心扉",
      section7: "創造屬於自己的紀元",
      section8: "紀元美術館是位於台北市的新興美術館，由六位對藝術與生活充滿熱情的緯育前端班學生創辦。秉持著推廣教育與文化的熱忱，希望藉由博物館的成立，讓更多人擁有親近藝術的機會。",
      section9: "企劃繪畫、雕刻、動畫、時尚等等各種類型，具有文化性及話題性的展覽，為了成為大家都喜愛的美術館而努力著。紀元美術館活用約200件收藏作品，除了展示現代美術的發展軌跡也積極開辦繪畫、雕刻、設計等現代美術展覽，讓來訪者可以近距離接觸各式各樣的展覽作品。",
      section10: "紀元美術館期望能提供更多親近藝術的機會給大眾，拉近人們與藝術的距離，可以更輕鬆、愜意地將藝術融入生活的一部分，成為為人們開啟「藝術之路」的美術館。",
      section11: "職位:", 
      section12: "董事長", 
      section13: "策展人", 
      section14: "美術總監", 
    },
  },
};
  
  const i18n = new VueI18n({ messages: messages });
  
  let app = new Vue({
    el: "#app",
    i18n: i18n,
    // data: {
    //   locale: localStorage.getItem("en") || "en",
    //   // locale: localStorage.getItem("locale") || "tw",
    // },
    data() {
        return {
            locale: localStorage.getItem("en") || "en",
            options: {
                afterLoad: this.afterLoad,
                navigation: false,
                anchors: ['page1', 'page2', 'page3'],
                sectionsColor: ['#293241', '#293241', '#293241']
            },
        }
    },
    methods: {
        changeLocale: function () {
            this.$i18n.locale = this.locale;
            console.log(this.$t("header.title"));
            localStorage.setItem("locale", this.locale);
        },
        afterLoad: function () {
            //console.log('After load')
        }, 
    },
    created() {
      this.$i18n.locale = this.locale;
    },
  });




// var myFullpage = new fullpage('#fullpage', {
//     sectionsColor: ['#293241', '#293241'],
//     lazyLoad: true
// });

// $('.aos-init').removeClass('aos-animate'); //清除aos-animate元素
// $('#fullpage').fullpage({
// afterLoad: function(anchorLink, index){
// $(".section .aos-init").removeClass("aos-animate");//清除aos-animate元素
// if( $(".section").hasClass("active")){ //判断active元素
// $(".active .aos-init").addClass('aos-animate'); //添加aos-animate
// }
// }
// });

AOS.init();

// ========滑鼠圖片滾動========
{
    // body element
    const body = document.body;

    // helper functions
    const MathUtils = {
        // linear interpolation
        lerp: (a, b, n) => (1 - n) * a + n * b,
        // distance between two points
        distance: (x1,y1,x2,y2) => Math.hypot(x2-x1, y2-y1)
    }

    // get the mouse position
    const getMousePos = (ev) => {
        let posx = 0;
        let posy = 0;
        if (!ev) ev = window.event;
        if (ev.pageX || ev.pageY) {
            posx = ev.pageX;
            posy = ev.pageY;
        }
        else if (ev.clientX || ev.clientY) 	{
            posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
            posy = ev.clientY + body.scrollTop + docEl.scrollTop;
        }
        return {x: posx, y: posy};
    }

    // mousePos: current mouse position
    // cacheMousePos: previous mouse position
    // lastMousePos: last last recorded mouse position (at the time the last image was shown)
    let mousePos = lastMousePos = cacheMousePos = {x: 0, y: 0};
    
    // update the mouse position
    window.addEventListener('mousemove', ev => mousePos = getMousePos(ev));
    
    // gets the distance from the current mouse position to the last recorded mouse position
    const getMouseDistance = () => MathUtils.distance(mousePos.x,mousePos.y,lastMousePos.x,lastMousePos.y);

    class Image {
        constructor(el) {
            this.DOM = {el: el};
            // image deafult styles
            this.defaultStyle = {
                scale: 1,
                x: 0,
                y: 0,
                opacity: 0
            };
            // get sizes/position
            this.getRect();
            // init/bind events
            this.initEvents();
        }
        initEvents() {
            // on resize get updated sizes/position
            window.addEventListener('resize', () => this.resize());
        }
        resize() {
            // reset styles
            // TweenMax.set(this.DOM.el, this.defaultStyle);
            // get sizes/position
            this.getRect();
        }
        getRect() {
            this.rect = this.DOM.el.getBoundingClientRect();
        }
        isActive() {
            // check if image is animating or if it's visible
            // return TweenMax.isTweening(this.DOM.el) || this.DOM.el.style.opacity != 0;
        }
    }

    class ImageTrail {
        constructor() {
            // images container
            this.DOM = {content: document.querySelector('.content')};
            // array of Image objs, one per image element
            this.images = [];
            [...this.DOM.content.querySelectorAll('img')].forEach(img => this.images.push(new Image(img)));
            // total number of images
            this.imagesTotal = this.images.length;
            // upcoming image index
            this.imgPosition = 0;
            // zIndex value to apply to the upcoming image
            this.zIndexVal = 1;
            // mouse distance required to show the next image
            this.threshold = 100;
            // render the images
            requestAnimationFrame(() => this.render());
        }
        render() {
            // get distance between the current mouse position and the position of the previous image
            let distance = getMouseDistance();
            // cache previous mouse position
            cacheMousePos.x = MathUtils.lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.1);
            cacheMousePos.y = MathUtils.lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.1);

            // if the mouse moved more than [this.threshold] then show the next image
            if ( distance > this.threshold ) {
                this.showNextImage();

                ++this.zIndexVal;
                this.imgPosition = this.imgPosition < this.imagesTotal-1 ? this.imgPosition+1 : 0;
                
                lastMousePos = mousePos;
            }

            // check when mousemove stops and all images are inactive (not visible and not animating)
            let isIdle = true;
            for (let img of this.images) {
                if ( img.isActive() ) {
                    isIdle = false;
                    break;
                }
            }
            // reset z-index initial value
            if ( isIdle && this.zIndexVal !== 1 ) {
                this.zIndexVal = 1;
            }

            // loop..
            requestAnimationFrame(() => this.render());
        }
        showNextImage() {
            // show image at position [this.imgPosition]
            const img = this.images[this.imgPosition];
            // kill any tween on the image
            TweenMax.killTweensOf(img.DOM.el);

            new TimelineMax()
            // show the image
            .set(img.DOM.el, {
                startAt: {opacity: 0, scale: 1},
                opacity: 1,
                scale: 1,
                zIndex: this.zIndexVal,
                x: cacheMousePos.x - img.rect.width/2,
                y: cacheMousePos.y - img.rect.height/2
            }, 0)
            // animate position
            .to(img.DOM.el, 0.9, {
                ease: Expo.easeOut,
                x: mousePos.x - img.rect.width/2,
                y: mousePos.y - img.rect.height/2
            }, 0)
            // then make it disappear
            .to(img.DOM.el, 1, {
                ease: Power1.easeOut,
                opacity: 0
            }, 0.4)
            // scale down the image
            .to(img.DOM.el, 1, {
                ease: Quint.easeOut,
                scale: 0.2
            }, 0.4);
        }
    }

    /***********************************/
    /********** Preload stuff **********/

    // Preload images
    const preloadImages = () => {
        return new Promise((resolve, reject) => {
            imagesLoaded(document.querySelectorAll('.content__img'), resolve);
        });
    };
    
    // And then..
    preloadImages().then(() => {
        // Remove the loader
        document.body.classList.remove('loading');
        new ImageTrail();
    });
}


// history of anno 動畫效果
$("#aboutHistoryText").click(function () {
  restart();
});

function restart() {
  $("#aboutHistoryContent").css({ top: "80px" }),
    $("#aboutHistoryText").css({ display: "none" }),
    $("#aboutHistoryContent").css({ display: "block" }),
    $("#aboutHistoryContent").animate(
      { top: 0 },
      { duration: 2000, queue: false }
    );
  $("#aboutHistoryContent").fadeIn(2000);
}