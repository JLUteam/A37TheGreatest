<template>
    <div class="Another">
        <div class="Date info">
            <p>Date</p>
            <div class="result">
                <p>{{ Date_ }}</p>
            </div>
        </div>
        <div class="Time info">
            <p>Time</p>
            <div class="result">
                <p>{{ Time_ }}</p>
            </div>
        </div>
        <div class="Receipt info">
            <p>Receipt</p>
            <div class="result">
                <img src="@/assets/svg/photo.svg" alt="">
                <p>Completed</p>
            </div>
        </div>



    </div>
</template>
<script>
export default {
    name: "Another",
    props: {
        recode: {
            type: Object
        }
    },
    computed: {
        Date_() {
            return this.recode.btime.split(' ')[0]
        },
        Time_() {
            return this.recode.btime.split(' ')[1]
        }
    }
};
</script>
<style lang="less" scoped>
.Another {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 6.54rem;
    height: 3.04rem;
    border-radius: 16px;
    background: #f9fafb;
    background-blend-mode: normal;
    margin-bottom: .48rem;

    .info {
        display: flex;
        justify-content: space-between;
        width: 5.58rem;
        height: .48rem;

        p {
            color: #6c727f;
            font-family: "Manrope-Regular";
            font-size: .28rem;
            font-weight: 400;
            line-height: .48rem;
        }
    }

    .Date {
        .result {

            p {
                color: #121826;
                font-family: "Manrope-Regular";
                font-size: .28rem;
                font-weight: 400;
                line-height: .48rem;
                // text-align: right;
            }
        }
    }

    .Time {
        .result {
            p {
                color: #121826;
                font-family: "Manrope-Regular";
                font-size: .28rem;
                font-weight: 400;
                line-height: .48rem;
                text-align: right;
            }
        }
    }


    .Receipt {
        .result {
            display: flex;
            justify-content: space-around;
            width: 2.08rem;

            img {
                width: .32rem;
                height: .32rem;
            }

            p {
                color: #121826;
                font-family: "Manrope-Regular";
                font-size: .28rem;
                font-weight: 400;
                line-height: .48rem;
                text-align: right;
            }
        }
    }
}
</style>