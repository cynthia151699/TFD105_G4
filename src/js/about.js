var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#293241', '#293241'],
    lazyLoad: true
});

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
    },
  },
  jp: {
    header: {
      title1: "ANNO について",
      title2: "ANNO の歴史",
    },
    main: {
      section1: "",
      section2: "",
      section3: "",
      section4: "",
      section5: "",
      section6: "",
      section7: "",
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
    },
  },
};

const i18n = new VueI18n({ messages: messages });

let app = new Vue({
  el: "#app",
  i18n: i18n,
  data: {
    locale: localStorage.getItem("en") || "en",
    // locale: localStorage.getItem("locale") || "tw",
  },
  methods: {
    changeLocale: function () {
      this.$i18n.locale = this.locale;
      console.log(this.$t("header.title"));
      localStorage.setItem("locale", this.locale);
    },
  },
  created() {
    this.$i18n.locale = this.locale;
  },
});