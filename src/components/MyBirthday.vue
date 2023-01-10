<template>
    <div class="form__div">
        <label class="form__title">birthday</label>
        <img class="logo" src="../assets/svg/cake-candles-solid.svg" alt="">
        <div class="birthday">
            <select v-model="birtydayinfo.year" @change="setYear">
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
            <span style="margin-left: 0.2rem">日</span>
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
            monthList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            birtydayinfo: {
                year: 1900,
                month: 1,
                day: 1
            }
        };
    },
    methods: {
        getNumberArr(a, b) {
            return Array.from(Array(b - a + 1)).map((e, i) => a + i);
        },
        getYearArr(a, b) {
            return Array.from(Array(b - a + 1)).map((e, i) => a + i).reverse();
        },
        getMonthDay(year, month) {
            let days = new Date(year, month, 0).getDate();
            return days;
        },
        setYear() {
            this.$emit('setBirthDay', this.birtydayinfo);
        },
        setMonth() {
            this.$emit('setBirthDay', this.birtydayinfo);
        },
        setDay() {
            this.$emit('setBirthDay', this.birtydayinfo);
        },
    }
}

</script>
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
}

</style>