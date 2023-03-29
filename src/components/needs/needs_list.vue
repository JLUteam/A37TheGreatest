<template>
    <div class="basic">
        <el-radio-group v-model="value2">
            <el-radio-button label="收入"></el-radio-button>
            <el-radio-button label="支出"></el-radio-button>
        </el-radio-group>
        <div class="title"></div>
        <div class="tip">
            <p class="mingxi">明细： </p>
            <el-button type="primary" @click="showDialog" class="button_">
                <img src="@/assets/svg/add.svg" class="add">
            </el-button>
            <el-dialog title="支付信息" :visible.sync="dialogVisible">

                <span>请输入支付金额：</span>
                <el-input v-model="amount"></el-input>
                <span>请选择支付时间：</span>
                <el-date-picker v-model="date"></el-date-picker>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="confirm">确 定</el-button>
                </span>
            </el-dialog>


        </div>
        <div class="recodes_border">
            <div class="recordsets">
                <div class="record" v-for="(recode) in recodes.reverse()" :key="recode.btime">
                    <div class="middle">
                        <p class="merchantname">{{ recode.shenfen }}</p>

                        <p class="ShoppingTime">{{ recode.btime.substr(0, 10) }}</p>
                        <!-- <div style="width: .48rem; height: .48rem; background-color: blueviolet; margin-left: 2.0rem;"></div> -->
                        <!-- <img class="jian" src="@/assets/svg/jian1.svg"> -->
                    </div>
                    <img class="jian" src="@/assets/svg/jian1.svg" @click="jian(recode)">
                    <p class="consumption">{{ parseFloat(recode.amount).toFixed(2) }}</p>
                </div>
                <div class="temp2">
                </div>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    name: "needs_list",
    data() {
        return {
            value2: "收入",
            dialogVisible: false,
            amount: '',
            date: ''

        };
    },
    computed: {
        recodes: {
            get() {
                let recodes = this.value2 === '支出' ? this.recodes_(this.time()) : this.recodes_income(this.time())
                return recodes
            },
            set() {
                return this.value2 === '支出' ? this.recodes_(this.time()) : this.recodes_income(this.time())
            }
        },
    }
    ,
    methods: {
        recodes_(time) {
            let temp = []
            for (let i = 0; i < time.length; i++) {
                // console.log(this.$store.state.recodes)
                temp.push(...this.$store.state.recodes_needs.filter(item => {

                    return ((item.amount < 0) & item.btime.indexOf(time[i]) != -1)
                }))
            }
            return temp
        },
        recodes_income(time) {
            let temp = []
            for (let i = 0; i < time.length; i++) {

                temp.push(...this.$store.state.recodes_needs.filter(item => ((item.amount > 0) & item.btime.indexOf(time[i]) != -1)))

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
            var oneDayTime = 24 * 60 * 60 * 1000;
            if (this.$store.state.activeName_needs === 'first') {
                time = []
                for (let i = 1; i <= dayOfWeek; i++) {
                    const newDate = new Date(date.getTime() + (i - dayOfWeek) * oneDayTime);
                    month = (newDate.getMonth() + 1).toString().padStart(2, "0");
                    day = newDate.getDate().toString().padStart(2, "0");
                    let temp = '' + year + '-' + month + '-' + day
                    time.push(temp)
                }
            } else if (this.$store.state.activeName_needs === 'second') {
                time = []
                for (let i = 1; i <= day; i++) {
                    let temp = '' + year + '-' + month + '-' + i.toString().padStart(2, "0")
                    time.push(temp)
                }
            }
            else if (this.$store.state.activeName_needs === 'third') {
                time = []
                for (let i = 1; i <= month; i++) {
                    let temp = '' + year + '-' + i.toString().padStart(2, "0")
                    time.push(temp)
                }
            } else {
                time = []
                for (let i = 1; i <= dayOfWeek; i++) {
                    const newDate = new Date(date.getTime() + (i - dayOfWeek) * oneDayTime);
                    month = (newDate.getMonth() + 1).toString().padStart(2, "0");
                    day = newDate.getDate().toString().padStart(2, "0");
                    let temp = '' + year + '-' + month + '-' + day
                    time.push(temp)
                }
            }
            return time
        },
        showDialog() {
            this.dialogVisible = true;
        },
        confirm() {
            // 处理用户输入的数据    const date = new Date();
            const date_ = this.date;
            let year = date_.getFullYear();
            let month = (date_.getMonth() + 1).toString().padStart(2, "0");
            let day = date_.getDate().toString().padStart(2, "0");
            let data = {
                "btime": '' + year + '-' + month + '-' + day,
                "amount": this.amount,
                "usr": "780303f9-b0a1-4d7b-a7b4-d191daa85f47",
                "shenfen": "儿子",
            }
            console.log('支付金额：', this.amount);
            console.log('支付时间：', this.date);
            this.$store.commit('addrecode_needs', data)
            this.dialogVisible = false;

        },
        jian(recode) {
            this.$store.commit('jian_needs', recode)
        },

    }
};
</script>
<style lang="less" scoped>
.basic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;

    /deep/.el-radio-button__orig-radio:checked+.el-radio-button__inner {
        width: 2.9856rem;
        height: .64rem;
        border-radius: .16rem;
        background: #e9e9ff;
        background-blend-mode: normal;
        color: #4a44c6;
        font-family: Manrope;
        font-size: .28rem;
        font-weight: 500;

        text-align: center;
        border-color: #fff;
        box-shadow: none;
        align-items: center;
    }

    /deep/.el-radio-button__inner {
        width: 2.9856rem;
        height: .64rem;
        background-color: transparent;
        border-radius: .16rem;
        border: none;
        background-blend-mode: normal;
        color: #121826;
        font-family: Manrope;
        font-size: .28rem;
        font-weight: 500;
        text-align: center;
        outline: none;
        border-color: #fff;

    }

    /deep/ .el-radio-button:first-child .el-radio-button__inner {
        border-left: none;
    }

    .title {
        display: flex;
        align-items: center;
        font-size: .28rem;
        color: #999;

    }

    .title::before,
    .title::after {
        content: '';
        flex: 1;
        height: .02rem;
        background: #ccc;
    }

    .title::before {
        margin-right: .2rem;
    }

    .title::after {
        margin-left: .2rem;
    }

    .tip {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-self: center;
        margin-top: .5rem;

        .mingxi {
            font-size: .28rem;
            font-weight: 500;

            margin-right: 4rem;
        }

        .add {
            width: .48rem;
            height: .48rem;
            cursor: pointer;
        }


        .button_ {

            background-color: transparent;
            border: none !important;

        }




        /deep/.el-input__inner {
            // height: 0.4rem;

            margin-top: .2rem;
            width: 3.5rem;
            font-size: .28rem;
            font-weight: 500;
            line-height: .48rem;
        }

        /deep/.el-input {
            font-size: .28rem;
            margin-bottom: .2rem;
        }

        /deep/.el-icon-date:before {
            content: '';
        }

        /deep/.el-dialog {
            width: 60%;
        }
    }

    .recodes_border {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: scroll;

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
                cursor: pointer;



                .jian {
                    margin-left: 2.95rem;
                    width: .48rem;
                    height: .48rem;
                    margin-top: .2rem;
                    cursor: pointer;
                }

                .middle {
                    height: .96rem;
                    display: flex;
                    flex-direction: column;
                    height: 1rem;
                    // justify-content: center;
                    // align-content: center;


                    .merchantname {

                        width: 2rem;
                        height: .52rem;
                        color: #121826;
                        font-family: Manrope;
                        font-size: .32rem;
                        font-weight: 700;
                        line-height: .26rem;
                        padding-left: .5rem;
                    }

                    .ShoppingTime {
                        display: inline-block;
                        margin-top: -.2rem;
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
                    margin-top: .2rem;
                    margin-left: -2.5rem;
                }

            }

            .temp2 {
                height: 1.5rem;
            }

        }
    }
}
</style>