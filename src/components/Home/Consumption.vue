<template>
    <div class="Consumption">
        <div class="item1"></div>
        <div class="item2"></div>
        <div class="item3"></div>
        <div class="title">
            <p class="TodaySpanding">您的今日消费记录</p>
        </div>
        <div class="price">
            <p class="Spengding">
                ${{ zhenshu }}.{{ xiaoshu }}
            </p>
            <div class="comparetoy">
                对比昨天的消费
            </div>
            <div class="percent">
                <img src="@/assets/svg/Triangle.svg" class="triangle-up"></img>
                <p>{{ present }}%</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Consumption',
    data() {
        return {
        }
    },
    computed: {
        zhenshu() {

            return this.sum(this.today()).toFixed(2).split('.')[0]
        },
        xiaoshu() {

            return this.sum(this.today()).toFixed(2).split('.')[1]
        },

        present() {
            let present = ((this.sum(this.today()) - this.sum(this.yesterday())) / this.sum(this.yesterday())) * 100
            return present.toFixed(0)
        },
    },
    methods: {
        getHour(s1, s2) {
            s1 = new Date(s1.replace(/-/g, '/'));
            s2 = new Date(s2.replace(/-/g, '/'));
            var ms = Math.abs(s1.getTime() - s2.getTime());
            return ms / 1000 / 60 / 60;
        },
        formatDate(time, format = 'YY-MM-DD hh:mm:ss') {
            var date = new Date(time);
            var year = date.getFullYear(),
                month = date.getMonth() + 1,//月份是从0开始的
                day = date.getDate(),
                hour = date.getHours(),
                min = date.getMinutes(),
                sec = date.getSeconds();
            var preArr = Array.apply(null, Array(10)).map(function (elem, index) {
                return '0' + index;
            });
            var newTime = format.replace(/YY/g, year)
                .replace(/MM/g, preArr[month] || month)
                .replace(/DD/g, preArr[day] || day)
                .replace(/hh/g, preArr[hour] || hour)
                .replace(/mm/g, preArr[min] || min)
                .replace(/ss/g, preArr[sec] || sec);

            return newTime;
        },
        sum(time) {
            let data = this.$store.state.recodes.filter(
                (item) =>
                    (item.btime.indexOf(time) != -1)
            );

            return data.reduce((total, item) => {
                return total + -1 * item.amount;
            }, 0);
        },
        yesterday() {
            let date = new Date();
            var oneDayTime = 24 * 60 * 60 * 1000;
            const newDate = new Date(date.getTime() + -1 * oneDayTime);
            let year = newDate.getFullYear()
            let month = newDate.getMonth() + 1;
            let day = newDate.getDate();
            return '' + year + '-' + month + '-' + day
        },
        today() {
            let date = new Date();
            let year = date.getFullYear()
            let month = date.getMonth() + 1;
            let day = date.getDate();
            return '' + year + '-' + month + '-' + day
        }
    },
}
</script>
<style lang="less" scoped>
.Consumption {
    // padding: 0.48rem;
    width: 6.54rem;
    height: 2.78rem;
    margin-left: 0.48rem;
    margin-right: 0.48rem;
    border-radius: .48rem;
    background: #928fff;
    background-blend-mode: normal;
    overflow: hidden;

    .item1 {
        position: relative;
        left: 0;
        top: 0;
        width: 2.2rem;
        height: .44rem;
        background: #4a44c6;
        background-blend-mode: normal;
        border-radius: .48rem 0 .48rem 0;
    }

    .item2 {
        position: relative;
        left: 4.8rem;
        top: .2rem;
        width: 2.2rem;
        height: .64rem;
        border-radius: .54rem;
        background: #4a44c6;
        background-blend-mode: normal;
    }

    .item3 {
        position: relative;
        left: 5.6rem;
        top: 0.544rem;
        width: 1.46rem;
        height: .64rem;
        border-radius: .54rem;
        background: #a8a5ff;
        background-blend-mode: normal;
    }

    .title {
        background-color: #928fff;
        position: relative;
        left: .48rem;
        top: -1.2rem;
        height: .32rem;

        .TodaySpanding {
            opacity: 0.6;
            color: #ffffff;
            font-family: Manrope;
            font-size: .24rem;
            font-weight: 700;
            line-height: .32rem;
        }
    }

    .price {
        position: relative;
        left: .48rem;
        width: 3.42rem;
        height: 1.5rem;
        top: -1.2rem;

        .Spengding {
            color: #ffffff;
            font-family: Manrope;
            font-size: .72rem;
            font-weight: 700;
            line-height: .96rem;
        }

        .comparetoy {

            display: flex;
            align-content: center;
            align-items: center;
            width: 1.7rem;
            height: .52rem;
            color: #4a44c6;
            padding-top: .24rem;
            font-family: Manrope;
            font-size: .2rem;
            font-weight: 700;
            line-height: .26rem;
        }

        .percent {
            position: relative;
            left: 1.62rem;
            top: -.35rem;
            width: 1.48rem;
            height: .4rem;
            border-radius: .2rem;
            background: #ffffff;
            background-blend-mode: normal;
            box-shadow: 0px 8px 24px rgba(74, 68, 198, 0.4);
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-left: .2rem;

            .triangle-up {
                width: .20rem;
                height: .15rem;
            }

            p {
                margin-right: .2rem;
                width: .48rem;
                height: .32rem;
                color: #121826;
                font-family: Manrope;
                font-size: .24rem;
                font-weight: 700;
                line-height: .32rem;
            }
        }
    }
}
</style>