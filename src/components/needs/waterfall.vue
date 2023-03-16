<template>
    <div id="waterfall" ref="waterfall">
        <div class="img-box default-card-animation" v-for="(item, index) in imgsArr_c" :key="index"
            :style="{ width: imgWidth + 'px', height: item._height + 'px' }" ref="imgBox">
            <img :data-src="item.src" />
            <P class="info">{{ item.info }}</P>
        </div>
    </div>
</template>
<script>
import { isMobile } from 'C:/Users/17129/Desktop/A37TheGreatest/public/js/util.js'
export default {
    name: 'waterfall',
    data() {
        return {
            imgsArr: [
                {
                    src: require('@/assets/waterfall_img/cat1.png'),
                    href: "https://www.baidu.com",
                    info: "我是第一张图片",
                    headerText: '测试'
                },
                {
                    src: require('@/assets/waterfall_img/cat2.jpg'),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字",
                    headerText: '测试'
                },
                {
                    src: require('@/assets/waterfall_img/cat3.png'),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字",
                },
                {
                    src: require('@/assets/waterfall_img/cat4.jpg'),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字",
                },

                {
                    src: require('@/assets/waterfall_img/cat5.jpg'),

                    href: "https://www.baidu.com",
                    info: "一些图片描述文字",
                },
                {
                    src: require('@/assets/waterfall_img/cat6.png'),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字",
                },
                {
                    src: require('@/assets/waterfall_img/cat7.jpg'),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字",
                },
                {
                    src: require('@/assets/waterfall_img/cat7.jpg'),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字",
                },
                {
                    src: require('@/assets/waterfall_img/cat7.jpg'),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字",
                },
                {
                    src: require('@/assets/waterfall_img/cat7.jpg'),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字",
                },
                {
                    src: require('@/assets/waterfall_img/cat7.jpg'),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字",
                },
                {
                    src: require('@/assets/waterfall_img/cat7.jpg'),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字",
                },
                {
                    src: require('@/assets/waterfall_img/cat7.jpg'),
                    href: "https://www.baidu.com",
                    info: "",
                },
                {
                    src: require('@/assets/waterfall_img/cat7.jpg'),
                    href: "https://www.baidu.com",
                    info: "",
                },
                {
                    src: require('@/assets/waterfall_img/cat7.jpg'),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字",
                },
                {
                    src: require('@/assets/waterfall_img/cat7.jpg'),
                    href: "https://www.baidu.com",
                    info: "一些图片描述文字",
                },
               
                
               

            ],
            imgsArr_c: [], // 渲染的图片
            imgCol: 5, // 图片列数
            imgGap: 5, // 图片间间隔
            loadedCount: 0,
            imgBoxEls: [], // 所有 img-box 元素
            beginIndex: 0,
            colsHeightArr: [], // 保存当前每一列的高度
            reachBottomDistance: 20, // 滚动触底距离，触发加载新图片
            viewHeight: 0, // 窗口视图大小
        }
    },
    computed: {
        isMobile() {
            return isMobile();
        },
        // 容器 waterfall 的宽度
        waterfallWidth() {
            return this.$refs["waterfall"].clientWidth;
        },
        // 图片宽度
        imgWidth() {
            return this.colWidth - 2 * this.imgGap;
        },
        // 列宽度
        colWidth() {
            return this.waterfallWidth / this.colNum;
        },
        // 列数
        colNum() {
            return this.isMobile ? 2 : this.imgCol;
        }
    },
    watch: {
        imgsArr(newVal, oldVal) {
            if (this.imgsArr_c.length > newVal.length || (this.imgsArr_c.left > 0 && newVal[0] && !newVal[0]._height))
                this.reset();
            this.preLoad();
        }
    },
    methods: {
        // 预加载 设置图片宽高
        preLoad() {
            // forEach 无法通过 item 直接修改数组元素，需用数组下标修改
            this.imgsArr.forEach((item, index) => {
                if (index < this.loadedCount)
                    return;
                if (!item.src) {
                    this.imgsArr[index]._height = "0";
                    ++this.loadedCount;
                    if (this.imgsArr.length === this.loadedCount) {
                        this.preloaded();
                    }
                } else {
                    let img = new Image();
                    img.src = item.src;
                    img.onload = img.onerror = (e) => {
                        // 若加载失败则设置图片高度与宽度一致，加载成功则动态计算图片高度
                        this.imgsArr[index]._height = e.type === "load" ? Math.round(this.imgWidth * (img.height / img.width) + 25) : this.imgWidth
                        if (e.type === "error") {
                            this.imgsArr[index]._error = true;
                        }
                        ++this.loadedCount;
                        if (this.imgsArr.length === this.loadedCount) {
                            this.preloaded();
                        }
                    }
                }
            })
        },
        preloaded() {
            this.imgsArr_c = [].concat(this.imgsArr);
            this.$nextTick(() => {
                this.waterfall();
            });
        },
        // waterfall 布局
        waterfall() {
            // 等到整个视图都渲染完毕再执行
            // console.log("waterfall")
            this.imgBoxEls = this.$refs["imgBox"];
            if (!this.imgBoxEls)
                return;
            let top, left, height;
            if (this.beginIndex === 0)
                this.colsHeightArr = []
            for (let i = this.beginIndex; i < this.imgBoxEls.length; ++i) {
                if (!this.imgBoxEls[i])
                    return;
                height = this.imgBoxEls[i].offsetHeight;
                // 第一行
                if (i < this.colNum) {
                    this.colsHeightArr.push(height);
                    top = 0;
                    left = i * this.colWidth;
                } else {
                    // 找到最低的高度和其索引
                    let minHeight = Math.min.apply(null, this.colsHeightArr);
                    let minIdx = this.colsHeightArr.indexOf(minHeight);
                    top = minHeight;
                    left = minIdx * this.colWidth;
                    this.colsHeightArr[minIdx] += height;
                }
                // 设置 img-box 位置
                this.imgBoxEls[i].style.top = top + "px";
                this.imgBoxEls[i].style.left = left + "px";
                // 当前图片在窗口内，则加载
                if (top < this.viewHeight) {
                    // console.log("load")
                    let imgEl = this.imgBoxEls[i].children[0];
                    imgEl.src = imgEl.getAttribute("data-src");
                    imgEl.style.opacity = 1;
                    imgEl.style.transform = "scale(1)";
                }
            }
            this.beginIndex = this.imgBoxEls.length;
        },
        reset() {
            this.imgsArr_c = [];
            this.beginIndex = 0;
            this.loadedCount = 0;
        },
        // 滚动触底事件
        scrollFn() {
           
            let minHeight = Math.min.apply(null, this.colsHeightArr);
            // 滚动条滚动的高度
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // 到达最底层的高度最低的一列，则触发 handleReachBottom 方法
            if (
                scrollTop + this.viewHeight >
                minHeight - this.reachBottomDistance
            ) {
                this.handleReachBottom();
            }
            // 图片懒加载
            this.imgBoxEls.forEach((imgBoxEl, index) => {
                //  console.log("scroll")
                let imgEl = imgBoxEl.children[0];
                // 若已加载，则跳过
                if (imgEl.src)
                    return;
                // 当前图片所处的高度
                let top = imgBoxEl.style.top;
                top = Number.parseFloat(top.slice(0, top.length - 2));
                // 图片已到达可视范围，则加载
                // if (scrollTop + this.viewHeight > top) {
                    //  console.log("scroll8")
                    imgEl.src = imgEl.getAttribute("data-src")
                    imgEl.style.opacity = 1;
                    imgEl.style.transform = "scale(1)";
                // }
            })
        },
        scroll() {
            window.addEventListener('touchmove', this.throttle(this.scrollFn, 500));
            // window.onscroll = this.throttle(this.scrollFn, 500);
        },
        handleReachBottom() {
            this.imgsArr = this.imgsArr.concat(this.imgsArr);
            console.log("--this.imgsArr--", this.imgsArr)
        },
        // 节流函数
        throttle(fn, time) {
            let canRun = true;
            return function () {
                if (!canRun)
                    return;
                canRun = false;
                setTimeout(() => {
                    fn.apply(this);
                    canRun = true;
                }, time)
            }
        }
    },
    mounted() {
        this.viewHeight = (document.documentElement.clientHeight == 0) ? document.body.clientHeight : document.documentElement.clientHeight;
        this.preLoad();
        this.scroll();
    },
}
</script >

<style lang="less" scoped>
#waterfall {
    width: 100%;
    // height: 70%;
    position: relative;
    margin-left: .2rem;
    margin-top: .5rem;
    // overflow: scroll;
    // margin-bottom: 1rem;
    @keyframes show-card {
        0% {
            transform: scale(0.5);
        }

        100% {
            transform: scale(1);
        }
    }

    .img-box {
        position: absolute;
        border-radius: 10px;
        padding: 5px;
        padding-left: 0;

        .info {
            margin-left: .3rem;
            margin-bottom: .1rem;
            font-family: "Gill Sans", sans-serif;
            font-size: .35rem;
            font-weight: 600;
            line-height: .48rem;
        }

        img {
            width: 100%;
            border-radius: 10px;
            opacity: 0;
            transform: scale(0.5);
            transition: all 0.6s;
            transition-delay: 0.1s;
            cursor: pointer;
        }
    }
}
</style>