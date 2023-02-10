<template>
    <div class="form_">
        <div class="div_form">
            <label for="username_input" class="title_form">用户名</label>
            <div class="icon">
                <img src="@/assets/svg/user.svg">
            </div>
            <p v-if="!Ischange">{{ this.$store.state.userinfo.uname }}</p>
            <input v-if="Ischange" type="text" class="input_form" v-model="username" placeholder="请设置您的用户名">
        </div>
        <div class="div_form">
            <label for="username_input" class="title_form">密码</label>
            <div class="icon">
                <img src="@/assets/svg/IconsLock.svg">
            </div>
            <p v-if="!Ischange">{{ this.$store.state.userinfo.upassword }}</p>
            <input v-if="Ischange" type="text" class="input_form" v-model="password" placeholder="请设置您的密码">
        </div>
        <div class="div_form">
            <label for="username_input" class="title_form">手机号</label>
            <div class="icon">
                <img src="@/assets/svg/cn.svg">
            </div>
            <p v-if="!Ischange">{{ this.$store.state.userinfo.uphone }}</p>
            <input v-if="Ischange" type="text" class="input_form" v-model="phonenumber" placeholder="请重新输入您的手机号">
        </div>
        <div class="save">
            <button class="save_button" @click="updateuserinfo">保存修改</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "Person_form",
    data() {
        return {
            username: '',
            password: '',
            phonenumber: ''
        }
    },
    watch: {
        username() {
        }
    },
    methods: {
        updateuserinfo() {
            this.$store.commit('updateuserinfo', [this.username, this.password, this.phonenumber])
            console.log('success')
        },

    },
    props: {
        Ischange: Boolean
    },
    computed: {

    }
}
</script>

<style lang="less" scoped>
.form_ {
    width: 6.54rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    overflow: scroll;

    .div_form {
        position: relative;
        height: 1.96rem;
        margin-bottom: 0.48rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 1rem;

        p {
            margin-right: 1rem;
            padding-top: .4rem;
          
            width: 6.54rem;
            height: 1.28rem;
            padding-left: 1.26rem;
            background: none;
            outline: none;
            z-index: 1;
            border-radius: 0.32rem;
            background: #f4f4f6;
            background-blend-mode: normal;
            border: none;
            font-size: .28rem;
            font-weight: 500;
            line-height: .48rem;
        }

        .title_form {
            margin-right: 6rem;
            color: #121826;
            font-family: Manrope;
            font-size: 0.28rem;
            font-weight: 500;
            line-height: 0.48rem;
        }

        .icon {
            position: absolute;
            top: 50%;
            left: 5%;
            width: .48rem;
            height: .48rem;
            z-index: 100;

            img {
                width: .48rem;
                height: .48rem;
            }

        }

        .input_form {
            // position: absolute;
            // left: 0;
            // top: 0.68rem;
            margin-right: 1rem;
            width: 6.54rem;
            height: 1.28rem;
            padding-left: 0.96rem;
            background: none;
            outline: none;
            z-index: 1;
            border-radius: 0.32rem;
            background: #f4f4f6;
            background-blend-mode: normal;
            border: none;
            font-size: .28rem;
            font-weight: 500;
            line-height: .48rem;
        }
    }


}

.save {
    position: absolute;
    top: 85%;

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