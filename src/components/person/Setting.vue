<template>
    <div class="Setting">
        <div class="MyAccount" @click="toMyAccount">
            <div class="Myimg">
                <img src="@/assets/svg/person_active.svg" alt="">
            </div>
            <p>myAccount</p>
            <img src="@/assets/svg/next.svg" alt="" class="next">
        </div>
        <div class="MySetting" @click="toSetting">
            <div class="Myimg">
                <img src="@/assets/svg/setting.svg" alt="">
            </div>
            <p>Setting</p>
            <img src="@/assets/svg/next.svg" alt="" class="next">
        </div>
    </div>
</template>
<script>
export default {
    name: 'Setting',
    data() {
        return {
        }
    }
    ,
    methods: {
        toMyAccount() {
            this.$router.push({
                name: 'person_MyAccount',
            })
        },
        toSetting() {
            this.$router.push({
                name: 'person_Setting',
            })
        }
    },
    computed: {

    }
}
</script>
<style lang="less" scoped>
.Setting {


    .MyAccount {
        width: 6.54rem;
        height: .96rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-Top: .5rem;

        .Myimg {
            width: .96rem;
            height: .96rem;
            border-radius: .32rem;
            background: #e9e9ff;
            background-blend-mode: normal;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: .48rem;
                height: .48rem;
            }
        }

        p {
            width: 3.62rem;
            height: .48rem;
            color: #121826;
            font-family: Manrope;
            font-size: .28rem;
            font-weight: 700;
            line-height: .48rem;
        }

        .next {
            width: .48rem;
            height: .48rem;
        }
    }

    .MySetting {
        width: 6.54rem;
        height: .96rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-Top: .5rem;

        .Myimg {
            width: .96rem;
            height: .96rem;
            border-radius: .32rem;
            background: #e9e9ff;
            background-blend-mode: normal;
            display: flex;
            justify-content: center;
            align-items: center;


            img {
                width: .48rem;
                height: .48rem;
            }
        }

        p {
            width: 3.62rem;
            height: .48rem;
            color: #121826;
            font-family: Manrope;
            font-size: .28rem;
            font-weight: 700;
            line-height: .48rem;
        }

        .next {
            width: .48rem;
            height: .48rem;
        }
    }
}
</style>