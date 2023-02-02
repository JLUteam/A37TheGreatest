<template>
    <div>
        <div class="SettingTabel">
            <General></General>
            <Security></Security>
        </div>
        <div class="save_Setting">
            <button class="save_button" @click="updateuserinfo">save</button>
        </div>
    </div>

</template>
<script>
import General from './General.vue';
import Security from './Security.vue';

export default {
    name: "Person_laber",
    data() {
        return {
            username: "",
            password: "",
            phonenumber: ""
        };
    },
    methods: {
        updateuserinfo() {
            // this.$store.commit('updateuserinfo', [this.username, this.password, this.phonenumber])
            // console.log('success')
        }
    },
    components: { General, Security }
}
</script>

<style lang="less" scoped>
.SettingTabel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}


.save_Setting {
    position: absolute;
    top: 85%;
    left: 10%;

    .save_button {
        width: 6.54rem;
        height: 1.28rem;
        border-radius: .48rem;
        background: #fff;
        border: .1rem solid #f4f4f6;
        color: #4a44c6;
        font-family: Manrope;
        font-size: .32rem;
        font-weight: 700;
        line-height: .52rem;
        text-align: center;
        transition: background .3s;

    }

    .save_button:hover {
        background: #e9e9ff;
        border: .1rem solid #e9e9ff;
    }
}
</style>