<template>
    <div>
        <div :class="Flag ? 'Transactions_after' : 'Transactions'" @touchstart='touchstart' @touchmove='touchmove'
            v-show="Transactions_click">
            <div class="TransactionsTitle">
                <div class="line"></div>
                <p>{{ bcategory + '消费记录' }}</p>
                <p class="More" @mousedown="pull_up">查看更多</p>
            </div>
            <div class="search" v-show=Flag>
                <input type="text" class="search_record" placeholder="点击搜索" v-model="search_text">
            </div>
            <div class="Category" v-show='Flag'>
                <Category_Transactions ref="Category_Transactions"></Category_Transactions>
            </div>
            <div class="recodes_border">
                <div class="recordsets">
                    <div class="record" @click=ShowDetail(recode) v-for='recode in recodes' :key="recode.btime">
                        <img :src=recode.bpic class="merchantAvatar">
                        <div class="middle">
                            <p class="merchantname">{{ recode.bname }}</p>
                            <p class="ShoppingTime">{{ recode.btime }}</p>
                        </div>
                        <p class="consumption">{{ parseFloat(recode.amount).toFixed(2) }}</p>
                    </div>
                    <div v-if="Flag" class="temp2">
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!Transactions_click | Flag" class="temp">
        </div>
    </div>
