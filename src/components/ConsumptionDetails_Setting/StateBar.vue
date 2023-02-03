<template>
    <div class="StateBar">
        <div class="Status info">
            <p>Status</p>
            <div class="result">
                <img src="@/assets/svg/Check.svg" alt="">
                <p>Completed</p>
            </div>
        </div>
        <div class="Category info">
            <p>Category</p>
            <div class="result" ref="bcategory_" @click="getbcategory_">
                <el-select v-model="bcategory_" filterable :placeholder="bcategory === '设置' ? 请选择 : bcategory"
                    v-if="bcategory != '设置'" class="seclect">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label">
                    </el-option>
                    <input type="text" v-model="bcategory_" placeholder="备注" v-if="bcategory === '设置'" >
                </el-select>
            </div>
        </div>
        <div class="Add_note info">
            <p>Add note</p>
            <div class="result">
                <input type="text" v-model="Add_note" placeholder="备注" ref="note" @click="getAdd_note">
            </div>
        </div>


    </div>
</template>
<script>
export default {
    name: "StateBar",
    data() {
        return {
            options: [{
                value: '选项1',
                label: '能源'
            }, {
                value: '选项2',
                label: '餐饮'
            }, {
                value: '选项3',
                label: '娱乐'
            }, {
                value: '选项4',
                label: '其他'
            },],
            Add_note: '',
            bcategory_: '',
        }
    },
    props: {
        recode: {
            bcategory: String
        }
    },
    methods: {
        getAdd_note() {
            return this.Add_note
        },
        getbcategory_() {
            return this.bcategory_
        },
    }
};
</script>
<style lang="less" scoped>
.StateBar {
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

    .Status {
        .result {
            display: flex;
            justify-content: space-around;
            width: 2.08rem;
            color: #121826;

            img {
                width: .4rem;
                height: .4rem;
            }

            p {
                color: #1b7a00;
                font-family: "Manrope-Regular";
                font-size: .28rem;
                font-weight: 400;
                line-height: .48rem;
                text-align: right;
            }
        }
    }

    .Category {
        .result {
            /deep/ .el-input__inner {
                border: none;
                background: transparent;
                text-align: right;
                cursor: pointer;
                color: #121826;
                font-family: "Manrope-Regular";
                font-size: .28rem;
                font-weight: 400;
                line-height: .48rem;
            }

            /deep/ .el-select-dropdown__item {
                font-size: .24rem;
            }
        }
    }
}
</style>