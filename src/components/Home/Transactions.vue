<template>
    <div :class="Flag ? 'Transactions_after' : 'Transactions'" @touchstart='touchstart' @touchmove='touchmove'>
        <div class="TransactionsTitle">
            <div class="line"></div>
            <p>消费记录</p>
            <p class="More" @mousedown="pull_up">查看更多</p>
        </div>
        <div class="search" v-show=Flag>

            <input type="text" class="search_record" placeholder="Search transactions">
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
                <div class="temp" v-if="Flag"></div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'Transactions',
    data() {
        return {
            Transactions_css: 'Transactions'
        }
    },
    computed: {
        recodes() {
            let temp = this.$store.state.recodes.filter(
                (item) => (item.btime.indexOf(this.today()) != -1)
            )

            for (let i = 0; i < temp.length; i++) {
                console.log(temp[i])
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
        Flag() {
            return this.$store.state.Transactions_pull
        },

    },
    watch: {
        recodes: function () {
            this.$store.state.recodes.filter(
                (item) =>
                    (item.btime.indexOf(this.today()) != -1)
            )
        },
        Flag: function () {
            this.Transactions_pull = this.$store.state.Transactions_pull
        }
    },
    methods: {
        pull_up() {
            this.$store.commit('pull_up')
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
        today() {
            let date = new Date()
            let year = date.getFullYear()
            let month = (date.getMonth() + 1).toString().padStart(2, "0");
            let day = date.getDate().toString().padStart(2, "0");
            return ('' + year + '-' + month + '-' + day)
        }
    },
    beforeDestroy() {
        this.$store.commit('pull_down')
    }
}
</script>
<style lang="less" scoped>
.Transactions {
    width: 6.54rem;
    height: 6.3rem;
    margin-top: .7rem;
    padding-left: .1rem;
    // transition: width 2s, height 3s;

    // background-color: #4a44c6;
    .TransactionsTitle {
        width: 6.54rem;
        height: .56rem;
        margin-top: -1rem;
        margin-bottom: .8rem;

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

    .recordsets {
        width: 6.54rem;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        overflow: hidden;
        height: 3.8rem;
        margin-bottom: .2rem;

        .record {
            width: 6.54rem;
            height: .96rem;
            border-color: #ffffff;
            margin-bottom: .4rem;
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
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    // padding-left: .48rem;
    // padding-right: .48rem;
    // height: 15.98rem;
    // z-index: 100;
    background-color: #ffffff;
    border-radius: .64rem .64rem 0 0;
    // box-shadow: 0 4px 20px hsla(207, 24%, 35%, .4);
    top: 2rem;

    // transition: height .5s;
    .TransactionsTitle {
        background-color: #ffffff;
        height: 2rem;

        .line {
            position: absolute;
            top: 4%;
            left: 45%;
            width: .96rem;
            height: .12rem;
            border-radius: .06rem;
            background: #e5e6eb;
            background-blend-mode: normal;
        }

        p {
            position: absolute;
            top: 8%;
            margin-left: -3rem;
            // left: 5%;
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
        top: 15%;
        // left: 5%;
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

    .search::after {
        content: '';
        position: absolute;
        left: 0;
        width: .48rem;
        height: .48rem;
        left: .28rem;
        top: .4rem;
        background-image: url(@/assets/svg/search.svg);
        background-size: contain;
    }

    .recodes_border {
        position: absolute;
        overflow: scroll;
        top: 28%;
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

            .temp {
                height: 1.5rem;
            }

        }
    }



}

// @media screen and (min-width:750px) {
//     .Transactions_after {
//         max-height: 79%;
//     }
// }

// @media screen and (min-width:900px) {
//     .Transactions_after {
//         max-height: 85%;
//     }
// }

@media screen and (min-width:1024px) {
    .Transactions_after {
        .recodes_border {
            top: 38%;
        }
    }
}

::-webkit-scrollbar {
    display: none;


}
</style>