</template>
<script>
import Category_Transactions from './Category_Transactions.vue'
export default {
    name: 'Transactions',
    data() {
        return {
            Transactions_css: 'Transactions',
            search_text: '',
            originalHeight: 0, //原始高度
            screenHeight: 0, //实时高度
            isShow: true,
        }
    },
    computed: {
        recodes: {
            get() {
                let recodes = this.$store.state.radio1 === '支出' ? this.recodes_(this.time()) : this.recodes_income(this.time())
                //根据recode的bname进行搜索
                if (this.search_text != '') {
                    recodes = recodes.filter(item => item.bname.indexOf(this.search_text) != -1)
                }
                return recodes
            }
        },
        Flag() {
            return this.$store.state.Transactions_pull
        },
        Transactions_click() {
            return this.$store.state.Transactions_click
        },
        bcategory() {
            return this.precent_Transactions_bcategory
        },
        precent_Transactions_bcategory() {
            return this.$store.state.precent_Transactions_bcategory
        },
    },
    watch: {
        recodes: function () {
            return this.$store.state.radio1 === '支出' ? this.recodes_(this.time()) : this.recodes_income(this.time())
        },
        Flag: function () {
            this.Transactions_pull = this.$store.state.Transactions_pull
            this.$refs.Category_Transactions.drawLine()
        },
        search_text: function () {
            if (this.search_text != '') {
                this.recodes = this.recodes.filter(item => item.bname.indexOf(this.search_text) != -1)
            }
        },
        screenHeight(new_, old) {

            console.log("height=" + new_)
        },

    },
    methods: {
        pull_up() {
            this.$store.commit('pull_up')
            this.$store.commit('updateactiveName', '一周')
            this.$store.state.radio2 = '一周'
        },
        touchstart(e) {
            if (this.Flag) {
                this.startX = e.touches[0].clientX
                this.startY = e.touches[0].clientY

            }
        },
        touchmove(e) {
            if (this.Flag) {
                this.moveX = e.touches[0].clientX
                this.moveY = e.touches[0].clientY
                if (this.startY - this.moveY <= -100) {
                    console.log(this.startY - this.moveY)// 下滑触发
                    console.log('你在往下滑')
                    this.$store.commit('pull_down')
                }
            }
        },
        ShowDetail(recode) {

            this.$router.push({
                name: 'ConsumptionDetails',
                query: {
                    recode: recode
                }
            })
        },
        recodes_(time) {
            let temp = []
            for (let i = 0; i < time.length; i++) {
                // console.log(this.$store.state.recodes)
                temp.push(...this.$store.state.recodes.filter(item => {

                    return ((item.bcategory === this.precent_Transactions_bcategory) & item.btime.indexOf(time[i]) != -1)
                }))
            }

            for (let i = 0; i < temp.length; i++) {

                if (temp[i].bpic == null) {
                    switch (temp[i].bcategory) {
                        case '餐饮':
                            temp[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/canyin.svg')
                            break;
                        case '服饰':
                            temp[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/fushi.svg')
                            break;
                        case '公交':
                            temp[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/gongjiao.svg')
                            break;
                        case '工作':
                            temp[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/gongzuo.svg')
                            break;
                        case '购物':
                            temp[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/gouwu.svg')
                            break;
                        case '居家':
                            temp[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/jujia.svg')
                            break;
                        case '礼物':
                            temp[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/liwu.svg')
                            break;
                        case '旅行':
                            temp[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/lvhang.svg')
                            break;
                        case '学习':
                            temp[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/xuexi.svg')
                            break;
                        case '美容':
                            temp[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/meirong-heicopy.svg')
                            break;
                        case '日用':
                            temp[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/riyongpin.svg')
                            break;
                        case '蔬菜':
                            temp[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/shucai.svg')
                            break;
                        case '水果':
                            temp[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/shuiguo.svg')
                            break;
                        case '通讯':
                            temp[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/tongxunlu.svg')
                            break;
                        case '娱乐':
                            temp[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/yule.svg')
                            break;
                        case '运动':
                            temp[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/yundong.svg')
                            break;
                        case '其他':
                            temp[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/shezhi.svg')
                            break;
                        default:
                            break;
                    }
                }
            }


            return temp
        },
        recodes_income(time) {
            let temp = []
            for (let i = 0; i < time.length; i++) {

                temp.push(...this.$store.state.income_statement.filter(item => ((item.bcategory === this.precent_Transactions_bcategory) & item.btime.indexOf(time[i]) != -1)))
                console.log(temp)
            }
            for (let i = 0; i < temp.length; i++) {
                if (temp[i].bpic == null) {
                    switch (temp[i].bcategory) {
                        case '兼职':
                            temp[i].bpic = require('@/assets/svg/icon_0p9q85sdf0hp/jianzhi.svg')
                            break;
                        case '礼金':
                            temp[i].bpic = require('@/assets/svg/icon_0p9q85sdf0hp/lijin.svg')
                            break;
                        case '其他':
                            temp[i].bpic = require('@/assets/svg/icon_0p9q85sdf0hp/shezhi.svg')
                            break;
                        case '退货':
                            temp[i].bpic = require('@/assets/svg/icon_0p9q85sdf0hp/tuihuo.svg')
                            break;
                        case '金融':
                            temp[i].bpic = require('@/assets/svg/icon_0p9q85sdf0hp/weibiaoti5.svg')
                            break;
                        case '银行':
                            temp[i].bpic = require('@/assets/svg/icon_0p9q85sdf0hp/yinhangka.svg')
                            break;
                        case '工资':
                            temp[i].bpic = require('@/assets/svg/icon_0p9q85sdf0hp/yuangonggongzi.svg')
                            break;
                        case '投资':
                            temp[i].bpic = require('@/assets/svg/icon_0p9q85sdf0hp/zizhuguanli1.svg')
                            break;
                        default:
                            break;
                    }
                }

            }

            return temp
        },
        time() {
            let time = []
            const date = new Date();
            let year = date.getFullYear();
            let month = (date.getMonth() + 1).toString().padStart(2, "0");
            let dayOfWeek = date.getUTCDay() === 0 ? 7 : date.getUTCDay();
            let day = date.getDate().toString().padStart(2, "0");
            let hour = date.getHours().toString().padStart(2, "0");
            if (this.$store.state.radio2 === '一天') {
                for (let i = 0; i <= hour; i++) {
                    //''+year+ '- '+month+' - '+'6'+' '+'17'
                    let temp = '' + year + '-' + month + '-' + day + ' ' + i.toString().padStart(2, "0") + ':'
                    time.push(temp)

                }

            } else if (this.$store.state.radio2 === '一周') {

                time = []
                for (let i = 1; i <= dayOfWeek; i++) {
                    var oneDayTime = 24 * 60 * 60 * 1000;
                    const newDate = new Date(date.getTime() + (i - dayOfWeek) * oneDayTime);
                    month = (newDate.getMonth() + 1).toString().padStart(2, "0");
                    day = newDate.getDate().toString().padStart(2, "0");
                    let temp = '' + year + '-' + month + '-' + day
                    time.push(temp)

                }
            } else if (this.$store.state.radio2 === '一月') {

                time = []
                for (let i = 1; i <= day; i++) {
                    let temp = '' + year + '-' + month + '-' + i.toString().padStart(2, "0")
                    time.push(temp)
                }
            }
            else if (this.$store.state.radio2 === '一年') {

                time = []
                for (let i = 1; i <= month; i++) {
                    //''+year+ '- '+month+' - '+'6'+' '+'17'
                    let temp = '' + year + '-' + i.toString().padStart(2, "0")
                    time.push(temp)

                }
            } else {
                time = []
                for (let i = year - 10; i < year; i++) {
                    let temp = i
                    time.push(temp)

                }
            }
            console.log(time)
            return time
        },
        watchResize() {
            //实时变化的窗口高度
            this.screenHeight = document.documentElement.clientHeight;
            console.log("当前高度为" + this.screenHeight)
        },
    },

    components: {
        Category_Transactions
    },
    beforeDestroy() {
        this.$store.commit('pull_down')
        window.removeEventListener("resize", this.watchResize);
    },
    mounted() {
        this.originalHeight = document.documentElement.clientHeight;
        window.addEventListener('resize', this.watchResize);
    },
}
</script>
<style lang="less" scoped>
.Transactions {
    width: 6.54rem;
    height: 6.38rem;
    margin-top: .4rem;
    // padding-left: .1rem;
    justify-content: center;
    align-items: center;

    .TransactionsTitle {
        width: 6.54rem;
        height: .56rem;
        margin-bottom: .5rem;

        p {
            position: relative;
            top: 0;
            // left: -.2rem;
            color: #121826;
            font-family: Manrope;
            font-size: .36rem;
            font-weight: 700;
            line-height: .56rem;
            float: left;
        }

        .More {
            color: #4a44c6;
            font-family: Manrope;
            font-size: .28rem;
            font-weight: 700;
            line-height: .48rem;
            border: none;
            cursor: pointer;
            float: right;
            padding-right: .5rem;
        }
    }

    .search {
        display: none;
        position: absolute;

        width: 6.54rem;
        height: 1.28rem;
        border-radius: .48rem;
        background: #f4f4f6;
        background-blend-mode: normal;
        margin-bottom: .5rem;

        .search_record {
            position: relative;
            width: 100%;
            height: 1.28rem;
            padding-left: .98rem;
            outline: none;
            border: 0 none;
            background-blend-mode: normal;
            color: #6c727f;
            font-family: Manrope;
            font-size: .32rem;
            font-weight: 400;
            line-height: .52rem;
            background: transparent;

        }

    }

    .recordsets {
        width: 6.54rem;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        overflow: hidden;
        height: 3.5rem;
        margin-bottom: .2rem;

        .record {
            width: 6.54rem;
            height: .96rem;
            border-color: #ffffff;
            margin-bottom: .3rem;
            display: flex;
            flex-direction: row;
            justify-self: center;
            align-items: center;
            cursor: pointer;

            .merchantAvatar {
                width: .96rem;
                height: .96rem;
                border-radius: .48rem;
            }

            .middle {
                height: .96rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;

                .merchantname {
                    display: inline-block;
                    height: .52rem;
                    color: #121826;
                    font-family: Manrope;
                    font-size: .32rem;
                    font-weight: 700;
                    line-height: .26rem;
                    margin-left: .5rem;
                }

                .ShoppingTime {
                    display: block;
                    height: .32rem;
                    color: #6c727f;
                    font-family: Manrope;
                    font-size: .24rem;
                    font-weight: 400;
                    line-height: .32rem;
                    margin-left: .5rem;
                }
            }

            .consumption {
                position: relative;
                color: #932205;
                font-family: Manrope;
                font-size: .32rem;
                font-weight: 700;
                line-height: .52rem;
                text-align: right;
                margin-left: .9rem;
            }

        }

    }
}

.Transactions_after {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    z-index: 100;
    padding-left: .5rem;
    justify-content: center;
    background-color: #ffffff;
    border-radius: .64rem .64rem 0 0;
    // box-shadow: 0 4px 20px hsla(207, 24%, 35%, .4);
    top: 1rem;
    left: 0rem;

    .Category {
        position: absolute;
        top: 15%;
        width: 6.54rem;
        height: 6.7044rem;
    }

    // background-color: #4a44c6;
    .TransactionsTitle {
        background-color: #ffffff;
        height: 2rem;

        .line {
            position: absolute;
            top: 4%;
            margin-left: 3rem;
            width: .96rem;
            height: .12rem;
            border-radius: .06rem;
            background: #e5e6eb;
            background-blend-mode: normal;
        }

        p {
            position: absolute;
            top: 8%;
            // margin-left: -3rem;
            color: #121826;
            font-family: Manrope;
            font-size: .36rem;
            font-weight: 700;
            line-height: .56rem;
            margin-bottom: .25rem;

        }

        .More {
            color: #4a44c6;
            font-family: Manrope;
            font-size: .28rem;
            font-weight: 700;
            line-height: .48rem;
            border: none;
            cursor: pointer;
            display: none;
        }
    }

    .search {
        position: absolute;
        top: 7%;
        left: 45%;
        width: 3.5rem;
        height: .8rem;
        border-radius: .48rem;
        background: #f4f4f6;
        background-blend-mode: normal;
        margin-bottom: .5rem;

        .search_record {
            position: relative;
            width: 100%;
            height: 1.28rem;
            padding-left: .58rem;
            outline: none;
            border: 0 none;
            background-blend-mode: normal;
            color: #6c727f;
            font-family: Manrope;
            font-size: .32rem;
            font-weight: 400;
            line-height: .52rem;
            background: transparent;
            margin-top: -.25rem;

        }

    }

    .recodes_border {
        position: absolute;
        overflow: scroll;
        top: 6rem;
        // left: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .recordsets {
            width: 6.54rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            margin-bottom: .2rem;



            .record {
                width: 6.54rem;
                height: .96rem;
                border-color: #ffffff;
                margin-bottom: .3rem;
                display: flex;
                flex-direction: row;
                justify-self: center;
                align-items: center;
                cursor: pointer;

                .merchantAvatar {
                    width: .96rem;
                    height: .96rem;
                    border-radius: .48rem;
                }

                .middle {
                    height: .96rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-content: center;

                    .merchantname {
                        display: inline-block;
                        height: .52rem;
                        color: #121826;
                        font-family: Manrope;
                        font-size: .32rem;
                        font-weight: 700;
                        line-height: .26rem;
                        margin-left: .5rem;
                    }

                    .ShoppingTime {
                        display: block;
                        height: .32rem;
                        color: #6c727f;
                        font-family: Manrope;
                        font-size: .24rem;
                        font-weight: 400;
                        line-height: .32rem;
                        margin-left: .5rem;
                    }
                }

                .consumption {
                    position: relative;
                    color: #932205;
                    font-family: Manrope;
                    font-size: .32rem;
                    font-weight: 700;
                    line-height: .52rem;
                    text-align: right;
                    margin-left: .9rem;
                }

            }

            .temp2 {
                height: 1.5rem;
            }

        }
    }

}

.temp {
    width: 7.5rem;
    height: 1.5rem;
}

@media screen and (min-width:280px) {
    .Transactions_after {
        .recodes_border {
            top: 60%;
        }
    }
}

@media screen and (min-width:360px) {
    .Transactions_after {
        .recodes_border {
            top: 58%;
        }
    }
}

@media screen and (min-width:375px) {
    .Transactions_after {
        .recodes_border {
            top: 65%;
        }
    }
}

@media screen and (min-width:390px) {
    .Transactions_after {
        .recodes_border {
            top: 55%;
        }
    }
}

//width为420时，设为80%


// @media screen and (min-height:420px) {
//     .Transactions_after {
//         .recodes_border {
//             top: 80%;
//         }
//     }
// }




@media screen and (min-width:768px) {
    .Transactions_after {
        .recodes_border {
            top: 75%;
        }
    }
}

@media screen and (min-width:820px) {
    .Transactions_after {
        .recodes_border {
            top: 69%;
        }
    }
}

@media screen and (min-width:912px) {
    .Transactions_after {
        .recodes_border {
            top: 60%;
        }
    }
}

@media screen and (min-width:540px) {
    .Transactions_after {
        .recodes_border {
            top: 88%;
        }
    }
}

@media screen and (min-width:1024px) {
    .Transactions_after {
        .recodes_border {
            top: 7.5rem;
        }
    }
}

// @media screen and (max-width:400px) {
//     .Transactions_after {
//         .recodes_border {
//             top: 88%;
//         }
//     }
// }


::-webkit-scrollbar {
    display: none;

}
</style>