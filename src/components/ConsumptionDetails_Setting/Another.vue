<template>
    <div class="Another">
        <div class="Date info">
            <p>Date</p>
            <div class="result">
                <input type="text" v-model="Date_" placeholder="备注" ref="Date_" @click="getDate_">
            </div>
        </div>
        <div class="Time info">
            <p>Time</p>
            <div class="result">
                <input type="text" v-model="Time_" placeholder="备注" ref="Time_" @click="getTime_">
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
    data() {
        return {
            Date_: '',
            Time_: ''
        }
    },
    methods: {
        getDate_() {
            return this.Date_
        },
        getTime_() {
            return this.Time_
        },
    },
};
</script>
<style lang="less" scoped>
input {
    border: none;
    outline: none;
    text-align: right;
    background-color: transparent;
    color: #121826;
    font-family: "Manrope-Regular";
    font-size: .28rem;
    font-weight: 400;
    line-height: .48rem;

}

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