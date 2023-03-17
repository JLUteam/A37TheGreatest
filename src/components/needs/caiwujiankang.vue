<template>
    <div class="basic">
        <p class="title">现有金额</p>
        <div class="input_" v-for="recode in recodes" :key="recode.id">
            <div class="recode__div">
                <input type="text" v-model="recode.name" class="recode__title" placeholder="点此输入支付类型"
                    v-bind:readonly="recode.confirmed">
                <div class="container">
                    <div class="icon"><img :src="recode.pic" alt=""></div>
                    <input type="text" class="search" v-model="recode.amount" v-bind:readonly="recode.confirmed">
                    <button @click="confirmAmount(recode)" :class="!recode.confirmed ? 'button_' : 'button_ button_vis'">
                        <img src="@/assets/svg/gou.svg" alt="" class="gou">
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

export default {
    name: "caiwujiankang",
    data() {
        return {
            search_: '',
        };
    },
    computed: {
        recodes() {
            return this.$store.getters.getcards
        }
    },
    methods: {
        confirmAmount(recode) {
            if (recode.name != '' && recode.amount != null) {

                recode.confirmed = true
            }
            if (this.recodes.every(card => card.confirmed)) {
                this.$store.commit('addcard')
            }
        }
    },
    watch: {
    }
};
</script>
<style lang="less" scoped>
.basic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
        display: flex;
        margin-right: 4.8rem;
        margin-top: .5rem;

        height: .42rem;
        color: #121826;
        font-family: SimSun;
        font-size: .48rem;
        font-weight: 500;

    }

    .input_ {



        .recode__div {
            // height: 1.96rem;
            display: flex;
            flex-direction: column;
            margin-top: .5rem;
            margin-left: 0rem;
            // justify-content: ;
            // align-items: center;
            // margin-left: -1.2rem;

            .recode__title {
                color: #121826;
                font-family: Manrope;
                font-size: .28rem;
                font-weight: 500;
                line-height: .48rem;
                border: none;
                background-color: transparent;
                outline: none;
                margin-left: .2rem;
                margin-bottom: .3rem;
                // margin-bottom: 1rem;
            }

            .container {
                // height: 20%;
                // width: 90%;
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                // margin-top: 1.5rem;
                margin-left: 0rem;

                .icon {
                    height: 1.28rem;
                    width: 1.28rem;
                    box-sizing: border-box;
                    padding: 5px;
                    background: #f4f4f6;
                    border-radius: 0.32rem 0 0 0.32rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        height: .64rem;
                        width: .64rem;
                    }
                }

                .search {
                    border: 1px solid #ccc;
                    width: 5rem;
                    height: 1.28rem;
                    // padding-left: 0.96rem;
                    background: none;
                    outline: none;
                    z-index: 1;
                    border-radius: 0 0.32rem 0.32rem 0;
                    background: #f4f4f6;
                    background-blend-mode: normal;
                    border: none;
                    font-weight: 500;
                    font-size: .32rem;


                }

                .button_ {
                    width: .48rem;
                    height: .48rem;
                    background-color: transparent;
                    border: none;
                    margin-left: .2rem;

                    .gou {
                        background-color: transparent;
                        width: .48rem;
                        height: .48rem;
                        cursor: pointer;
                    }
                }

                .button_vis {
                    visibility: hidden;
                }



            }

        }


    }


}
</style>