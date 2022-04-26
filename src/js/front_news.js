

new Vue({
    el: '#news_wrapper',
    data() {
        return {
            NEWS_NAME: '',
            NEWS_PIC: '',
            NEWS_CONTENT: '',
            NEWS_STATUS: '',
            NEWS: [],
            NEW: {
                NEWS_ID: '',
                NEWS_NAME: '',
                NEWS_PIC: '',
                NEWS_CONTENT: '',
                NEWS_STATUS: '',
            }
        }
    },
    methods: {
        showoff() {
        //     console.log("ddd");
        if($( ".slideshow" ).hasClass( "slideshow--previewopen" )){
            $('.slide__title-wrap').css("display", "none");
        }else{
            $('.slide__title-wrap').css("display", "block");
        }
            

        },
        showon() {
            // console.log("ttt");
            $('.slide__title-wrap').css("display", "block");
        }

    },

    created() {
        fetch("./php/news/Select_front_News.php", {
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



                this.$nextTick(() => {
                    const a = t => {
                        let e = 0,
                            i = 0;
                        return (t = t || window.event).pageX || t.pageY ? (e = t.pageX, i = t.pageY) : (t.clientX || t.clientY) && (e = t.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, i = t.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
                            x: e,
                            y: i
                        }
                    },
                        b = (t, e) => Math.floor(Math.random() * (e - t + 1)) + t,
                        c = (t, e, i, s, o) => {
                            t = (t - e) / (i - s);
                            return t * o + (e - t * s)
                        },
                        d = ["$", "%", "#", "&", "=", "*", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ".", ":", ",", "^"],
                        e = d.length,
                        f = i => new Promise((n, t) => {
                            const r = i.length;
                            let h = 0;
                            i.forEach((t, i) => {
                                let s;
                                const o = () => {
                                    t.innerHTML = d[b(0, e - 1)], s = setTimeout(o, b(50, 500))
                                };
                                o();
                                setTimeout(() => {
                                    clearTimeout(s), t.style.opacity = 1, t.innerHTML = t.dataset.initial, ++h === r && n()
                                }, i * c(40, 0, 8, 200, r))
                            })
                        }),
                        g = e => new Promise((i, t) => {
                            const s = e.length;
                            let o = 0;
                            e.forEach((t, e) => {
                                setTimeout(() => {
                                    t.style.opacity = 0, ++o === s && i()
                                }, 30 * e)
                            })
                        });
                    class h {
                        constructor(t) {
                            this.DOM = {
                                el: t
                            }, this.DOM.imgWrap = this.DOM.el.querySelector(".slide__img-wrap"), this.DOM.img = this.DOM.imgWrap.querySelector(".slide__img"), this.DOM.texts = {
                                wrap: this.DOM.el.querySelector(".slide__title-wrap"),
                                title: this.DOM.el.querySelector(".slide__title"),
                                number: this.DOM.el.querySelector(".slide__number"),
                                side: this.DOM.el.querySelector(".slide__side")
                            }, charming(this.DOM.texts.title), charming(this.DOM.texts.side), this.DOM.titleLetters = Array.from(this.DOM.texts.title.querySelectorAll("span")).sort(() => .5 - Math.random()), this.DOM.sideLetters = Array.from(this.DOM.texts.side.querySelectorAll("span")).sort(() => .5 - Math.random()), this.DOM.titleLetters.forEach(t => t.dataset.initial = t.innerHTML), this.DOM.sideLetters.forEach(t => t.dataset.initial = t.innerHTML), this.calcSizes(), this.calcTransforms(), this.initEvents()
                        }
                        calcSizes() {
                            this.width = this.DOM.imgWrap.offsetWidth, this.height = this.DOM.imgWrap.offsetHeight
                        }
                        calcTransforms() {
                            this.transforms = [{
                                x: -1 * (t.width / 2 + this.width),
                                y: -1 * (t.height / 2 + this.height),
                                rotation: -30
                            }, {
                                x: -1 * (t.width / 2 - this.width / 3),
                                y: -1 * (t.height / 2 - this.height / 3),
                                rotation: 0
                            }, {
                                x: 0,
                                y: 0,
                                rotation: 0
                            }, {
                                x: t.width / 2 - this.width / 3,
                                y: t.height / 2 - this.height / 3,
                                rotation: 0
                            }, {
                                x: t.width / 2 + this.width,
                                y: t.height / 2 + this.height,
                                rotation: 30
                            }, {
                                x: -1 * (t.width / 2 - this.width / 2 - .075 * t.width),
                                y: 0,
                                rotation: 0
                            }]
                        }
                        initEvents() {
                            this.mouseenterFn = () => {
                                this.isPositionedCenter() && s && (clearTimeout(this.mousetime), this.mousetime = setTimeout(() => {
                                    TweenMax.to(this.DOM.img, .8, {
                                        ease: Power3.easeOut,
                                        scale: 1.1
                                    })
                                }, 40))
                            }, this.mousemoveFn = t => requestAnimationFrame(() => {
                                s && this.isPositionedCenter() && this.tilt(t)
                            }), this.mouseleaveFn = t => requestAnimationFrame(() => {
                                s && this.isPositionedCenter() && (clearTimeout(this.mousetime), TweenMax.to([this.DOM.imgWrap, this.DOM.texts.wrap], 1.8, {
                                    ease: "Power4.easeOut",
                                    x: 0,
                                    y: 0,
                                    rotationX: 0,
                                    rotationY: 0
                                }), TweenMax.to(this.DOM.img, 1.8, {
                                    ease: "Power4.easeOut",
                                    scale: 1
                                }))
                            }), this.resizeFn = () => {
                                this.calcSizes(), this.calcTransforms()
                            }, this.DOM.imgWrap.addEventListener("mouseenter", this.mouseenterFn), this.DOM.imgWrap.addEventListener("mousemove", this.mousemoveFn), this.DOM.imgWrap.addEventListener("mouseleave", this.mouseleaveFn), window.addEventListener("resize", this.resizeFn)
                        }
                        tilt(t) {
                            t = a(t);
                            const e = document.body.scrollLeft + document.documentElement.scrollLeft,
                                i = document.body.scrollTop + document.documentElement.scrollTop;
                            var s = this.DOM.imgWrap.getBoundingClientRect();
                            const o = t.x - s.left - e,
                                n = t.y - s.top - i;
                            let r = [-20, 20],
                                h = [-20, 20],
                                l = [-15, 15],
                                d = [-15, 15];
                            t = {
                                translation: {
                                    x: (r[1] - r[0]) / s.width * o + r[0],
                                    y: (h[1] - h[0]) / s.height * n + h[0]
                                },
                                rotation: {
                                    x: (l[1] - l[0]) / s.height * n + l[0],
                                    y: (d[1] - d[0]) / s.width * o + d[0]
                                }
                            };
                            TweenMax.to(this.DOM.imgWrap, 1.5, {
                                ease: "Power1.easeOut",
                                x: t.translation.x,
                                y: t.translation.y,
                                rotationX: t.rotation.x,
                                rotationY: t.rotation.y
                            }), TweenMax.to(this.DOM.texts.wrap, 1.5, {
                                ease: "Power1.easeOut",
                                x: -1 * t.translation.x,
                                y: -1 * t.translation.y
                            })
                        }
                        position(t) {
                            TweenMax.set(this.DOM.imgWrap, {
                                x: this.transforms[t].x,
                                y: this.transforms[t].y,
                                rotationX: 0,
                                rotationY: 0,
                                opacity: 1,
                                rotationZ: this.transforms[t].rotation
                            })
                        }
                        setCurrent(t) {
                            this.isCurrent = !0, this.DOM.el.classList.add("slide--current", "slide--visible"), this.position(t ? 5 : 2)
                        }
                        setLeft(t) {
                            this.isRight = this.isCurrent = !1, this.isLeft = !0, this.DOM.el.classList.add("slide--visible"), this.position(t ? 0 : 1)
                        }
                        setRight(t) {
                            this.isLeft = this.isCurrent = !1, this.isRight = !0, this.DOM.el.classList.add("slide--visible"), this.position(t ? 4 : 3)
                        }
                        isPositionedRight() {
                            return this.isRight
                        }
                        isPositionedLeft() {
                            return this.isLeft
                        }
                        isPositionedCenter() {
                            return this.isCurrent
                        }
                        reset() {
                            this.isRight = this.isLeft = this.isCurrent = !1, this.DOM.el.classList = "slide"
                        }
                        hide() {
                            TweenMax.set(this.DOM.imgWrap, {
                                x: 0,
                                y: 0,
                                rotationX: 0,
                                rotationY: 0,
                                rotationZ: 0,
                                opacity: 0
                            })
                        }
                        moveToPosition(i) {
                            return new Promise((t, e) => {
                                TweenMax.to(this.DOM.imgWrap, .8, {
                                    ease: Power4.easeInOut,
                                    delay: i.delay || 0,
                                    startAt: void 0 !== i.from ? {
                                        x: this.transforms[i.from + 2].x,
                                        y: this.transforms[i.from + 2].y,
                                        rotationX: 0,
                                        rotationY: 0,
                                        rotationZ: this.transforms[i.from + 2].rotation
                                    } : {},
                                    x: this.transforms[i.position + 2].x,
                                    y: this.transforms[i.position + 2].y,
                                    rotationX: 0,
                                    rotationY: 0,
                                    rotationZ: this.transforms[i.position + 2].rotation,
                                    onStart: void 0 !== i.from ? () => TweenMax.set(this.DOM.imgWrap, {
                                        opacity: 1
                                    }) : null,
                                    onComplete: t
                                }), i.resetImageScale && TweenMax.to(this.DOM.img, .8, {
                                    ease: Power4.easeInOut,
                                    scale: 1
                                })
                            })
                        }
                        hideTexts(t = !1) {
                            t ? (g(this.DOM.titleLetters).then(() => TweenMax.set(this.DOM.texts.wrap, {
                                opacity: 0
                            })), g(this.DOM.sideLetters).then(() => TweenMax.set(this.DOM.texts.side, {
                                opacity: 0
                            }))) : (TweenMax.set(this.DOM.texts.wrap, {
                                opacity: 0
                            }), TweenMax.set(this.DOM.texts.side, {
                                opacity: 0
                            }))
                        }
                        showTexts(t = !0) {
                            TweenMax.set(this.DOM.texts.wrap, {
                                opacity: 1
                            }), TweenMax.set(this.DOM.texts.side, {
                                opacity: 1
                            }), t && (f(this.DOM.titleLetters), f(this.DOM.sideLetters), TweenMax.to(this.DOM.texts.number, .6, {
                                ease: Elastic.easeOut.config(1, .5),
                                startAt: {
                                    x: "-10%",
                                    opacity: 0
                                },
                                x: "0%",
                                opacity: 1
                            }))
                        }
                    }
                    class i {
                        constructor(t) {
                            this.DOM = {
                                el: t
                            }, this.DOM.number = this.DOM.el.querySelector(".content__number"), this.DOM.title = this.DOM.el.querySelector(".content__title"), this.DOM.subtitle = this.DOM.el.querySelector(".content__subtitle"), this.DOM.text = this.DOM.el.querySelector(".content__text"), this.DOM.backCtrl = this.DOM.el.parentNode.querySelector(".content__close"), this.DOM.backCtrl.addEventListener("click", () => n.hideContent())
                        }
                        show() {
                            this.DOM.el.classList.add("content__item--current"), TweenMax.staggerTo([this.DOM.backCtrl, this.DOM.number, this.DOM.title, this.DOM.subtitle, this.DOM.text], .8, {
                                ease: Power4.easeOut,
                                delay: .4,
                                opacity: 1,
                                startAt: {
                                    y: 40
                                },
                                y: 0
                            }, .05)
                        }
                        hide() {
                            this.DOM.el.classList.remove("content__item--current"), TweenMax.staggerTo([this.DOM.backCtrl, this.DOM.number, this.DOM.title, this.DOM.subtitle, this.DOM.text].reverse(), .3, {
                                ease: Power3.easeIn,
                                opacity: 0,
                                y: 10
                            }, .01)
                        }
                    }
                    class j {
                        constructor(t) {
                            if (this.DOM = {
                                el: t
                            }, this.slides = [], Array.from(this.DOM.el.querySelectorAll(".slide")).forEach(t => this.slides.push(new h(t))), this.slidesTotal = this.slides.length, this.slidesTotal < 4) return !1;
                            this.current = 0, this.DOM.deco = this.DOM.el.querySelector(".slideshow__deco"), this.contents = [], Array.from(document.querySelectorAll(".content > .content__item")).forEach(t => this.contents.push(new i(t))), this.render(), this.currentSlide.showTexts(!1), this.initEvents()
                        }
                        render() {
                            this.currentSlide = this.slides[this.current], this.nextSlide = this.slides[this.current + 1 <= this.slidesTotal - 1 ? this.current + 1 : 0], this.prevSlide = this.slides[0 <= this.current - 1 ? this.current - 1 : this.slidesTotal - 1], this.currentSlide.setCurrent(), this.nextSlide.setRight(), this.prevSlide.setLeft()
                        }
                        initEvents() {
                            this.clickFn = t => {
                                t.isPositionedRight() ? this.navigate("next") : t.isPositionedLeft() ? this.navigate("prev") : this.showContent()
                            };
                            for (let t of this.slides) t.DOM.imgWrap.addEventListener("click", () => this.clickFn(t));
                            this.resizeFn = () => {
                                this.nextSlide.setRight(this.isContentOpen), this.prevSlide.setLeft(this.isContentOpen), this.currentSlide.setCurrent(this.isContentOpen), this.isContentOpen && TweenMax.set(this.DOM.deco, {
                                    scaleX: t.width / this.DOM.deco.offsetWidth,
                                    scaleY: t.height / this.DOM.deco.offsetHeight,
                                    x: -20,
                                    y: 20
                                })
                            }, window.addEventListener("resize", this.resizeFn)
                        }
                        showContent() {
                            this.isContentOpen || this.isAnimating || (s = !1, this.isContentOpen = !0, this.DOM.el.classList.add("slideshow--previewopen"), TweenMax.to(this.DOM.deco, .8, {
                                ease: Power4.easeInOut,
                                scaleX: t.width / this.DOM.deco.offsetWidth,
                                scaleY: t.height / this.DOM.deco.offsetHeight,
                                x: -20,
                                y: 20
                            }), this.prevSlide.moveToPosition({
                                position: -2
                            }), this.nextSlide.moveToPosition({
                                position: 2
                            }), this.currentSlide.moveToPosition({
                                position: 3,
                                resetImageScale: !0
                            }), this.contents[this.current].show(), this.currentSlide.hideTexts(!0))
                        }
                        hideContent() {
                            this.isContentOpen && !this.isAnimating && (this.DOM.el.classList.remove("slideshow--previewopen"), this.contents[this.current].hide(), TweenMax.to(this.DOM.deco, .8, {
                                ease: Power4.easeInOut,
                                scaleX: 1,
                                scaleY: 1,
                                x: 0,
                                y: 0
                            }), this.prevSlide.moveToPosition({
                                position: -1
                            }), this.nextSlide.moveToPosition({
                                position: 1
                            }), this.currentSlide.moveToPosition({
                                position: 0
                            }).then(() => {
                                s = !0, this.isContentOpen = !1
                            }), this.currentSlide.showTexts())
                        }
                        bounceDeco(t, e) {
                            TweenMax.to(this.DOM.deco, .4, {
                                ease: "Power2.easeIn",
                                delay: e + .2 * e,
                                x: "next" === t ? -40 : 40,
                                y: "next" === t ? -40 : 40,
                                onComplete: () => {
                                    TweenMax.to(this.DOM.deco, .6, {
                                        ease: "Power2.easeOut",
                                        x: 0,
                                        y: 0
                                    })
                                }
                            })
                        }
                        navigate(t) {
                            var e;
                            this.isAnimating || (this.isAnimating = !0, s = !1, e = "next" === t ? this.current < this.slidesTotal - 2 ? this.current + 2 : Math.abs(this.slidesTotal - 2 - this.current) : 2 <= this.current ? this.current - 2 : Math.abs(this.slidesTotal - 2 + this.current), this.upcomingSlide = this.slides[e], this.current = "next" === t ? this.current < this.slidesTotal - 1 ? this.current + 1 : 0 : 0 < this.current ? this.current - 1 : this.slidesTotal - 1, this.prevSlide.moveToPosition({
                                position: "next" === t ? -2 : 0,
                                delay: "next" === t ? 0 : .14
                            }).then(() => {
                                "next" === t && this.prevSlide.hide()
                            }), this.currentSlide.moveToPosition({
                                position: "next" === t ? -1 : 1,
                                delay: .07
                            }), this.currentSlide.hideTexts(), this.bounceDeco(t, .07), this.nextSlide.moveToPosition({
                                position: "next" === t ? 0 : 2,
                                delay: "next" === t ? .14 : 0
                            }).then(() => {
                                "prev" === t && this.nextSlide.hide()
                            }), ("next" === t ? this.nextSlide : this.prevSlide).showTexts(), this.upcomingSlide.moveToPosition({
                                position: "next" === t ? 1 : -1,
                                from: "next" === t ? 2 : -2,
                                delay: .21
                            }).then(() => {
                                [this.nextSlide, this.currentSlide, this.prevSlide].forEach(t => t.reset()), this.render(), s = !0, this.isAnimating = !1
                            }))
                        }
                    }
                    let t;
                    const l = () => t = {
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                    l(), window.addEventListener("resize", l);
                    let s = !0;
                    const n = new j(document.querySelector(".slideshow")),
                        o = document.querySelector(".loader");
                    imagesLoaded(document.querySelectorAll(".slide__img"), {
                        background: !0
                    }, () => document.body.classList.remove("loading"))



                })
            })

    },

    mounted() {
        ! function (e) {
            "undefined" == typeof module ? this.charming = e : module.exports = e
        }(function (e, n) {
            "use strict";
            n = n || {};
            var t = n.tagName || "span",
                o = null != n.classPrefix ? n.classPrefix : "char",
                r = 1,
                a = function (e) {
                    for (var n = e.parentNode, a = e.nodeValue, c = a.length, l = -1; ++l < c;) {
                        var d = document.createElement(t);
                        o && (d.className = o + r, r++), d.appendChild(document.createTextNode(a[l])), n.insertBefore(d, e)
                    }
                    n.removeChild(e)
                };
            return function c(e) {
                for (var n = [].slice.call(e.childNodes), t = n.length, o = -1; ++o < t;) c(n[o]);
                e.nodeType === Node.TEXT_NODE && a(e)
            }(e), e
        });
        const a = t => {
            let e = 0,
                i = 0;
            return (t = t || window.event).pageX || t.pageY ? (e = t.pageX, i = t.pageY) : (t.clientX || t.clientY) && (e = t.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, i = t.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
                x: e,
                y: i
            }
        },
            b = (t, e) => Math.floor(Math.random() * (e - t + 1)) + t,
            c = (t, e, i, s, o) => {
                t = (t - e) / (i - s);
                return t * o + (e - t * s)
            },
            d = ["$", "%", "#", "&", "=", "*", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ".", ":", ",", "^"],
            e = d.length,
            f = i => new Promise((n, t) => {
                const r = i.length;
                let h = 0;
                i.forEach((t, i) => {
                    let s;
                    const o = () => {
                        t.innerHTML = d[b(0, e - 1)], s = setTimeout(o, b(50, 500))
                    };
                    o();
                    setTimeout(() => {
                        clearTimeout(s), t.style.opacity = 1, t.innerHTML = t.dataset.initial, ++h === r && n()
                    }, i * c(40, 0, 8, 200, r))
                })
            }),
            g = e => new Promise((i, t) => {
                const s = e.length;
                let o = 0;
                e.forEach((t, e) => {
                    setTimeout(() => {
                        t.style.opacity = 0, ++o === s && i()
                    }, 30 * e)
                })
            });
        class h {
            constructor(t) {
                this.DOM = {
                    el: t
                }, this.DOM.imgWrap = this.DOM.el.querySelector(".slide__img-wrap"), this.DOM.img = this.DOM.imgWrap.querySelector(".slide__img"), this.DOM.texts = {
                    wrap: this.DOM.el.querySelector(".slide__title-wrap"),
                    title: this.DOM.el.querySelector(".slide__title"),
                    number: this.DOM.el.querySelector(".slide__number"),
                    side: this.DOM.el.querySelector(".slide__side")
                }, charming(this.DOM.texts.title), charming(this.DOM.texts.side), this.DOM.titleLetters = Array.from(this.DOM.texts.title.querySelectorAll("span")).sort(() => .5 - Math.random()), this.DOM.sideLetters = Array.from(this.DOM.texts.side.querySelectorAll("span")).sort(() => .5 - Math.random()), this.DOM.titleLetters.forEach(t => t.dataset.initial = t.innerHTML), this.DOM.sideLetters.forEach(t => t.dataset.initial = t.innerHTML), this.calcSizes(), this.calcTransforms(), this.initEvents()
            }
            calcSizes() {
                this.width = this.DOM.imgWrap.offsetWidth, this.height = this.DOM.imgWrap.offsetHeight
            }
            calcTransforms() {
                this.transforms = [{
                    x: -1 * (t.width / 2 + this.width),
                    y: -1 * (t.height / 2 + this.height),
                    rotation: -30
                }, {
                    x: -1 * (t.width / 2 - this.width / 3),
                    y: -1 * (t.height / 2 - this.height / 3),
                    rotation: 0
                }, {
                    x: 0,
                    y: 0,
                    rotation: 0
                }, {
                    x: t.width / 2 - this.width / 3,
                    y: t.height / 2 - this.height / 3,
                    rotation: 0
                }, {
                    x: t.width / 2 + this.width,
                    y: t.height / 2 + this.height,
                    rotation: 30
                }, {
                    x: -1 * (t.width / 2 - this.width / 2 - .075 * t.width),
                    y: 0,
                    rotation: 0
                }]
            }
            initEvents() {
                this.mouseenterFn = () => {
                    this.isPositionedCenter() && s && (clearTimeout(this.mousetime), this.mousetime = setTimeout(() => {
                        TweenMax.to(this.DOM.img, .8, {
                            ease: Power3.easeOut,
                            scale: 1.1
                        })
                    }, 40))
                }, this.mousemoveFn = t => requestAnimationFrame(() => {
                    s && this.isPositionedCenter() && this.tilt(t)
                }), this.mouseleaveFn = t => requestAnimationFrame(() => {
                    s && this.isPositionedCenter() && (clearTimeout(this.mousetime), TweenMax.to([this.DOM.imgWrap, this.DOM.texts.wrap], 1.8, {
                        ease: "Power4.easeOut",
                        x: 0,
                        y: 0,
                        rotationX: 0,
                        rotationY: 0
                    }), TweenMax.to(this.DOM.img, 1.8, {
                        ease: "Power4.easeOut",
                        scale: 1
                    }))
                }), this.resizeFn = () => {
                    this.calcSizes(), this.calcTransforms()
                }, this.DOM.imgWrap.addEventListener("mouseenter", this.mouseenterFn), this.DOM.imgWrap.addEventListener("mousemove", this.mousemoveFn), this.DOM.imgWrap.addEventListener("mouseleave", this.mouseleaveFn), window.addEventListener("resize", this.resizeFn)
            }
            tilt(t) {
                t = a(t);
                const e = document.body.scrollLeft + document.documentElement.scrollLeft,
                    i = document.body.scrollTop + document.documentElement.scrollTop;
                var s = this.DOM.imgWrap.getBoundingClientRect();
                const o = t.x - s.left - e,
                    n = t.y - s.top - i;
                let r = [-20, 20],
                    h = [-20, 20],
                    l = [-15, 15],
                    d = [-15, 15];
                t = {
                    translation: {
                        x: (r[1] - r[0]) / s.width * o + r[0],
                        y: (h[1] - h[0]) / s.height * n + h[0]
                    },
                    rotation: {
                        x: (l[1] - l[0]) / s.height * n + l[0],
                        y: (d[1] - d[0]) / s.width * o + d[0]
                    }
                };
                TweenMax.to(this.DOM.imgWrap, 1.5, {
                    ease: "Power1.easeOut",
                    x: t.translation.x,
                    y: t.translation.y,
                    rotationX: t.rotation.x,
                    rotationY: t.rotation.y
                }), TweenMax.to(this.DOM.texts.wrap, 1.5, {
                    ease: "Power1.easeOut",
                    x: -1 * t.translation.x,
                    y: -1 * t.translation.y
                })
            }
            position(t) {
                TweenMax.set(this.DOM.imgWrap, {
                    x: this.transforms[t].x,
                    y: this.transforms[t].y,
                    rotationX: 0,
                    rotationY: 0,
                    opacity: 1,
                    rotationZ: this.transforms[t].rotation
                })
            }
            setCurrent(t) {
                this.isCurrent = !0, this.DOM.el.classList.add("slide--current", "slide--visible"), this.position(t ? 5 : 2)
            }
            setLeft(t) {
                this.isRight = this.isCurrent = !1, this.isLeft = !0, this.DOM.el.classList.add("slide--visible"), this.position(t ? 0 : 1)
            }
            setRight(t) {
                this.isLeft = this.isCurrent = !1, this.isRight = !0, this.DOM.el.classList.add("slide--visible"), this.position(t ? 4 : 3)
            }
            isPositionedRight() {
                return this.isRight
            }
            isPositionedLeft() {
                return this.isLeft
            }
            isPositionedCenter() {
                return this.isCurrent
            }
            reset() {
                this.isRight = this.isLeft = this.isCurrent = !1, this.DOM.el.classList = "slide"
            }
            hide() {
                TweenMax.set(this.DOM.imgWrap, {
                    x: 0,
                    y: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    opacity: 0
                })
            }
            moveToPosition(i) {
                return new Promise((t, e) => {
                    TweenMax.to(this.DOM.imgWrap, .8, {
                        ease: Power4.easeInOut,
                        delay: i.delay || 0,
                        startAt: void 0 !== i.from ? {
                            x: this.transforms[i.from + 2].x,
                            y: this.transforms[i.from + 2].y,
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: this.transforms[i.from + 2].rotation
                        } : {},
                        x: this.transforms[i.position + 2].x,
                        y: this.transforms[i.position + 2].y,
                        rotationX: 0,
                        rotationY: 0,
                        rotationZ: this.transforms[i.position + 2].rotation,
                        onStart: void 0 !== i.from ? () => TweenMax.set(this.DOM.imgWrap, {
                            opacity: 1
                        }) : null,
                        onComplete: t
                    }), i.resetImageScale && TweenMax.to(this.DOM.img, .8, {
                        ease: Power4.easeInOut,
                        scale: 1
                    })
                })
            }
            hideTexts(t = !1) {
                t ? (g(this.DOM.titleLetters).then(() => TweenMax.set(this.DOM.texts.wrap, {
                    opacity: 0
                })), g(this.DOM.sideLetters).then(() => TweenMax.set(this.DOM.texts.side, {
                    opacity: 0
                }))) : (TweenMax.set(this.DOM.texts.wrap, {
                    opacity: 0
                }), TweenMax.set(this.DOM.texts.side, {
                    opacity: 0
                }))
            }
            showTexts(t = !0) {
                TweenMax.set(this.DOM.texts.wrap, {
                    opacity: 1
                }), TweenMax.set(this.DOM.texts.side, {
                    opacity: 1
                }), t && (f(this.DOM.titleLetters), f(this.DOM.sideLetters), TweenMax.to(this.DOM.texts.number, .6, {
                    ease: Elastic.easeOut.config(1, .5),
                    startAt: {
                        x: "-10%",
                        opacity: 0
                    },
                    x: "0%",
                    opacity: 1
                }))
            }
        }
        class i {
            constructor(t) {
                this.DOM = {
                    el: t
                }, this.DOM.number = this.DOM.el.querySelector(".content__number"), this.DOM.title = this.DOM.el.querySelector(".content__title"), this.DOM.subtitle = this.DOM.el.querySelector(".content__subtitle"), this.DOM.text = this.DOM.el.querySelector(".content__text"), this.DOM.backCtrl = this.DOM.el.parentNode.querySelector(".content__close"), this.DOM.backCtrl.addEventListener("click", () => n.hideContent())
            }
            show() {
                this.DOM.el.classList.add("content__item--current"), TweenMax.staggerTo([this.DOM.backCtrl, this.DOM.number, this.DOM.title, this.DOM.subtitle, this.DOM.text], .8, {
                    ease: Power4.easeOut,
                    delay: .4,
                    opacity: 1,
                    startAt: {
                        y: 40
                    },
                    y: 0
                }, .05)
            }
            hide() {
                this.DOM.el.classList.remove("content__item--current"), TweenMax.staggerTo([this.DOM.backCtrl, this.DOM.number, this.DOM.title, this.DOM.subtitle, this.DOM.text].reverse(), .3, {
                    ease: Power3.easeIn,
                    opacity: 0,
                    y: 10
                }, .01)
            }
        }
        class j {
            constructor(t) {
                if (this.DOM = {
                    el: t
                }, this.slides = [], Array.from(this.DOM.el.querySelectorAll(".slide")).forEach(t => this.slides.push(new h(t))), this.slidesTotal = this.slides.length, this.slidesTotal < 4) return !1;
                this.current = 0, this.DOM.deco = this.DOM.el.querySelector(".slideshow__deco"), this.contents = [], Array.from(document.querySelectorAll(".content > .content__item")).forEach(t => this.contents.push(new i(t))), this.render(), this.currentSlide.showTexts(!1), this.initEvents()
            }
            render() {
                this.currentSlide = this.slides[this.current], this.nextSlide = this.slides[this.current + 1 <= this.slidesTotal - 1 ? this.current + 1 : 0], this.prevSlide = this.slides[0 <= this.current - 1 ? this.current - 1 : this.slidesTotal - 1], this.currentSlide.setCurrent(), this.nextSlide.setRight(), this.prevSlide.setLeft()
            }
            initEvents() {
                this.clickFn = t => {
                    t.isPositionedRight() ? this.navigate("next") : t.isPositionedLeft() ? this.navigate("prev") : this.showContent()
                };
                for (let t of this.slides) t.DOM.imgWrap.addEventListener("click", () => this.clickFn(t));
                this.resizeFn = () => {
                    this.nextSlide.setRight(this.isContentOpen), this.prevSlide.setLeft(this.isContentOpen), this.currentSlide.setCurrent(this.isContentOpen), this.isContentOpen && TweenMax.set(this.DOM.deco, {
                        scaleX: t.width / this.DOM.deco.offsetWidth,
                        scaleY: t.height / this.DOM.deco.offsetHeight,
                        x: -20,
                        y: 20
                    })
                }, window.addEventListener("resize", this.resizeFn)
            }
            showContent() {
                this.isContentOpen || this.isAnimating || (s = !1, this.isContentOpen = !0, this.DOM.el.classList.add("slideshow--previewopen"), TweenMax.to(this.DOM.deco, .8, {
                    ease: Power4.easeInOut,
                    scaleX: t.width / this.DOM.deco.offsetWidth,
                    scaleY: t.height / this.DOM.deco.offsetHeight,
                    x: -20,
                    y: 20
                }), this.prevSlide.moveToPosition({
                    position: -2
                }), this.nextSlide.moveToPosition({
                    position: 2
                }), this.currentSlide.moveToPosition({
                    position: 3,
                    resetImageScale: !0
                }), this.contents[this.current].show(), this.currentSlide.hideTexts(!0))
            }
            hideContent() {
                this.isContentOpen && !this.isAnimating && (this.DOM.el.classList.remove("slideshow--previewopen"), this.contents[this.current].hide(), TweenMax.to(this.DOM.deco, .8, {
                    ease: Power4.easeInOut,
                    scaleX: 1,
                    scaleY: 1,
                    x: 0,
                    y: 0
                }), this.prevSlide.moveToPosition({
                    position: -1
                }), this.nextSlide.moveToPosition({
                    position: 1
                }), this.currentSlide.moveToPosition({
                    position: 0
                }).then(() => {
                    s = !0, this.isContentOpen = !1
                }), this.currentSlide.showTexts())
            }
            bounceDeco(t, e) {
                TweenMax.to(this.DOM.deco, .4, {
                    ease: "Power2.easeIn",
                    delay: e + .2 * e,
                    x: "next" === t ? -40 : 40,
                    y: "next" === t ? -40 : 40,
                    onComplete: () => {
                        TweenMax.to(this.DOM.deco, .6, {
                            ease: "Power2.easeOut",
                            x: 0,
                            y: 0
                        })
                    }
                })
            }
            navigate(t) {
                var e;
                this.isAnimating || (this.isAnimating = !0, s = !1, e = "next" === t ? this.current < this.slidesTotal - 2 ? this.current + 2 : Math.abs(this.slidesTotal - 2 - this.current) : 2 <= this.current ? this.current - 2 : Math.abs(this.slidesTotal - 2 + this.current), this.upcomingSlide = this.slides[e], this.current = "next" === t ? this.current < this.slidesTotal - 1 ? this.current + 1 : 0 : 0 < this.current ? this.current - 1 : this.slidesTotal - 1, this.prevSlide.moveToPosition({
                    position: "next" === t ? -2 : 0,
                    delay: "next" === t ? 0 : .14
                }).then(() => {
                    "next" === t && this.prevSlide.hide()
                }), this.currentSlide.moveToPosition({
                    position: "next" === t ? -1 : 1,
                    delay: .07
                }), this.currentSlide.hideTexts(), this.bounceDeco(t, .07), this.nextSlide.moveToPosition({
                    position: "next" === t ? 0 : 2,
                    delay: "next" === t ? .14 : 0
                }).then(() => {
                    "prev" === t && this.nextSlide.hide()
                }), ("next" === t ? this.nextSlide : this.prevSlide).showTexts(), this.upcomingSlide.moveToPosition({
                    position: "next" === t ? 1 : -1,
                    from: "next" === t ? 2 : -2,
                    delay: .21
                }).then(() => {
                    [this.nextSlide, this.currentSlide, this.prevSlide].forEach(t => t.reset()), this.render(), s = !0, this.isAnimating = !1
                }))
            }
        }
        let t;
        const l = () => t = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        l(), window.addEventListener("resize", l);
        let s = !0;
        const n = new j(document.querySelector(".slideshow")),
            o = document.querySelector(".loader");
        imagesLoaded(document.querySelectorAll(".slide__img"), {
            background: !0
        }, () => document.body.classList.remove("loading"))
    },
    

});


document.documentElement.className = "js";
var supportsCssVars = function () { var e, t = document.createElement("style"); return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e };
supportsCssVars() || alert("Please view this demo in a modern browser that supports CSS Variables.");