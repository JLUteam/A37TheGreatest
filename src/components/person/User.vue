<template>
    <div class="User">
        <img :src="img" alt="">
                <div class="pie" @click="photo">
                    <div class="smallpie">
                        <img src="@/assets/svg/photo2.svg" alt="">
                    </div>
                </div>
        <div class="word">
            <p class="name">{{ this.$store.state.userinfo.uname }}</p>
            <!-- <p class="iphone">{{ this.$store.state.userinfo.uphone }}</p> -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'User',
    data() {
        return {
            img: (this.$store.state.userinfo.upic)
        }
    }
    ,
    methods: {
    },
    computed: {

    }
}
</script>
<style lang="less" scoped>
.User {
    width: 4.8rem;
    height: 1.6rem;
    margin-top: .2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 2.6rem;
.pie {
        position: absolute;
        left: 20%;
        top: 16%;
        width: .9rem;
        height: .75rem;
        border-radius: .75rem;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .smallpie {
            width: .7rem;
            height: .6rem;
            border-radius: .5rem;
            background: #928fff;
            border-radius: .425rem;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: .5rem;
                height: .4rem;
            }
        }
    }
    img {
        width: 1.6rem;
        height: 1.6rem;
    }

    .word {
        height: 1.6rem;

        .name {
            margin-top:.5rem;
            color: #121826;
            font-family: Manrope;
            font-size: .64rem;
            font-weight: 700;
            line-height: .52rem;
        }

        .iphone {
            margin-top: .25rem;
            color: #6c727f;
            font-family: Manrope;
            font-size: .24rem;
            font-weight: 400;
            line-height: .32rem;
        }
    }



}
</style>