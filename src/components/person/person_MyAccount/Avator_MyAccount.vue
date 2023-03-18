<template>
    <div class="icon">
        <img :src="img" alt="">
        <!-- <div class="pie" @click="photo">
            <div class="smallpie">
                <img src="@/assets/svg/photo2.svg" alt="">
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
    name: 'Avator_MyAccount',
    data() {
        return {
            img: (this.$store.state.userinfo.upic)
        }
    }
    ,
    methods: {
        photo() {
            console.log('相机调用')
        }
    },
    computed: {

    },
    components: {

    }
}
</script>
<style lang="less" scoped>
.icon {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 1.2rem;
    margin-top: 1rem;

    img {
        width: 120px;
        height: 120px;
    }

    .pie {
        position: absolute;
        margin-left:1.5rem ;
        margin-top: -0.8rem;
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


}
@media screen and (max-width: 380px) {

    .icon {
        margin-top: 0rem;
    }
}
</style>