<template>
    <div class="basic">
        <div class="recodes_border">
            <div class="recordsets">
                <div class="record" v-for='recode in this.$store.getters.getselectedItems' :key="recode.btime">
                    <img :src=recode.bpic class="merchantAvatar">
                    <div class="middle">
                        <p class="merchantname">{{ recode.bname }}</p>
                        <p class="ShoppingTime">{{ recode.btime }}</p>
                    </div>
                    <!-- <img class="jian" :src="require('@/assets/svg/jian1.svg')" @click="jian(recode)"> -->
                    <p class="consumption">{{ parseFloat(recode.amount).toFixed(2) }}</p>
                </div>
                <div class="temp2">
                </div>
            </div>
        </div>
        <div class="save">
            <button class="save_button">分享已选账目</button>
        </div>
    </div>
</template>
<script>

export default {
    name: "share",
    data() {
        return {

        };
    },
    components: {
    },
    methods: {
    },

}
</script>
<style lang="less" scoped>
.basic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;




    .recodes_border {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // overflow: scroll;
        height: 10rem;

        .recordsets {
            width: 6.54rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            // margin-bottom: .2rem;
            // height: 4rem;
            height: 10rem;
            // margin-top: 6.5rem;

            .record {
                width: 6.54rem;
                height: .96rem;
                border-color: #ffffff;
                margin-bottom: .3rem;
                display: flex;
                cursor: pointer;
                margin-top: .5rem;

                .merchantAvatar {
                    width: .96rem;
                    height: .96rem;
                    border-radius: .48rem;
                }

                .middle {
                    height: 1.3rem;
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
                    margin-left: 1rem;
                }

            }




        }
    }








    .save {
        cursor: pointer;
        position: fixed;
        bottom: 10%;

        .save_button {
            width: 6.54rem;
            height: 1.28rem;
            border-radius: .48rem;
            background: #fff;
            border: .1rem solid #f4f4f6;
            color: #4A44C6;
            font-family: Manrope;
            font-size: .32rem;
            font-weight: 700;
            line-height: .52rem;
            text-align: center;
            transition: background .3s;
            background: #e9e9ff;
            border: .1rem solid #e9e9ff;
            opacity: 0.7;
            transition: opacity 0.1s;
        }

        .save_button:hover {
            opacity: 1;
        }
    }
}
</style>