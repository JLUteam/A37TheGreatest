<template>
    <div class="form__div">
        <label class="form__title">出生日期</label>
        <img class="logo" src="@/assets/svg/cake-candles-solid.svg" alt="">
        <div class="birthday">
            <!-- <select v-model="birtydayinfo.year" @change="setYear">
                <option v-for="item in yearList" :key="item" :label="item" :value="item"></option>
            </select>
            <span style="margin-left: 0.2rem">年</span>
            <select v-model="birtydayinfo.month" @change="setMonth">
                <option v-for="item in monthList" :key="item" :label="item" :value="item"></option>
            </select>
            <span style="margin-left: 0.2rem">月</span>
            <select v-model="birtydayinfo.day" @change="setDay">
                <option v-for="item in dayList" :key="item" :label="item" :value="item"></option>
            </select>
            <span style="margin-left: 0.2rem">日</span> -->
            <el-date-picker v-model="value1" type="date" placeholder="选择日期" :editable="false">
            </el-date-picker>
        </div>
    </div>
</template>
<script>
export default {
    name: "MyBirthday",
    computed: {
        yearList() {
            let currentYear = new Date().getFullYear();
            return this.getYearArr(1900, currentYear);
        },
        dayList() {
            let monthRange = this.getMonthDay(this.birtydayinfo.day, this.birtydayinfo.month);
            return this.getNumberArr(1, monthRange);
        },
    },
    data() {
        return {
            // monthList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            // birtydayinfo: {
            //     year: 1900,
            //     month: 1,
            //     day: 1
            // },
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
            value2: '',
        };
    },
    methods: {
        // getNumberArr(a, b) {
        //     return Array.from(Array(b - a + 1)).map((e, i) => a + i);
        // },
        // getYearArr(a, b) {
        //     return Array.from(Array(b - a + 1)).map((e, i) => a + i).reverse();
        // },
        // getMonthDay(year, month) {
        //     let days = new Date(year, month, 0).getDate();
        //     return days;
        // },
        // setYear() {
        //     this.$emit('setBirthDay', this.birtydayinfo);
        // },
        // setMonth() {
        //     this.$emit('setBirthDay', this.birtydayinfo);
        // },
        // setDay() {
        //     this.$emit('setBirthDay', this.birtydayinfo);
        // },
        getBirthDay() {
            return this.value1;
        }
        
    }
}

</script>
<style>
.el-picker-panel {
    left: 0.6rem !important;
    padding-left: .3rem !important;

}

.el-time-panel {
    left: 2.8rem !important;
    padding-left: 1.2rem !important;
}

/* .el-input__inner {
    pointer-events: none;
} */
</style>
<style lang="less" scoped>
.birthday {
    position: absolute;
    display: flex;
    justify-content: center;
    align-content: center;
    left: 0;
    top: .68rem;
    width: 6.54rem;
    height: 1.28rem;
    padding-left: .96rem;
    outline: none;
    z-index: 1;
    border-radius: .32rem;
    background: #f4f4f6;
    background-blend-mode: normal;
    border: none;

    select {
        margin-top: .3392rem;
        width: 1.8rem;
        height: .6rem;
        margin-left: 0rem;
        border: none;
        background: #f4f4f6;
        outline: none;
        border-radius: .32rem;
        font-size: .28rem;
        font-weight: 500;
        line-height: .48rem;
    }

    span {
        margin-top: .416rem;
        margin-right: .32rem;
    }

    /deep/.el-date-editor.el-input {
        width: 3rem;
        margin-left: .5rem;
        font-size: 0.28rem;
        // margin-right: .2rem;
    }

    /deep/.el-input__inner {
        height: 0.4rem;
        border: none;
        background-color: transparent;
        margin-top: .5rem;
        margin-left: -2rem;
        font-size: .28rem;
        font-weight: 500;
        line-height: .48rem;
    }

    /deep/.el-icon-date:before {
        content: '';
    }
}
</style>