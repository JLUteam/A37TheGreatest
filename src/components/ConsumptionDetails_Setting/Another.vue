<template>
    <div class="Another">
        <div class="Date info">
            <p>{{ Ispay ? '支付日期' : ' 收入日期' }}</p>
            <div class="result">
                <!-- <input type="text" v-model="Date_" placeholder="点此添加" ref="Date_" @click="getDate_">-->
                <el-date-picker v-model="value1" type="date" placeholder="选择日期">
                </el-date-picker>
            </div>
        </div>
        <div class="Time info">
            <p>{{ Ispay ? '支付时间' : ' 收入时间' }}</p>
            <div class="result_time">
                <el-time-picker v-model="value2" :picker-options="{
                    selectableRange: '0:0:00 - 23:59:59'
                }" placeholder="任意时间点">
                </el-time-picker>
            </div>
        </div>
        <div class="Receipt info">
            <p>收据图片</p>
            <div class="result">
                <img src="@/assets/svg/photo.svg" alt="">
                <p>点击添加</p>
            </div>
        </div>



    </div>
</template>
<script>
export default {
    name: "Another",
    props: {
        bcategory: String,
        Ispay: Boolean
    },
    data() {
        return {
            Date_: '',
            Time_: '',
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
            value1: '',
            value2: new Date(2023, 3, 9, 8, 30),
        }
    },
    methods: {
        getDate_() {
            return this.value1.getFullYear()+"-"+(this.value1.getMonth()+1).toString().padStart(2, "0") +"-"+this.value1.getDate().toString().padStart(2, "0")
        },
        getTime_() {
            return this.value2.getHours().toString().padStart(2, "0") + ":" + this.value2.getMinutes().toString().padStart(2, "0") + ":" + this.value2.getSeconds().toString().padStart(2, "0")
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
          /deep/.el-date-editor.el-input{
            width: 2.1rem;
          }
          /deep/.el-input__inner{
            height: 0.4rem;
            border: none;
            background-color: transparent;
            margin-left: 0.5rem;
          }
          /deep/.el-icon-date:before{
            content: '';
          }
        }
    }

    .Time {
        .result_time {
            p {
                color: #121826;
                font-family: "Manrope-Regular";
                font-size: .28rem;
                font-weight: 400;
                line-height: .48rem;
                text-align: right;
                width: 1rem;
            }

            /deep/ .el-input__inner {
                height: 0.4rem;
                border: none;
                background-color: transparent;
                margin-left: 0.5rem;
            }

            /deep/.el-date-editor.el-input {
                width: 2.1rem;
            }

            /deep/.el-icon-time:before {
                content: '';

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
                margin-top: .1rem;

            }

            p {
                color: #121826;
                font-family: "Manrope-Regular";
                font-size: .28rem;
                font-weight: 400;
                line-height: .48rem;
                margin-right: -.2rem;
            }
        }
    }
}
</style>