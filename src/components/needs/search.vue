<template>
    <div class="basic">
        <div class="container">
            <div class="icon"><img src="@/assets/svg/search .svg" alt=""></div>
            <input type="text" class="search" placeholder="此处输入待搜索的信息" v-model="search_">

        </div>

        <div class="tip">
            <p class="mingxi">已选: </p>
        </div>
        <div class="recodes_border">
            <div class="recordsets">
                <div class="record" v-for='recode in this.recodes_seleced.reverse()' :key="recode.btime">
                    <img :src=recode.bpic class="merchantAvatar">
                    <div class="middle">
                        <p class="merchantname">{{ recode.bname }}</p>
                        <p class="ShoppingTime">{{ recode.btime }}</p>
                    </div>
                    <img class="jian" src="@/assets/svg/jian1.svg" @click="jian(recode)">
                    <p class="consumption">{{ parseFloat(recode.amount).toFixed(2) }}</p>
                </div>
                <div class="temp2">
                </div>
            </div>
        </div>
        <el-divider></el-divider>
        <div class="tip">
            <p class="mingxi">未选: </p>
        </div>
        <div class="recodes_border">
            <div class="recordsets">
                <div class="record" v-for='recode in recodes.reverse()' :key="recode.btime">
                    <img :src=recode.bpic class="merchantAvatar">
                    <div class="middle">
                        <p class="merchantname">{{ recode.bname }}</p>
                        <p class="ShoppingTime">{{ recode.btime }}</p>
                    </div>
                    <img class="jian" src="@/assets/svg/add (1).svg" @click="add(recode)">
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
    name: "search_need",
    data() {
        return {
            search_: '',
        };
    },
    components: {
    },
    methods: {
        add(recode) {
            this.$store.commit('jian_searchResult', recode);
            this.$store.commit('add_selectedItems', recode);
        },
        jian(recode) {
            this.$store.commit('jian_selectedItems', recode);

        }
    },
    computed: {
        recodes: {
            get() {
                // this.$store.dispatch('searchIncome', this.search_);

                return this.$store.getters.searchResult;
            },
            set() {

                return this.$store.getters.searchResult;
            }
        },
        recodes_seleced: {
            get() {
                return this.$store.getters.getselectedItems;
            },
            set() {
                return this.$store.getters.getselectedItems;
            }
        }
    },
    watch: {
        search_: {
            handler: function (newval, oldval) {
                // console.log('!!!')
                this.$store.dispatch('searchIncome', newval);
            },
            immediate: true
        }
    }
};
</script>
<style lang="less" scoped>
.basic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .container {
        height: 20%;
        width: 90%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin-top: .3rem;

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
            width: 90%;
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

        // input {
        //     border: none;
        //     cursor: pointer;
        //     width: 100%;
        //     height: 100%;
        //     padding: .5rem 0;
        // }
    }

    .tip {
        display: flex;
        justify-content: start;
        align-self: center;
        margin-top: .4rem;

        .mingxi {
            font-size: .28rem;
            font-weight: 500;

            margin-right: 5.6rem;
        }
    }

    .recodes_border {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: scroll;
        height: 4rem;

        .recordsets {
            width: 6.54rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            // margin-bottom: .2rem;
            height: 4rem;
            // margin-top: 6.5rem;

            .record {
                width: 6.54rem;
                height: .96rem;
                border-color: #ffffff;
                margin-bottom: .3rem;
                display: flex;
                cursor: pointer;



                .jian {
                    margin-left: 1.95rem;
                    width: .48rem;
                    height: .48rem;
                    margin-top: .2rem;
                    cursor: pointer;
                }

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

                        width: 2rem;
                        height: .52rem;
                        color: #121826;
                        font-family: Manrope;
                        font-size: .32rem;
                        font-weight: 700;
                        line-height: .26rem;
                        margin-left: .5rem;
                        // margin-top: -.2rem;
                        margin-bottom: .4rem;
                    }

                    .ShoppingTime {

                        display: inline-block;
                        margin-top: -.5rem;
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
                    margin-left: -2rem;
                }

            }




        }
    }


}
</style>